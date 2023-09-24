import path from 'path';
import express from 'express';
import { createRequestHandler } from '@remix-run/express';
import { broadcastDevReady } from '@remix-run/node';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Remix fingerprints its assets so we can cache forever.
app.use('/build', express.static('public/build', { immutable: true, maxAge: '1y' }));

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public', { maxAge: '1h' }));

const BUILD_DIR = path.join(process.cwd(), 'build');
const build = require(BUILD_DIR);

app.all(
  '*',
  (req, res, next) => {
    // The following sets multiple headers with same name correctly
    res.append('Custom', 'one=1');
    res.append('Custom', 'two=2');

    createRequestHandler({
      build,
      mode: build.mode,
    })(req, res, next);
  }
);

app.listen(port, async () => {
  console.info(`✅ app ready: http://localhost:${port}`);

  if (process.env.NODE_ENV === 'development') {
    broadcastDevReady(build);
  }
});

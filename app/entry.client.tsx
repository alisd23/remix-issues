import { hydrateRoot } from 'react-dom/client';
import { RemixBrowser } from '@remix-run/react';

console.log('CLIENT ENTRY');

hydrateRoot(document, <RemixBrowser />);

import { useFetcher } from '@remix-run/react';
import { useRef } from 'react';

const Test = () => {
  const fetcher = useFetcher();
  console.log(fetcher.data);

  return (
    <div>
      <button
        onClick={() =>
          fetcher.submit({}, { method: 'delete', action: '/action' })
        }
      >
        Without form
      </button>
      <fetcher.Form action="/action" method="post">
        <input name="foo" />
        <button>submit</button>
      </fetcher.Form>
      <div>Result: {fetcher.data?.ok.toString()}</div>
    </div>
  );
};

export default function Index() {
  if (typeof window === 'undefined') {
    console.log('RENDER ON SERVER');
  }
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <img src={'https://picsum.photos/seed/picsum/200/300'} />
      <Test />
    </div>
  );
}

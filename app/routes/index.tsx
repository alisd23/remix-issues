import { useFetcher } from '@remix-run/react';

const Test = () => {
  const fetcher = useFetcher();
  console.log(fetcher.data);

  return (
    <div>
      <div style={{ display: 'flex', gap: '40px', paddingBottom: 20, marginBottom: 20, borderBottom: '2px solid #dddddd' }}>
        {/* fetcher.submit */}
        <div>
          <h2><code>fetcher.submit()</code></h2>
          <button
            onClick={() =>
              fetcher.submit({ text: 'used fetcher.submit' }, { method: 'delete', action: '/action' })
            }
          >
            Without form
          </button>
        </div>
        {/* fetcher.Form */}
        <div>
          <h2><code>{'fetcher.Form />'}</code></h2>
          <fetcher.Form action="/action" method="post">
            <input name="text" defaultValue="used fetcher.Form" />
            <button>submit</button>
          </fetcher.Form>
        </div>
      </div>
      <p>Should expect result below if page does not do a full reload</p>
      <div style={{ padding: 12, border: '1px solid black' }}><strong>Result:</strong> {fetcher.data?.text}</div>
    </div>
  );
};

export default function Index() {
  if (typeof window === 'undefined') {
    console.log('RENDER ON SERVER');
  }
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Reload issue (NPM)</h1>
      <Test />
    </div>
  );
}

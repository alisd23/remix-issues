import { ActionFunction, json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { Headers } from '@remix-run/web-fetch';

if (typeof window === 'undefined') {
  console.log('USING REMIX HEADERS IMPL?', (global.Headers as any) === Headers);
}

export const action: ActionFunction = async () => {
  const res = json('complete', {
    headers: [['set-cookie', 'one=1'], ['set-cookie', 'two=2']]
  });
  console.log('ACTION HEADERS', [...res.headers.entries()]);
  return res;
};

export default function Index() {
  const result = useActionData();

  return (
    <div>
      <h1>Mulitple cookie setting issue</h1>
      <p>The action called from the form submit below will try to set two cookies in response (a very common thing to do).</p>
      <p>When using a custom server and @remix-run/express, the headers are parsed incorrectly and returned to the client in a format browsers can not understand</p>
      
      <Form action="/?index" method="post">
        <button type="submit">Set cookies</button>
      </Form>
      <div>{result}</div>
    </div>
  );
}

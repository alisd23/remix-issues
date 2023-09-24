import { ActionFunction, json } from '@remix-run/node';
import { Form } from '@remix-run/react';

export const action: ActionFunction = async () => {
  return json('/', {
    headers: [['set-cookie', 'one=1'], ['set-cookie', 'two=2']]
  });
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Mulitple cookie setting issue</h1>
      <p>The action called from the form submit below will try to set two cookies in response (a very common thing to do).</p>
      <p>When using a custom server and @remix-run/express, the headers are parsed incorrectly and returned to the client in a format browsers can not understand</p>
      <Form action="/?index" method="post">
        <button type="submit">Set cookies</button>
      </Form>
    </div>
  );
}

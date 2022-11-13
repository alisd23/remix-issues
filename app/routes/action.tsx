import { json, ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const text = formData.get('text');

  console.log('SUBMITTED TEXT:', text);

  return json({ ok: true, text });
};

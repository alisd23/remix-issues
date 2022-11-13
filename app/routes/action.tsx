import { json, ActionFunction } from '@remix-run/node';

export const action: ActionFunction = async ({ request }) => {
  return json({ ok: true });
};

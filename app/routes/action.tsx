import { json, ActionFunction } from '@remix-run/node';

export const action: any = async ({ request }: any) => {
  const formData = await request.formData();
  const text = formData.get('text');

  console.log('SUBMITTED TEXT:', text);

  // return new Response(JSON.stringify({ ok: true, text }));
  return json({ ok: true, text });
};

export default function Index() {
  if (typeof window === 'undefined') {
    console.log('ACTION RENDER ON SERVER');
  }
  return <div>Hello</div>;
}

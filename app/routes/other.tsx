import { Link } from '@remix-run/react';

export default function Other() {
  return (
    <div>
      <h1>Other page</h1>
      <Link to="/">Navigate home</Link>
    </div>
  );
}

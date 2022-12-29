import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="flex-none">
      <ul className="menu menu-horizontal">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

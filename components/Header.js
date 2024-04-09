import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="layout_header ">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/comments">Comments</Link>
        </li><li>
          <Link href="/contact">Contact</Link>
        </li><li>
          <Link href="/dashboard">Dashboard</Link>
        </li><li>
          <Link href="/dashboard-swr">Dashboard-SWR</Link>
        </li><li>
          <Link href="/docs">Docs</Link>
        </li><li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li> <li>
          <Link href="/pets">Pets</Link>
        </li> <li>
          <Link href="/posts">Posts</Link>
        </li> <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;
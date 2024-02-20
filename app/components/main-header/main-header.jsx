"use client";
import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
// import { usePathname } from "next/navigation";

import NavLink from "./nav-link";

export default function MainHeader() {
  // const path = usePathname(); // for active href links

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community"> Foodies Community</NavLink>
            {/* <Link
              href="/community"
              className={path === "/community" ? classes.active : undefined}
            >
              Foodies Community
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

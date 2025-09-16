"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./themeToggle";


const links = [
{ href: "/", label: "Home" },
{ href: "/about", label: "About" },
{ href: "/projects", label: "Projects" },
{ href: "/skills", label: "Skills" },
{ href: "/contact", label: "Contact" },
];


export default function Navbar() {
const pathname = usePathname();
return (
<nav className="nav container">
<div style={{fontWeight:800}}>Thania</div>
<div className="links">
{links.map(l => (
<Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
{l.label}
</Link>
))}
</div>
<ThemeToggle />
</nav>
);
}
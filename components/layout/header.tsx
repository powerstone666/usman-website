import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="site-header">
      <div className="container shell header-shell">
        <Link href="/" className="brand" aria-label={`${SITE_NAME} homepage`}>
          <Image
            src="/usmanlogo.jpeg"
            alt={`${SITE_NAME} logo`}
            width={36}
            height={36}
            priority
          />
          <span className="brand-name">{SITE_NAME}</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

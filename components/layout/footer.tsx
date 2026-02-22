import Link from "next/link";
import { COMPANY_EMAIL, COMPANY_NAME, COMPANY_REGION } from "@/lib/constants";

const legalLinks = [
  { href: "/marketplace-disclosure", label: "Marketplace Disclosure" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-topline">
        <p>Operational Contact</p>
        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
      </div>
      <div className="container footer-grid">
        <section className="footer-panel">
          <h2>Company</h2>
          <p>{COMPANY_NAME}</p>
          <p>{COMPANY_REGION}</p>
          <p>Ecommerce marketplace seller operations with approved supplier onboarding.</p>
        </section>
        <section className="footer-panel">
          <h2>Explore</h2>
          <ul>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/brands">Brand Supply</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </section>
        <section className="footer-panel">
          <h2>Compliance</h2>
          <ul>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <p className="copyright">
        {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </p>
    </footer>
  );
}

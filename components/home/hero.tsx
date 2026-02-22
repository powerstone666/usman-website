import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero">
      <Image
        src="/marketing/hero-bg.png"
        alt="Colorful brand texture"
        width={1600}
        height={900}
        className="hero-bg"
        priority
      />
      <div className="container hero-content">
        <p className="eyebrow animated-line">Ecommerce Seller Operations</p>
        <h1 className="animated-line">{SITE_NAME}</h1>
        <p className="animated-line">{SITE_TAGLINE}</p>
        <ul className="hero-points animated-line" aria-label="Core service highlights">
          <li>Supplier-approved product onboarding</li>
          <li>Inventory purchase and listing management</li>
          <li>Warehouse-to-customer dispatch coordination</li>
        </ul>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/shop">
            Explore Products
          </Link>
          <Link className="btn btn-secondary" href="/brands">
            Submit Your Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}

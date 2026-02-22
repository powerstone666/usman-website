import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn how Shaik Enterprises Consulting and Development LLC operates as an ecommerce reseller with supplier-approved listings and structured fulfillment.",
  path: "/about",
  image: "/marketing/banner-partner.png",
});

export default function AboutPage() {
  return (
    <section className="container section">
      <SectionHeading
        eyebrow="About Us"
        title={SITE_NAME}
        description="We are a US-based ecommerce reseller working with approved suppliers under a purchase-and-listing model."
      />
      <div className="content-grid">
        <article className="content-card">
          <h3>What We Do</h3>
          <p>
            We partner with suppliers, purchase inventory in agreed quantities, and publish compliant marketplace
            listings as an authorized reseller.
          </p>
        </article>
        <article className="content-card">
          <h3>How We Work</h3>
          <p>
            After an order is placed, fulfillment is coordinated from supplier warehouse stock to end customers
            through our operational process.
          </p>
        </article>
      </div>
      <div className="content-grid">
        <article className="content-card">
          <h3>Marketplace Coverage</h3>
          <p>
            We support multi-marketplace selling strategies where approved supplier products can be
            listed according to channel policy, category fit, and operational feasibility.
          </p>
        </article>
        <article className="content-card">
          <h3>Operating Principles</h3>
          <ul>
            <li>Supplier approval before any listing activity</li>
            <li>Inventory procurement aligned to agreed terms</li>
            <li>Traceable dispatch coordination and performance review</li>
          </ul>
        </article>
      </div>
      <Image
        src="/marketing/banner-spotlight.png"
        alt="Colorful marketing collage"
        width={1400}
        height={460}
        className="wide-banner"
      />
    </section>
  );
}

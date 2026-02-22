import { SectionHeading } from "@/components/ui/section-heading";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Brand Supply",
  description:
    "Work with Shaik Enterprises Consulting and Development LLC as an ecommerce reseller partner with inventory purchase and managed listings.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <section className="container section">
      <SectionHeading
        eyebrow="Supplier Onboarding"
        title="Supply Products for Our Ecommerce Reseller Catalog"
        description="We onboard suppliers that approve resale, inventory purchase terms, and fulfillment coordination."
      />

      <div className="content-grid">
        <article className="content-card">
          <h3>Supplier Fit</h3>
          <ul>
            <li>Consumer products with strong retail potential</li>
            <li>Suppliers that approve multi-marketplace resale listing</li>
            <li>Teams able to support warehouse dispatch workflows</li>
          </ul>
        </article>

        <article className="content-card">
          <h3>Operational Model</h3>
          <ul>
            <li>We purchase inventory under agreed commercial terms</li>
            <li>We create and manage marketplace product listings</li>
            <li>Orders are fulfilled from supplier warehouse stock</li>
          </ul>
        </article>
      </div>
      <div className="content-grid">
        <article className="content-card">
          <h3>Required Onboarding Inputs</h3>
          <ul>
            <li>SKU list with product identifiers and attributes</li>
            <li>Commercial terms including MOQ and replenishment rules</li>
            <li>Warehouse dispatch SLAs and exception handling flow</li>
          </ul>
        </article>
        <article className="content-card">
          <h3>Launch Timeline</h3>
          <ul>
            <li>Day 0: Supplier approval and scope lock</li>
            <li>Day 1: Inventory procurement and listing prep</li>
            <li>Day 2-3: Listing activation and order monitoring</li>
          </ul>
        </article>
      </div>

      <article className="content-card">
        <h3>Start a Conversation</h3>
        <p>
          Email us at <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> with your catalog details,
          product data, supply terms, and expected onboarding timeline.
        </p>
        <p>
          Operating entity: {COMPANY_NAME} (US-based ecommerce reseller operations).
        </p>
      </article>
    </section>
  );
}

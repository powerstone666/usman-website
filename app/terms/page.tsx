import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: "Terms and conditions governing use of this website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="container section narrow prose">
      <h1>Terms of Use</h1>
      <p>
        By using this website, you agree to these terms. Content is provided for informational and promotional purposes.
      </p>
      <p>
        Product details are sourced from third-party providers and may change without notice. Verify final details on the selling marketplace
        before purchase.
      </p>
      <p>
        We are not responsible for third-party websites, transactions, or post-click experiences once you leave this site.
      </p>
      <h2>Operational Boundaries</h2>
      <ul>
        <li>Supplier relationships and listing decisions are managed at our sole discretion.</li>
        <li>Marketplace platform rules override any informational content shown on this site.</li>
        <li>Shipping timelines and service terms are subject to supplier and marketplace conditions.</li>
      </ul>
      <h2>Content and Liability</h2>
      <p>
        We make commercially reasonable efforts to keep product information current, but do not guarantee
        completeness, uninterrupted availability, or error-free presentation at all times.
      </p>
      <p>
        Continued use of this website constitutes acceptance of any updates to these terms.
      </p>
    </section>
  );
}

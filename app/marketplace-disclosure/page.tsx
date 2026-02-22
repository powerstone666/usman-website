import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Marketplace Disclosure",
  description: "Read our ecommerce reseller operating and listing disclosure.",
  path: "/marketplace-disclosure",
});

export default function MarketplaceDisclosurePage() {
  return (
    <section className="container section narrow prose">
      <h1>Marketplace Disclosure</h1>
      <p>
        This website presents products that we list and manage as part of our ecommerce reseller operations.
      </p>
      <p>
        We may purchase inventory from approved suppliers and offer those products on marketplaces under agreed
        commercial terms.
      </p>
      <p>
        Fulfillment is coordinated from supplier warehouse stock to end customers according to operational agreements.
      </p>
      <h2>What This Means for Visitors</h2>
      <ul>
        <li>Product availability can change based on supplier stock updates.</li>
        <li>Final checkout, shipping, and returns are governed by the marketplace platform used.</li>
        <li>Listing content may be updated to maintain policy compliance and catalog accuracy.</li>
      </ul>
    </section>
  );
}

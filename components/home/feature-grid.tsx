const features = [
  {
    title: "Authorized Seller Workflow",
    body: "We list products on approved marketplaces only after direct supplier approval and commercial alignment.",
  },
  {
    title: "Inventory Purchase Model",
    body: "We purchase agreed quantities from suppliers and operate as a structured ecommerce seller.",
  },
  {
    title: "Warehouse-to-Customer Fulfillment",
    body: "Orders are fulfilled from supplier warehouse stock to end customers through coordinated shipping.",
  },
];

export function FeatureGrid() {
  return (
    <section className="container section">
      <header className="section-heading">
        <p className="eyebrow">Business Capabilities</p>
        <h2>Built for Operational Clarity and Supplier Trust</h2>
      </header>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="feature-card"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

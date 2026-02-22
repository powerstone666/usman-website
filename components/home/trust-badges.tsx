const badges = [
  "US Registered Business Entity",
  "Supplier-Approved Reseller Workflow",
  "Inventory Purchase Operations",
  "Structured Listing Governance",
  "Warehouse Dispatch Coordination",
];

export function TrustBadges() {
  return (
    <section className="container section">
      <div className="trust-band" aria-label="Trust signals">
        <ul className="trust-badges">
          {badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
        <ul className="trust-badges" aria-hidden="true">
          {badges.map((badge) => (
            <li key={`${badge}-copy`}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

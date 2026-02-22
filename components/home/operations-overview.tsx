const metrics = [
  { value: "72 hrs", label: "Typical listing go-live after supplier approval" },
  { value: "24 hrs", label: "Target order confirmation window" },
  { value: "5-7 days", label: "Typical supplier stock replenishment cycle" },
  { value: "Daily", label: "Catalog compliance and listing health checks" },
];

const timeline = [
  {
    phase: "Day 0",
    title: "Supplier Approval & SKU Selection",
    details:
      "Finalize approved SKUs, MAP/commercial terms, and warehouse dispatch agreement.",
    output: "Approved SKU sheet + commercial confirmation",
  },
  {
    phase: "Day 1",
    title: "Inventory Procurement",
    details:
      "Purchase first inventory batch based on agreed MOQ and launch quantity planning.",
    output: "PO confirmation + inbound stock schedule",
  },
  {
    phase: "Day 1-2",
    title: "Listing Production",
    details:
      "Create listing copy, attribute mapping, media setup, and category placement.",
    output: "Ready-to-publish marketplace listing package",
  },
  {
    phase: "Day 2-3",
    title: "Go-Live & Order Monitoring",
    details:
      "Activate listings, monitor order events, and validate dispatch readiness with supplier warehouse.",
    output: "Live SKU status + order handling dashboard",
  },
  {
    phase: "Ongoing",
    title: "Dispatch & Optimization",
    details:
      "Orders ship from supplier warehouse to customers; we manage listing health and replenishment cadence.",
    output: "Dispatch records + weekly optimization updates",
  },
];

export function OperationsOverview() {
  return (
    <section className="container section">
      <div className="info-panel">
        <header className="section-heading">
          <p className="eyebrow">Execution Timeline</p>
          <h2>End-to-End Ecommerce Reseller Workflow With Clear Milestones</h2>
          <p>
            Timeline below shows exactly how we onboard supplier products, launch listings, and
            coordinate warehouse-to-customer fulfillment.
          </p>
        </header>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <article key={metric.label} className="metric-card" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </article>
          ))}
        </div>

        <div className="ops-timeline">
          {timeline.map((step, index) => (
            <article key={step.title} className="ops-step-card" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="ops-step-phase">{step.phase}</p>
              <h3 className="ops-step-title">{step.title}</h3>
              <p className="ops-step-details">{step.details}</p>
              <p className="ops-step-output">
                <strong>Output:</strong> {step.output}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

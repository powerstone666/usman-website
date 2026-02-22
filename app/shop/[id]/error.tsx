"use client";

import { ErrorState } from "@/components/ui/error-state";

interface ProductErrorProps {
  error: Error;
}

export default function ProductError({ error }: ProductErrorProps) {
  return (
    <section className="container section">
      <ErrorState title="Unable to load product" description={error.message} />
    </section>
  );
}

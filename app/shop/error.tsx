"use client";

import { ErrorState } from "@/components/ui/error-state";

interface ShopErrorProps {
  error: Error;
}

export default function ShopError({ error }: ShopErrorProps) {
  return (
    <section className="container section">
      <ErrorState title="Unable to load shop" description={error.message} />
    </section>
  );
}

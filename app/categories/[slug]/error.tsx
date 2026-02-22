"use client";

import { ErrorState } from "@/components/ui/error-state";

interface CategoryErrorProps {
  error: Error;
}

export default function CategoryError({ error }: CategoryErrorProps) {
  return (
    <section className="container section">
      <ErrorState title="Unable to load category" description={error.message} />
    </section>
  );
}

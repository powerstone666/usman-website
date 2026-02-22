interface ErrorStateProps {
  title?: string;
  description?: string;
}

export function ErrorState({
  title = "Something went wrong",
  description = "Please refresh the page and try again.",
}: ErrorStateProps) {
  return (
    <section className="state-card" role="alert">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

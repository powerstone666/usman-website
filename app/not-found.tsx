import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section narrow">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or may have moved.</p>
      <Link href="/shop" className="btn btn-primary">
        Browse Products
      </Link>
    </section>
  );
}

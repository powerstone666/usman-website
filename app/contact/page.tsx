import { COMPANY_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact us for supplier onboarding and ecommerce reseller listing operations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="container section narrow">
      <h1>Contact Us</h1>
      <p>
        For supplier onboarding and reseller operations, send your details and we will share next steps.
      </p>
      <form
        className="contact-form"
        action={`mailto:${COMPANY_EMAIL}`}
        method="post"
        encType="text/plain"
      >
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Business Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={6} required />
        </label>
        <button type="submit" className="btn btn-primary">
          Send Inquiry
        </button>
      </form>
      <p>
        Prefer direct email: <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
      </p>
    </section>
  );
}

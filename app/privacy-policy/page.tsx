import { COMPANY_EMAIL } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="container section narrow prose">
      <h1>Privacy Policy</h1>
      <p>
        We collect limited information such as basic analytics and details you voluntarily provide through contact forms.
      </p>
      <p>
        We use this information to respond to inquiries, improve website performance, and maintain business communications.
      </p>
      <p>
        We do not sell personal information. Third-party marketplaces may collect data once you leave this site.
      </p>
      <h2>Information We May Process</h2>
      <ul>
        <li>Name and email details you submit in forms.</li>
        <li>Basic traffic and page interaction analytics.</li>
        <li>Operational communication records for supplier onboarding.</li>
      </ul>
      <h2>Retention and Security</h2>
      <p>
        We retain inquiry information only as long as needed for business communication, supplier evaluation,
        or compliance obligations, and apply reasonable access controls to stored records.
      </p>
      <p>
        For privacy questions, contact <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>.
      </p>
    </section>
  );
}

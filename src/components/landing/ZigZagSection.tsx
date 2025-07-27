import ZigZagSectionCard from "./ZigZagCard";

export default function ZigZagSection() {
  return (
    <section>
      <ZigZagSectionCard
        title="Automate Compliance. Eliminate Chaos."
        description="Say goodbye to endless spreadsheets and manual follow-ups. Let the platform do the heavy lifting by automating document collection, reminders, and approvals — giving your team time to focus on what matters."
        imageUrl="/images/Digital-Workflow-Management.jpg"
        bullets={[
          "Automated document requests with reminders",
          "Always up-to-date and accessible files",
          "Save hours on manual tracking",
          "Review and approve suppliers on time",
        ]}
      />
      <ZigZagSectionCard
        title="Collaboration Built-In for Suppliers"
        description="Give suppliers a frictionless experience with a secure self-serve portal. From uploading compliance documents to tracking their status, it’s all centralized, clear, and up-to-date—no back-and-forth emails."
        imageUrl="/images/supplier-communication.jpg"
        reverse
        bullets={[
          "Supplier portal for easy uploads",
          "Real-time document status updates",
          "Standardized templates for consistency",
          "Clear communication without inbox clutter",
        ]}
      />
      <ZigZagSectionCard
        title="Turn Supplier Data Into Decisions"
        description="Gain complete visibility into supplier performance with trends, metrics, and compliance scores. Use insights to build a stronger, more reliable supply chain."
        imageUrl="/images/Supplier-Dashboard.jpg"
        bullets={[
          "Monitor compliance and risk over time",
          "Identify recurring issues and trends",
          "Benchmark supplier performance",
          "Make data-driven approval decisions",
        ]}
      />
    </section>
  );
}

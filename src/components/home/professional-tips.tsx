import { Sparkles } from "lucide-react";

const tips = [
  {
    title: "Subject and Context",
    description: "Be specific about what you want and where it happens",
  },
  {
    title: "Action and Movement",
    description: "Describe in detail what the subject is doing",
  },
  {
    title: "Style and Mood",
    description: "Include style and mood keywords",
  },
];

export function ProfessionalTips() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-background-secondary/60 p-8 backdrop-blur-sm md:p-12">
          {/* Heading */}
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Professional tips for better results
            </h2>
          </div>

          {/* Tips Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {tips.map((tip) => (
              <div key={tip.title} className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  {tip.title}
                </h3>
                <p className="text-foreground-secondary">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

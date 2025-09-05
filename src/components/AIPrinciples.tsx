import { Container } from "./Container";
import { FadeIn, FadeInStagger } from "./FadeIn";

export default function AIPrinciples() {
  const principles = [
    {
      title: "Safety First",
      description: "Every AI system we develop undergoes rigorous safety testing and evaluation to ensure reliable and predictable behavior.",
      icon: "🛡️"
    },
    {
      title: "Ethics by Design", 
      description: "We embed ethical considerations into every stage of development, from initial research to final deployment.",
      icon: "⚖️"
    },
    {
      title: "Privacy Protection",
      description: "User privacy is fundamental to our approach. We build AI that respects and protects personal data.",
      icon: "🔐"
    },
    {
      title: "Transparency",
      description: "We believe in open research and transparent communication about our AI systems' capabilities and limitations.",
      icon: "🔍"
    },
    {
      title: "Fairness & Inclusion",
      description: "Our AI systems are designed to be fair and inclusive, working to eliminate bias and promote equity.",
      icon: "🤝"
    },
    {
      title: "Human Alignment",
      description: "We develop AI that understands and supports human values, working as a beneficial partner to humanity.",
      icon: "🎯"
    }
  ];

  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Our Core Principles
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            The fundamental values that guide everything we build
          </p>
        </FadeIn>
        
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <FadeIn key={principle.title} className="bg-neutral-900 rounded-lg p-8">
              <div className="text-4xl mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-neutral-300">
                {principle.description}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}

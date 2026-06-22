import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/HeroSection";

const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((m) => m.AboutSection),
);
const BujinkanSection = dynamic(() =>
  import("@/components/sections/BujinkanSection").then((m) => m.BujinkanSection),
);
const ComparisonSection = dynamic(() =>
  import("@/components/sections/ComparisonSection").then((m) => m.ComparisonSection),
);
const FeaturesSection = dynamic(() =>
  import("@/components/sections/FeaturesSection").then((m) => m.FeaturesSection),
);
const InstructorSection = dynamic(() =>
  import("@/components/sections/InstructorSection").then((m) => m.InstructorSection),
);
const PhilosophySection = dynamic(() =>
  import("@/components/sections/PhilosophySection").then((m) => m.PhilosophySection),
);
const TimelineSection = dynamic(() =>
  import("@/components/sections/TimelineSection").then((m) => m.TimelineSection),
);
const InterestFormSection = dynamic(() =>
  import("@/components/sections/InterestFormSection").then((m) => m.InterestFormSection),
);
const FaqSection = dynamic(() =>
  import("@/components/sections/FaqSection").then((m) => m.FaqSection),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => m.ContactSection),
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BujinkanSection />
      <ComparisonSection />
      <FeaturesSection />
      <InstructorSection />
      <PhilosophySection />
      <TimelineSection />
      <InterestFormSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

import { MaxWidthWrapper } from "./components/ui/maxWidthWrapper/MaxWidthWrapper";
import { FeatureSection } from "./pages/home/featureSection/FeatureSection";
import { HeroSection } from "./pages/home/heroSection/HeroSection";
import { PropositionsSection } from "./pages/home/propositionSection/PropositionSection";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <HeroSection />
      </MaxWidthWrapper>
      <PropositionsSection />
      <FeatureSection />
    </>
  );
}

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Explore from "@/components/Explore";
import TestimonialSlider from "@/components/TestimonialSlider";
import Action from "@/components/Action";

export default function Home() {
  return (
    <div>
      <Hero />
      <Explore />
      <Experience />
      <TestimonialSlider />
      <Action />
    </div>
  );
}

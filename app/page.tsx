import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import StorySection from "@/components/sections/StorySection";
import GoHomeMeaningSection from "@/components/sections/GoHomeMeaningSection";
import ManagementSection from "@/components/sections/ManagementSection";
import DXSection from "@/components/sections/DXSection";
import TrackRecordSection from "@/components/sections/TrackRecordSection";
import PlacesSection from "@/components/sections/PlacesSection";
import RecruitSection from "@/components/sections/RecruitSection";
import ContactSection from "@/components/sections/ContactSection";
import RepresentativeSection from "@/components/sections/RepresentativeSection";

export const metadata: Metadata = {
  title: "GO GROUP | 経営と福祉の本質を問う",
  description:
    "放課後等デイサービス・児童発達支援・経営コンサルティング。GO GROUPは静岡県で4施設を運営しながら、福祉経営の本質を追求しています。",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <StorySection />
      <GoHomeMeaningSection />
      <ManagementSection />
      <DXSection />
      <TrackRecordSection />
      <PlacesSection />
      <RepresentativeSection />
      <RecruitSection />
      <ContactSection />
    </>
  );
}

import { Seo } from "@/components/seo/Seo";
import { homePageJsonLd } from "@/components/seo/jsonLd";
import RetroNav from "@/components/RetroNav";
import HeroSection from "@/components/HeroSection";
import AboutDrinkatSection from "@/components/AboutDrinkatSection";
import MenuSection from "@/components/MenuSection";
import SocialsSection from "@/components/SocialsSection";
import VisitSection from "@/components/VisitSection";
import ContactFab from "@/components/ContactFab";
import RetroFooter from "@/components/RetroFooter";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const raw = location.hash.replace(/^#/, "").trim();

    // No fragment: stay at the top so the hero is visible (avoids leftover scroll from layout/fonts).
    if (!raw) {
      const t = window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 0);
      return () => clearTimeout(t);
    }

    const decoded = decodeURIComponent(raw);
    /** Old "About" section became Socials — keep bookmarks working */
    const id = decoded === "about" ? "socials" : decoded;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    };

    scrollToTarget();
    const t0 = window.setTimeout(scrollToTarget, 0);
    if (decoded === "about") {
      window.history.replaceState(null, "", `${location.pathname}#socials`);
    }
    return () => clearTimeout(t0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Seo
        title="Drinkat — درينك ناو | Drink Now Since 2019"
        description="Jordanian coffee shop with three branches: Airport Road Amman, Hashemite University Zarqa, and Middle East University Amman. درينك ناو!"
        path="/"
        titleTemplate={false}
        jsonLd={homePageJsonLd()}
      />
      <RetroNav />
      <main className="relative flex flex-col">
        <HeroSection />
        <AboutDrinkatSection />
        <MenuSection />
        <SocialsSection />
        <VisitSection />
      </main>
      <ContactFab />
      <RetroFooter />
    </div>
  );
};

export default Index;

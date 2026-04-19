import { Seo } from "@/components/seo/Seo";
import { homePageJsonLd } from "@/components/seo/jsonLd";
import RetroNav from "@/components/RetroNav";
import HeroSection from "@/components/HeroSection";
import AboutDrinkatSection from "@/components/AboutDrinkatSection";
import ContactFab from "@/components/ContactFab";
import RetroFooter from "@/components/RetroFooter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const raw = location.hash.replace(/^#/, "").trim();

    if (!raw) {
      const t = window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 0);
      return () => clearTimeout(t);
    }

    const decoded = decodeURIComponent(raw);

    if (decoded === "menu") {
      navigate("/menu", { replace: true });
      return;
    }
    if (decoded === "socials") {
      navigate("/socials", { replace: true });
      return;
    }
    if (decoded === "visit-us") {
      navigate("/visit", { replace: true });
      return;
    }

    const scrollId = decoded === "about" ? "about-drinkat" : decoded;

    const scrollToTarget = () => {
      const el = document.getElementById(scrollId);
      if (!el) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    };

    scrollToTarget();
    const t0 = window.setTimeout(scrollToTarget, 0);
    return () => clearTimeout(t0);
  }, [location.pathname, location.hash, navigate]);

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
      </main>
      <ContactFab />
      <RetroFooter />
    </div>
  );
};

export default Index;

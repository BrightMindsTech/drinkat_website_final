import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import RetroNav from "@/components/RetroNav";
import RetroFooter from "@/components/RetroFooter";
import ContactFab from "@/components/ContactFab";
import VisitSection from "@/components/VisitSection";

const VisitPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Seo
        title="Visit Us — Drinkat"
        description="Drinkat branches on Airport Road Amman, Hashemite University Zarqa, and Middle East University Amman."
        path="/visit"
      />
      <RetroNav />
      <main className="relative pt-24 md:pt-28">
        <div className="container mx-auto px-6 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-rounded font-semibold text-primary text-sm uppercase tracking-wide hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
            Back to home
          </Link>
        </div>
        <VisitSection />
      </main>
      <ContactFab />
      <RetroFooter />
    </div>
  );
};

export default VisitPage;

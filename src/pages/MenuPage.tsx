import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { menuPageJsonLd } from "@/components/seo/jsonLd";
import RetroNav from "@/components/RetroNav";
import RetroFooter from "@/components/RetroFooter";
import ContactFab from "@/components/ContactFab";
import { CategoryGrid } from "@/components/menu/CategoryGrid";
import { TalabatMoreOnBanner } from "@/components/menu/TalabatMenuPromo";
import { allCategories } from "@/components/menu/menuData";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Seo
        title="Menu"
        description="Browse Drinkat drinks and food by category — juices, mocktails, coffee, milkshakes, burgers, and more. Order on Talabat or visit us in Amman and Zarqa."
        path="/menu"
        jsonLd={menuPageJsonLd()}
      />
      <RetroNav />
      <main className="relative pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="font-script text-4xl md:text-5xl text-primary mb-2">Menu Drinkat</h1>
            <p className="font-rounded font-semibold text-muted-foreground uppercase tracking-[0.2em] text-sm">
              Browse by category
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-rounded font-semibold text-primary text-sm uppercase tracking-wide hover:opacity-80 transition-opacity mb-4 md:mb-5"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
            Back to home
          </Link>
          <div className="rounded-3xl bg-white shadow-sm px-4 py-8 md:px-8 md:py-12">
            <TalabatMoreOnBanner />
            <CategoryGrid categories={allCategories} />
          </div>
        </div>
      </main>
      <ContactFab />
      <RetroFooter />
    </div>
  );
};

export default MenuPage;

import RetroBorder from "./RetroBorder";
import drinkatLogo from "@/assets/drinkat-logo.png";
import WarpedCheckerboard from "./WarpedCheckerboard";
import { Link } from "react-router-dom";

const footerLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/#home" },
  { label: "Menu", to: "/menu" },
  { label: "Socials", to: "/#socials" },
  { label: "Visit Us", to: "/#visit-us" },
];

const RetroFooter = () => {
  return (
    <footer className="bg-background py-12 relative">
      <WarpedCheckerboard />
      <div className="container mx-auto px-6 text-center relative z-10">
        <RetroBorder />

        <div className="my-8">
          <img src={drinkatLogo} alt="Drinkat logo" className="h-16 w-auto mx-auto" />
          <p className="text-primary/60 text-sm mt-2 tracking-wider uppercase">
            {/* <span className="font-arabic">درينك ناو</span> <span className="font-rounded">— Drink Now since 2019</span> */}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-rounded font-semibold text-primary/70 text-sm uppercase tracking-wide hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <RetroBorder />

        <p className="font-rounded text-primary/40 text-xs mt-6 tracking-wider uppercase">
          © 2026 Drinkat — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default RetroFooter;

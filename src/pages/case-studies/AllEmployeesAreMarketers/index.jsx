import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MagneticCursor from "../../../components/MagneticCursor";
import NoiseOverlay from "../../../components/NoiseOverlay";
import "./case-study.css";

// Import Sections
import CoverSection from "./CoverSection";
import MarketingTimeline from "./MarketingTimeline";
import Approaches from "./Approaches";
import CustomerJourney from "./CustomerJourney";
import ClinicalExperience from "./ClinicalExperience";
import RetentionAndModels from "./RetentionAndModels";
import ResultsAndConclusion from "./ResultsAndConclusion";

export default function CaseStudyAllEmployees() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-root case-study-root">
      <MagneticCursor />
      <NoiseOverlay opacity={0.15} />

      {/* ── SHARED NAV ── */}
      {/* Shared Nav and Footer are now globally provided by SharedLayout */}

      {/* Pages / Subcomponents mounting */}
      <CoverSection />
      <MarketingTimeline />
      <Approaches />
      <CustomerJourney />
      <ClinicalExperience />
      <RetentionAndModels />
      <ResultsAndConclusion />

      {/* Footer */}
      {/* Footer is now globally provided by SharedLayout */}
    </div>
  );
}

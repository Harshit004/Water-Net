import { Route } from "react-router-dom";

// Legacy routes (keeping for backward compatibility)
import BonesJoints from "@/pages/consultations/BonesJoints";
import StressAnxiety from "@/pages/consultations/StressAnxiety";
import SexualWellness from "@/pages/consultations/SexualWellness";
import LiverHealth from "@/pages/consultations/LiverHealth";
import Diabetes from "@/pages/consultations/Diabetes";
import Piles from "@/pages/consultations/Piles";
import ImmunityBoost from "@/pages/consultations/ImmunityBoost";
import KidneyStones from "@/pages/consultations/KidneyStones";
import ThyroidHealth from "@/pages/consultations/ThyroidHealth";

export const LegacyRoutes = () => {
  return (
    <>
      {/* Legacy Routes (keeping for backward compatibility) */}
      <Route path="/consultations/bones-joints" element={<BonesJoints />} />
      <Route path="/consultations/stress-anxiety" element={<StressAnxiety />} />
      <Route path="/consultations/sexual-wellness" element={<SexualWellness />} />
      <Route path="/consultations/liver-health" element={<LiverHealth />} />
      <Route path="/consultations/diabetes" element={<Diabetes />} />
      <Route path="/consultations/piles" element={<Piles />} />
      <Route path="/consultations/immunity-boost" element={<ImmunityBoost />} />
      <Route path="/consultations/kidney-stones" element={<KidneyStones />} />
      <Route path="/consultations/thyroid-health" element={<ThyroidHealth />} />
    </>
  );
};

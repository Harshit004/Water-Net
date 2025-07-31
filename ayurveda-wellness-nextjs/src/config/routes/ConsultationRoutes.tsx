import { Route } from "react-router-dom";

// Category pages
import ChildrensWellness from "@/pages/consultations/ChildrensWellness";
import DigestiveGutHealth from "@/pages/consultations/DigestiveGutHealth";
import HeartCirculatoryHealth from "@/pages/consultations/HeartCirculatoryHealth";
import HormonalBalanceEndocrineHealth from "@/pages/consultations/HormonalBalanceEndocrineHealth";
import ImmunityRespiratoryHealth from "@/pages/consultations/ImmunityRespiratoryHealth";
import JointBoneHealth from "@/pages/consultations/JointBoneHealth";
import LiverKidneyDetox from "@/pages/consultations/LiverKidneyDetox";
import MensHealth from "@/pages/consultations/MensHealth";
import MentalHealthSleep from "@/pages/consultations/MentalHealthSleep";
import SeniorElderlyCare from "@/pages/consultations/SeniorElderlyCare";
import SkinHairHealth from "@/pages/consultations/SkinHairHealth";
import WeightMetabolicHealth from "@/pages/consultations/WeightMetabolicHealth";
import WomensHealth from "@/pages/consultations/WomensHealth";

// Subcategory pages - Children's Wellness
import ADHDHyperactivity from "@/pages/consultations/childrens-wellness/ADHDHyperactivity";
import FrequentInfections from "@/pages/consultations/childrens-wellness/FrequentInfections";
import GrowthDevelopmentIssues from "@/pages/consultations/childrens-wellness/GrowthDevelopmentIssues";
import PoorAppetiteWeakDigestion from "@/pages/consultations/childrens-wellness/PoorAppetiteWeakDigestion";
import SleepIssuesRestlessness from "@/pages/consultations/childrens-wellness/SleepIssuesRestlessness";

// Subcategory pages - Digestive & Gut Health
import AcidRefluxGerd from "@/pages/consultations/digestive-gut-health/AcidRefluxGerd";
import BloatingGas from "@/pages/consultations/digestive-gut-health/BloatingGas";
import Constipation from "@/pages/consultations/digestive-gut-health/Constipation";
import IBS from "@/pages/consultations/digestive-gut-health/IBS";
import IndigestionPoorMetabolism from "@/pages/consultations/digestive-gut-health/IndigestionPoorMetabolism";
import LeakyGutSyndrome from "@/pages/consultations/digestive-gut-health/LeakyGutSyndrome";

// Subcategory pages - Heart & Circulatory Health
import CardiacWeakness from "@/pages/consultations/heart-circulatory-health/CardiacWeakness";
import HeartPalpitations from "@/pages/consultations/heart-circulatory-health/HeartPalpitations";
import HighBloodPressure from "@/pages/consultations/heart-circulatory-health/HighBloodPressure";
import HighCholesterol from "@/pages/consultations/heart-circulatory-health/HighCholesterol";
import Palpitations from "@/pages/consultations/heart-circulatory-health/Palpitations";
import PoorCirculation from "@/pages/consultations/heart-circulatory-health/PoorCirculation";
import VaricoseVeins from "@/pages/consultations/heart-circulatory-health/VaricoseVeins";

// Subcategory pages - Hormonal Balance & Endocrine Health
import AdrenalFatigue from "@/pages/consultations/hormonal-balance-endocrine-health/AdrenalFatigue";
import BloodSugarImbalancePrediabetes from "@/pages/consultations/hormonal-balance-endocrine-health/BloodSugarImbalancePrediabetes";
import HypothyroidismHyperthyroidism from "@/pages/consultations/hormonal-balance-endocrine-health/HypothyroidismHyperthyroidism";
import IrregularHormonalCycles from "@/pages/consultations/hormonal-balance-endocrine-health/IrregularHormonalCycles";
import PCOSPCODPage from "@/pages/consultations/hormonal-balance-endocrine-health/PCOSPCODPage";

// Subcategory pages - Immunity & Respiratory Health
import AllergiesHayFever from "@/pages/consultations/immunity-respiratory-health/AllergiesHayFever";
import AsthmaSupport from "@/pages/consultations/immunity-respiratory-health/AsthmaSupport";
import ChronicBronchitis from "@/pages/consultations/immunity-respiratory-health/ChronicBronchitis";
import FrequentColdCough from "@/pages/consultations/immunity-respiratory-health/FrequentColdCough";
import LowImmunityWeakResistance from "@/pages/consultations/immunity-respiratory-health/LowImmunityWeakResistance";
import Sinusitis from "@/pages/consultations/immunity-respiratory-health/Sinusitis";

// Subcategory pages - Joint & Bone Health
import Arthritis from "@/pages/consultations/joint-bone-health/Arthritis";
import BackPainSciatica from "@/pages/consultations/joint-bone-health/BackPainSciatica";
import Gout from "@/pages/consultations/joint-bone-health/Gout";
import JointPainStiffness from "@/pages/consultations/joint-bone-health/JointPainStiffness";
import MuscleWeakness from "@/pages/consultations/joint-bone-health/MuscleWeakness";
import Osteoarthritis from "@/pages/consultations/joint-bone-health/Osteoarthritis";
import OsteoporosisWeakBones from "@/pages/consultations/joint-bone-health/OsteoporosisWeakBones";
import RheumatoidArthritis from "@/pages/consultations/joint-bone-health/RheumatoidArthritis";
import SportsInjuriesRecovery from "@/pages/consultations/joint-bone-health/SportsInjuriesRecovery";
import WeakBonesOsteoporosis from "@/pages/consultations/joint-bone-health/WeakBonesOsteoporosis";

// Subcategory pages - Liver, Kidney & Detox
import FattyLiver from "@/pages/consultations/liver-kidney-detox/FattyLiver";
import KidneyStones from "@/pages/consultations/liver-kidney-detox/KidneyStones";
import LiverDetox from "@/pages/consultations/liver-kidney-detox/LiverDetox";
import RecurrentUTI from "@/pages/consultations/liver-kidney-detox/RecurrentUTI";
import UrinaryIncontinence from "@/pages/consultations/liver-kidney-detox/UrinaryIncontinence";

// Subcategory pages - Men's Health
import ErectileDysfunction from "@/pages/consultations/mens-health/ErectileDysfunction";
import HairLossBaldness from "@/pages/consultations/mens-health/HairLossBaldness";
import LowTestosterone from "@/pages/consultations/mens-health/LowTestosterone";
import MaleInfertility from "@/pages/consultations/mens-health/MaleInfertility";
import PrematureEjaculation from "@/pages/consultations/mens-health/PrematureEjaculation";
import ProstateHealth from "@/pages/consultations/mens-health/ProstateHealth";
import StressManagement from "@/pages/consultations/mens-health/StressManagement";

// Subcategory pages - Mental Health & Sleep
import AnxietyPanicAttacks from "@/pages/consultations/mental-health-sleep/AnxietyPanicAttacks";
import BrainFogPoorFocus from "@/pages/consultations/mental-health-sleep/BrainFogPoorFocus";
import ChronicStressBurnout from "@/pages/consultations/mental-health-sleep/ChronicStressBurnout";
import Depression from "@/pages/consultations/mental-health-sleep/Depression";
import MentalFatigue from "@/pages/consultations/mental-health-sleep/MentalFatigue";
import SleepDisordersInsomnia from "@/pages/consultations/mental-health-sleep/SleepDisordersInsomnia";

// Subcategory pages - Senior & Elderly Care
import ChronicPain from "@/pages/consultations/senior-elderly-care/ChronicPain";
import InsomniaLightSleep from "@/pages/consultations/senior-elderly-care/InsomniaLightSleep";
import JointDegeneration from "@/pages/consultations/senior-elderly-care/JointDegeneration";
import MemoryLossDementia from "@/pages/consultations/senior-elderly-care/MemoryLossDementia";
import WeakDigestion from "@/pages/consultations/senior-elderly-care/WeakDigestion";

// Subcategory pages - Skin & Hair Health
import AcnePimples from "@/pages/consultations/skin-hair-health/AcnePimples";
import DandruffScalpInfections from "@/pages/consultations/skin-hair-health/DandruffScalpInfections";
import DryOilySkin from "@/pages/consultations/skin-hair-health/DryOilySkin";
import HairFallThinning from "@/pages/consultations/skin-hair-health/HairFallThinning";
import PrematureGraying from "@/pages/consultations/skin-hair-health/PrematureGraying";
import PsoriasisEczema from "@/pages/consultations/skin-hair-health/PsoriasisEczema";

// Subcategory pages - Weight & Metabolic Health
import HighCholesterolMetabolic from "@/pages/consultations/weight-metabolic-health/HighCholesterolMetabolic";
import MetabolicSyndrome from "@/pages/consultations/weight-metabolic-health/MetabolicSyndrome";
import ObesityWeightGain from "@/pages/consultations/weight-metabolic-health/ObesityWeightGain";
import Type2DiabetesSupport from "@/pages/consultations/weight-metabolic-health/Type2DiabetesSupport";
import UnderweightPoorAppetite from "@/pages/consultations/weight-metabolic-health/UnderweightPoorAppetite";

// Subcategory pages - Women's Health
import Endometriosis from "@/pages/consultations/womens-health/Endometriosis";
import FertilitySupport from "@/pages/consultations/womens-health/FertilitySupport";
import HormonalAcne from "@/pages/consultations/womens-health/HormonalAcne";
import IrregularPainfulPeriods from "@/pages/consultations/womens-health/IrregularPainfulPeriods";
import MenopauseSupport from "@/pages/consultations/womens-health/MenopauseSupport";
import MenstrualCramps from "@/pages/consultations/womens-health/MenstrualCramps";
import PCOSPCODPageWomens from "@/pages/consultations/womens-health/PCOSPCODPage";
import VaginalDrynessPhImbalance from "@/pages/consultations/womens-health/VaginalDrynessPhImbalance";

export const ConsultationRoutes = () => {
  return (
    <>
      {/* Category Routes */}
      <Route path="/consultations/childrens-wellness" element={<ChildrensWellness />} />
      <Route path="/consultations/digestive-gut-health" element={<DigestiveGutHealth />} />
      <Route path="/consultations/heart-circulatory-health" element={<HeartCirculatoryHealth />} />
      <Route path="/consultations/hormonal-balance-endocrine-health" element={<HormonalBalanceEndocrineHealth />} />
      <Route path="/consultations/immunity-respiratory-health" element={<ImmunityRespiratoryHealth />} />
      <Route path="/consultations/joint-bone-health" element={<JointBoneHealth />} />
      <Route path="/consultations/liver-kidney-detox" element={<LiverKidneyDetox />} />
      <Route path="/consultations/mens-health" element={<MensHealth />} />
      <Route path="/consultations/mental-health-sleep" element={<MentalHealthSleep />} />
      <Route path="/consultations/senior-elderly-care" element={<SeniorElderlyCare />} />
      <Route path="/consultations/skin-hair-health" element={<SkinHairHealth />} />
      <Route path="/consultations/weight-metabolic-health" element={<WeightMetabolicHealth />} />
      <Route path="/consultations/womens-health" element={<WomensHealth />} />

      {/* Children's Wellness Subcategory Routes */}
      <Route path="/consultations/childrens-wellness/adhd-hyperactivity" element={<ADHDHyperactivity />} />
      <Route path="/consultations/childrens-wellness/frequent-infections" element={<FrequentInfections />} />
      <Route path="/consultations/childrens-wellness/growth-development-issues" element={<GrowthDevelopmentIssues />} />
      <Route path="/consultations/childrens-wellness/poor-appetite-weak-digestion" element={<PoorAppetiteWeakDigestion />} />
      <Route path="/consultations/childrens-wellness/sleep-issues-restlessness" element={<SleepIssuesRestlessness />} />

      {/* Digestive & Gut Health Subcategory Routes */}
      <Route path="/consultations/digestive-gut-health/acid-reflux-gerd" element={<AcidRefluxGerd />} />
      <Route path="/consultations/digestive-gut-health/bloating-gas" element={<BloatingGas />} />
      <Route path="/consultations/digestive-gut-health/constipation" element={<Constipation />} />
      <Route path="/consultations/digestive-gut-health/ibs" element={<IBS />} />
      <Route path="/consultations/digestive-gut-health/indigestion-poor-metabolism" element={<IndigestionPoorMetabolism />} />
      <Route path="/consultations/digestive-gut-health/leaky-gut-syndrome" element={<LeakyGutSyndrome />} />

      {/* Heart & Circulatory Health Subcategory Routes */}
      <Route path="/consultations/heart-circulatory-health/cardiac-weakness" element={<CardiacWeakness />} />
      <Route path="/consultations/heart-circulatory-health/heart-palpitations" element={<HeartPalpitations />} />
      <Route path="/consultations/heart-circulatory-health/high-blood-pressure" element={<HighBloodPressure />} />
      <Route path="/consultations/heart-circulatory-health/high-cholesterol" element={<HighCholesterol />} />
      <Route path="/consultations/heart-circulatory-health/palpitations" element={<Palpitations />} />
      <Route path="/consultations/heart-circulatory-health/poor-circulation" element={<PoorCirculation />} />
      <Route path="/consultations/heart-circulatory-health/varicose-veins" element={<VaricoseVeins />} />

      {/* Hormonal Balance & Endocrine Health Subcategory Routes */}
      <Route path="/consultations/hormonal-balance-endocrine-health/adrenal-fatigue" element={<AdrenalFatigue />} />
      <Route path="/consultations/hormonal-balance-endocrine-health/blood-sugar-imbalance-prediabetes" element={<BloodSugarImbalancePrediabetes />} />
      <Route path="/consultations/hormonal-balance-endocrine-health/hypothyroidism-hyperthyroidism" element={<HypothyroidismHyperthyroidism />} />
      <Route path="/consultations/hormonal-balance-endocrine-health/irregular-hormonal-cycles" element={<IrregularHormonalCycles />} />
      <Route path="/consultations/hormonal-balance-endocrine-health/pcos-pcod" element={<PCOSPCODPage />} />

      {/* Immunity & Respiratory Health Subcategory Routes */}
      <Route path="/consultations/immunity-respiratory-health/allergies-hay-fever" element={<AllergiesHayFever />} />
      <Route path="/consultations/immunity-respiratory-health/asthma-support" element={<AsthmaSupport />} />
      <Route path="/consultations/immunity-respiratory-health/chronic-bronchitis" element={<ChronicBronchitis />} />
      <Route path="/consultations/immunity-respiratory-health/frequent-cold-cough" element={<FrequentColdCough />} />
      <Route path="/consultations/immunity-respiratory-health/low-immunity-weak-resistance" element={<LowImmunityWeakResistance />} />
      <Route path="/consultations/immunity-respiratory-health/sinusitis" element={<Sinusitis />} />

      {/* Joint & Bone Health Subcategory Routes */}
      <Route path="/consultations/joint-bone-health/arthritis" element={<Arthritis />} />
      <Route path="/consultations/joint-bone-health/back-pain-sciatica" element={<BackPainSciatica />} />
      <Route path="/consultations/joint-bone-health/gout" element={<Gout />} />
      <Route path="/consultations/joint-bone-health/joint-pain-stiffness" element={<JointPainStiffness />} />
      <Route path="/consultations/joint-bone-health/muscle-weakness" element={<MuscleWeakness />} />
      <Route path="/consultations/joint-bone-health/osteoarthritis" element={<Osteoarthritis />} />
      <Route path="/consultations/joint-bone-health/osteoporosis-weak-bones" element={<OsteoporosisWeakBones />} />
      <Route path="/consultations/joint-bone-health/rheumatoid-arthritis" element={<RheumatoidArthritis />} />
      <Route path="/consultations/joint-bone-health/sports-injuries-recovery" element={<SportsInjuriesRecovery />} />
      <Route path="/consultations/joint-bone-health/weak-bones-osteoporosis" element={<WeakBonesOsteoporosis />} />

      {/* Liver, Kidney & Detox Subcategory Routes */}
      <Route path="/consultations/liver-kidney-detox/fatty-liver" element={<FattyLiver />} />
      <Route path="/consultations/liver-kidney-detox/kidney-stones" element={<KidneyStones />} />
      <Route path="/consultations/liver-kidney-detox/liver-detox" element={<LiverDetox />} />
      <Route path="/consultations/liver-kidney-detox/recurrent-uti" element={<RecurrentUTI />} />
      <Route path="/consultations/liver-kidney-detox/urinary-incontinence" element={<UrinaryIncontinence />} />

      {/* Men's Health Subcategory Routes */}
      <Route path="/consultations/mens-health/erectile-dysfunction" element={<ErectileDysfunction />} />
      <Route path="/consultations/mens-health/hair-loss-baldness" element={<HairLossBaldness />} />
      <Route path="/consultations/mens-health/low-testosterone" element={<LowTestosterone />} />
      <Route path="/consultations/mens-health/male-infertility" element={<MaleInfertility />} />
      <Route path="/consultations/mens-health/premature-ejaculation" element={<PrematureEjaculation />} />
      <Route path="/consultations/mens-health/prostate-health" element={<ProstateHealth />} />
      <Route path="/consultations/mens-health/stress-management" element={<StressManagement />} />

      {/* Mental Health & Sleep Subcategory Routes */}
      <Route path="/consultations/mental-health-sleep/anxiety-panic-attacks" element={<AnxietyPanicAttacks />} />
      <Route path="/consultations/mental-health-sleep/brain-fog-poor-focus" element={<BrainFogPoorFocus />} />
      <Route path="/consultations/mental-health-sleep/chronic-stress-burnout" element={<ChronicStressBurnout />} />
      <Route path="/consultations/mental-health-sleep/depression" element={<Depression />} />
      <Route path="/consultations/mental-health-sleep/mental-fatigue" element={<MentalFatigue />} />
      <Route path="/consultations/mental-health-sleep/sleep-disorders-insomnia" element={<SleepDisordersInsomnia />} />

      {/* Senior & Elderly Care Subcategory Routes */}
      <Route path="/consultations/senior-elderly-care/chronic-pain" element={<ChronicPain />} />
      <Route path="/consultations/senior-elderly-care/insomnia-light-sleep" element={<InsomniaLightSleep />} />
      <Route path="/consultations/senior-elderly-care/joint-degeneration" element={<JointDegeneration />} />
      <Route path="/consultations/senior-elderly-care/memory-loss-dementia" element={<MemoryLossDementia />} />
      <Route path="/consultations/senior-elderly-care/weak-digestion" element={<WeakDigestion />} />

      {/* Skin & Hair Health Subcategory Routes */}
      <Route path="/consultations/skin-hair-health/acne-pimples" element={<AcnePimples />} />
      <Route path="/consultations/skin-hair-health/dandruff-scalp-infections" element={<DandruffScalpInfections />} />
      <Route path="/consultations/skin-hair-health/dry-oily-skin" element={<DryOilySkin />} />
      <Route path="/consultations/skin-hair-health/hair-fall-thinning" element={<HairFallThinning />} />
      <Route path="/consultations/skin-hair-health/premature-graying" element={<PrematureGraying />} />
      <Route path="/consultations/skin-hair-health/psoriasis-eczema" element={<PsoriasisEczema />} />

      {/* Weight & Metabolic Health Subcategory Routes */}
      <Route path="/consultations/weight-metabolic-health/high-cholesterol-metabolic" element={<HighCholesterolMetabolic />} />
      <Route path="/consultations/weight-metabolic-health/metabolic-syndrome" element={<MetabolicSyndrome />} />
      <Route path="/consultations/weight-metabolic-health/obesity-weight-gain" element={<ObesityWeightGain />} />
      <Route path="/consultations/weight-metabolic-health/type2-diabetes-support" element={<Type2DiabetesSupport />} />
      <Route path="/consultations/weight-metabolic-health/underweight-poor-appetite" element={<UnderweightPoorAppetite />} />

      {/* Women's Health Subcategory Routes */}
      <Route path="/consultations/womens-health/endometriosis" element={<Endometriosis />} />
      <Route path="/consultations/womens-health/fertility-support" element={<FertilitySupport />} />
      <Route path="/consultations/womens-health/hormonal-acne" element={<HormonalAcne />} />
      <Route path="/consultations/womens-health/irregular-painful-periods" element={<IrregularPainfulPeriods />} />
      <Route path="/consultations/womens-health/menopause-support" element={<MenopauseSupport />} />
      <Route path="/consultations/womens-health/menstrual-cramps" element={<MenstrualCramps />} />
      <Route path="/consultations/womens-health/pcos-pcod" element={<PCOSPCODPageWomens />} />
      <Route path="/consultations/womens-health/vaginal-dryness-ph-imbalance" element={<VaginalDrynessPhImbalance />} />
    </>
  );
};

// routes/AppRoutes.js
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { RoutePaths } from "./routePaths";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const Presentation = lazy(() => import("../pages/Presentation"));
const About = lazy(() => import("../pages/About"));
const Galerie = lazy(() => import("../pages/Galerie"));

const AutonomisationFille = lazy(() =>
  import("../pages/NosActivites/AutonomisationFille")
);
const LutteGrossesseVihIst = lazy(() =>
  import("../pages/NosActivites/LutteGrossesseVihIst")
);
const RemiseKitsScolaires = lazy(() =>
  import("../pages/NosActivites/RemiseKitsScolaires")
);
const BourseEtudesEnfants = lazy(() =>
  import("../pages/NosActivites/BourseEtudesEnfants")
);
const AccesEducation = lazy(() =>
  import("../pages/NosActivites/AccesEducation")
);
const CauserieDebat = lazy(() => import("../pages/NosActivites/CauserieDebat"));
const AccesEauAssainissement = lazy(() =>
  import("../pages/NosActivites/AccesEauAssainissement")
);
const MinimumVital = lazy(() => import("../pages/NosActivites/MinimumVital"));
const SensibilisationAssistancePersonnesAgees = lazy(() =>
  import("../pages/NosActivites/SensibilisationAssistancePersonnesAgees")
);
const AppuiPlusPauvres = lazy(() =>
  import("../pages/NosProgrammes/AppuiPlusPauvres")
);
const AppuiOrphelinsHandicap = lazy(() =>
  import("../pages/NosProgrammes/AppuiOrphelinsHandicap")
);
const AideAccompagnementDomicile = lazy(() =>
  import("../pages/NosProgrammes/AideAccompagnementDomicile")
);

const Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route exact path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.PRESENTATION} element={<Presentation />} />
      <Route path={RoutePaths.ABOUT} element={<About />} />
      <Route path={RoutePaths.GALERIE} element={<Galerie />} />

      {/* Nos Activités */}
      <Route
        path={RoutePaths.AUTONOMISATION_FILLE}
        element={<AutonomisationFille />}
      />
      <Route
        path={RoutePaths.LUTTE_GROSSESSE_VIH_IST}
        element={<LutteGrossesseVihIst />}
      />
      <Route
        path={RoutePaths.REMISE_KITS_SCOLAIRES}
        element={<RemiseKitsScolaires />}
      />
      <Route
        path={RoutePaths.BOURSE_ETUDES_ENFANTS}
        element={<BourseEtudesEnfants />}
      />
      <Route path={RoutePaths.ACCES_EDUCATION} element={<AccesEducation />} />
      <Route path={RoutePaths.CAUSERIE_DEBAT} element={<CauserieDebat />} />
      <Route
        path={RoutePaths.ACCES_EAU_ASSAINISSEMENT}
        element={<AccesEauAssainissement />}
      />
      <Route path={RoutePaths.MINIMUM_VITAL} element={<MinimumVital />} />
      <Route
        path={RoutePaths.SENSIBILISATION_ASSISTANCE_PERSONNES_AGEES}
        element={<SensibilisationAssistancePersonnesAgees />}
      />

      {/* Nos Programmes */}
      <Route
        path={RoutePaths.APPUI_PLUS_PAUVRES}
        element={<AppuiPlusPauvres />}
      />
      <Route
        path={RoutePaths.APPUI_ORPHELINS_HANDICAP}
        element={<AppuiOrphelinsHandicap />}
      />
      <Route
        path={RoutePaths.AIDE_ACCOMPAGNEMENT_DOMICILE}
        element={<AideAccompagnementDomicile />}
      />

      {/* Contact */}
      <Route path={RoutePaths.CONTACT} element={<Contact />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/Loader";
import { delayImport } from "./utils/delayImport";
import Layout from "./components/Layout";


// Lazy loading with delay
const Home = lazy(() => delayImport(() => import("./pages/Home"), 1500));
const Dashboard = lazy(() => delayImport(() => import("./pages/Dashboard"), 3000));
const Profile = lazy(() => delayImport(() => import("./pages/Profile"), 2500));
const Settings = lazy(() => delayImport(() => import("./pages/Settings"), 2000));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>

<Layout>

  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/profile" element={<Profile />} />

    <Route path="/settings" element={<Settings />} />

  </Routes>

</Layout>

</Suspense>
    </Router>
  );
}

export default App;

import React from "react";
import Layout from "./components/shared/layout/Layout";
import LandingPage from "./components/shared/landing-page/LandingPage";
import IconList from "./components/shared/icon-list/IconList";
import Devices from "./components/shared/devices/Devices";
import QuickLink from "./components/shared/quick-links/QuickLink";
import GetDoing from "./components/shared/get-doing/GetDoing";
import Help from "./components/shared/help/Help";
import GetStarted from "./components/shared/get-started/GetStarted";

const App = () => {
  return (
    <Layout>
      <LandingPage />
      <IconList />
      <Devices />
      <GetDoing />
      <QuickLink />
      <Help />
      <GetStarted />
    </Layout>
  );
};

export default App;

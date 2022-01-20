import React, { useState } from "react";
import { tabLabels } from "../../utils/ContentWelcome";
import { Tab } from "../../imports/index";
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabLabels.CANCEL_AT_ANY_TIME);
  const onclickTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Tab activeTabName={activeTab} onClickTab={onclickTab} />
    </>
  );
};

export default TabComponent;

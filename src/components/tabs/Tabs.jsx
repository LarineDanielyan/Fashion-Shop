import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";
import PendingTable from "../dataTable/PendingTable";

const Tabs = ({ pendingProducts, allProducts, changeStatus, uploadImg,pendingOrders,sentOrders,paidOrders,allDoneOrders}) => {
  console.log(pendingProducts);
  const panes = [
    {
      menuItem: "All Products",
      render: () => (
        <Tab.Pane>
          <DataTable list={allProducts} uploadImg={uploadImg} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Pending",
      render: () => (
        <Tab.Pane>
          <PendingTable list={[...pendingOrders,...sentOrders,...paidOrders,...allDoneOrders ]} changeStatus={changeStatus} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};

export default Tabs;

import React from "react";
import BrowseHeader from "./BrowseHeader";
import { Outlet } from "react-router-dom";

function BrowseAppLayout() {
  return (
    <>
      <BrowseHeader />
      <Outlet />
    </>
  );
}

export default BrowseAppLayout;

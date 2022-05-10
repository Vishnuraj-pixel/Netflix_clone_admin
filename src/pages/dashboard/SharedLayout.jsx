import React from "react";
import { NavBar } from "../../components";
import Sidebar from "../../components/Sidebar";
import { getUserFromLocalStorage } from "../../services/utils/localStorage";

function SharedLayout() {
  const user = getUserFromLocalStorage();
  if (user) {
    return (
      <div>
        <NavBar />
        <Sidebar />
      </div>
    );
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default SharedLayout;

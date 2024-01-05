import React from "react";
import Home from '../../Components/HomePages/Home';
import { useState, useEffect } from "react";

function Index() {
  const names = ["usman", "abdulrahmon"];

  return (
    <div>
      <Home names={names} />
    </div>
  );
}

export default Index;

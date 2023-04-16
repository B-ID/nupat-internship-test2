import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-stone-300 ">
      Header
      <div className="text-center bg-dark">
      <DarkModeSwitch />
      </div>
    </div>
  );
}

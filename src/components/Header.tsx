import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-stone-300 dark:bg-stone-700">
      Header
      {/* <DarkModeSwitch /> */}
    </div>
  );
}

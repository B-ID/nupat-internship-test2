import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { MdSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

type Props = {};

export default function DarkModeSwitch({}: Props) {
  const { systemTheme, resolvedTheme, theme, setTheme } = useTheme();
  // const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = currentTheme === 'light' ? 'dark' : 'light'

  const toggleTheme = () => {
    setTheme(activeTheme)
    localStorage.setItem('theme', activeTheme)
  }

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2 mt-4 transition duration-300">
      <div className="flex items-center order-2 gap-3">
        { currentTheme === "dark" ? (
          <button className="flex items-center gap-3 p-2 rounded bg-dashboard-active/50" onClick={() => toggleTheme()}>
            <MdSunny
              className={`${
                activeTheme === 'light'
                  ? "text-yellow-400 rotate-90 transition duration-300"
                  : ""
              } `}
              size={24}
            />
            <p>Light Mode</p>
          </button>
        ) : (
          <button className="flex items-center gap-3 p-2 rounded bg-zinc-900" onClick={() => toggleTheme()}>
            <BsFillMoonFill
              className={`${activeTheme === 'dark' ? "text-dashboard-active" : ""}`}
              size={24}
            />
            <p>Dark Mode</p>
          </button>
        )}
      </div>

      {/* <Switch
        checked={enabled}
        // @ts-ignore
        onChange={() => setEnabled((prev) => !prev)}
        className={`${enabled ? "bg-zinc-800" : "bg-dashboard-active"}
          relative inline-flex h-[20px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-6 bg-white" : "translate-x-0 bg-white"
          }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch> */}
    </div>
  );
}

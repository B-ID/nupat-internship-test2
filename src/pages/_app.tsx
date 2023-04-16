import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "./RootLayout";
import ThemeContext from "@/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeContext>
  );
}

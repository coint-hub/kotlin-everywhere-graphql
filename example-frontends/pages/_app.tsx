import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutView from "../src/view/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutView>
      {" "}
      <Component {...pageProps} />{" "}
    </LayoutView>
  );
}

// noinspection JSUnusedGlobalSymbols
export default MyApp;

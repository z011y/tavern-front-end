import "../styles/global.css";
import App from "next/app";
import React from "react";
import { wrapper } from "../components/store";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);

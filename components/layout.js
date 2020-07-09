import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  const router = useRouter();
  const [dashboard, setDashboard] = useState(false);

  useEffect(() => {
    setDashboard(
      router.pathname === "/dashboard/home" ||
        router.pathname === "/dashboard/search"
    );
  });

  return (
    <div className="container">
      <Head>
        <title>Tavern Music</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {dashboard ? null : <Header />}
      <main>{children}</main>
      {dashboard ? null : <Footer />}
    </div>
  );
}

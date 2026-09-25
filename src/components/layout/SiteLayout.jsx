import React, { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      // Cancel any focus-driven scroll still queued by the previous page.
      const frame = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const titles = {
      "/associe-se": "Associe-se ao Sindetur-SP",
      "/contribuicao": "Contribuição | Sindetur-SP",
    };
    if (!titles[pathname]) return;
    const previousTitle = document.title;
    document.title = titles[pathname];
    return () => { document.title = previousTitle; };
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

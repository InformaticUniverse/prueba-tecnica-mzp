
import { AppProvider } from "@/context/AppContext";
import { AppProps } from "next/app";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  console.log(locale)
  const translations = require(`../locales/${locale?? "es"}.json`);

  const [selectedLanguage, setselectedLanguage] = useState(locale);

  useEffect(() => {
    router.beforePopState(({ url, as }) => {
      const [nextLocale] = url.split("/").filter(Boolean);
      if (nextLocale && ["en", "es"].includes(nextLocale)) {
        setselectedLanguage(nextLocale);
        router.push(url, as, { locale: nextLocale });
        return false;
      }
      return true;
    });
  }, []);

  const changeLanguage = (newLanguage: "en" | "es") => {
    const { pathname, query } = router;
    console.log("esta entrando")
    router.push({ pathname, query }, undefined, { locale: newLanguage });
    setselectedLanguage(newLanguage);
  };

  return (
    <AppState>
      <Component
        {...pageProps}
        translations={translations}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />
    </AppState>
  );
}

const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <AppProvider>{children}</AppProvider>;
};

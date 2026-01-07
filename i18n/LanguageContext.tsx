import { createContext, useContext, useState } from "react";
import en from "./en.json";
import sk from "./sk.json";

const texts = { en, sk };

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<"en" | "sk">("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: texts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

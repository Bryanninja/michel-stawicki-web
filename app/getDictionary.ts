const dictionaries = {
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Trava de segurança: se a URL tentar carregar algo bizarro (como favicon.ico)
  // que não seja 'pt' ou 'en', forçamos o 'pt' para o site nunca quebrar.
  if (locale !== "pt" && locale !== "en") {
    return dictionaries.pt();
  }

  return dictionaries[locale as keyof typeof dictionaries]();
};

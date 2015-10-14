module ILang {

  export type ILanguage = {
    table: {
      fields: {
        name: string,
        email: string,
        orderNumber: string,
        amount: string,
        taxRate: string,
      }
    }
  };

  export type ILanguages = {
    es: ILanguage,
    en: ILanguage,
    de: ILanguage
  };

}

export = ILang;
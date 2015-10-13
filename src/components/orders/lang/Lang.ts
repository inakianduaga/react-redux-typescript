import LANG_ES from './es/Lang';
import LANG_EN from './en/Lang';
import LANG_DE from './de/Lang';

module OrdersLanguage {

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

  export const Languages: ILanguages = {
    es: LANG_ES,
    en: LANG_EN,
    de: LANG_DE
  };

}

export = OrdersLanguage;
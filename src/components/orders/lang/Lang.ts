import { ILanguages } from './ILang';
import LANG_ES from './es/Lang';
import LANG_EN from './en/Lang';
import LANG_DE from './de/Lang';

export module OrdersLanguage {

  export const Languages: ILanguages = {
    es: LANG_ES,
    en: LANG_EN,
    de: LANG_DE
  };

}


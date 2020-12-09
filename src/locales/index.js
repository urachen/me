import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

import tw from "@locales/translations/zh-TW.json";

const singleLocale = true;

if (singleLocale) {
  //單語系
  localStorage.setItem("lang", "zh-TW");
} else {
  //多語系
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "zh-TW");
  }
}

let locale = localStorage.getItem("lang");

const messages = {
  "zh-TW": tw
};

const i18n = new VueI18n({
  locale,
  messages
});

export default i18n;

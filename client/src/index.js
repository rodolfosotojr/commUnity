import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import locale_ar from 'react-intl/locale-data/ar';
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";
import messages_ar from "./translations/ar.json";

addLocaleData([...locale_en, ...locale_es,...locale_ar]);

const messages = {
    'es': messages_es,
    'en': messages_en,
    'ar': messages_ar,
};

const language = navigator.language.split(/[-_]/)[0];  // language without region code
// const language = "es";

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>,
    document.getElementById("root"));

registerServiceWorker();

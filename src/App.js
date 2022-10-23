import "./App.css";
import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "3 yeni mesajınız var",
  },
  "en-US": {
    title: "Hello World",
    description: "you have 3 new messages",
  },
};

function App() {
  const defaultLocale = navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <br />
        <div>
          <FormattedMessage id="description" />
        </div>
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;

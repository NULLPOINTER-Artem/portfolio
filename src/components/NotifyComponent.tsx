"use client"

import { useEffect, useState } from "react"

type locale = 'en-CA' | 'uk' | 'ru';
const locales = ['en-CA', 'uk', 'ru'];
const date = new Date("2024-02-07"); // development start date

export default function NotifyComponent() {
  const [selectedLocale, setSelectedLocale] = useState<locale>('en-CA');
  const translate = {
    'en-CA': (formattedDate: string) => (
      <p>
        Hi! My name is Artem, I am a frontend developer and what you see on the screen
        now is just a dummy for my portfolio website, <a href="https://github.com/NULLPOINTER-Artem/portfolio" target="_blank">source code (git repository link)</a>,
        development start date {formattedDate}.
      </p>
    ),
    ru: (formattedDate: string) => (
      <p>
        Привет! Меня зовут Артем, я фронтенд-разработчик, и то, что вы видите сейчас на экране, всего
        лишь макет (заглушка) для моего сайта-портфолио, <a href="https://github.com/NULLPOINTER-Artem/portfolio" target="_blank">исходный код (ссылка на git-репозиторий)</a>
        , дата начала разработки {formattedDate}.
      </p>
    ),
    uk: (formattedDate: string) => (
      <p>
        Привіт! Мене звуть Артем, я фронтенд-розробник, і те, що ви зараз бачите на екрані - це лише
        макет (заглушка) мого сайту-портфоліо, <a href="https://github.com/NULLPOINTER-Artem/portfolio" target="_blank">вихідний код (посилання на git-репозиторій)</a>
        , дата початку розробки {formattedDate}.
      </p>
    ),
  }

  useEffect(() => {
    const currLang = navigator.language;

    if (currLang.startsWith('ru')) setSelectedLocale('ru');
    else if (currLang.startsWith('uk')) setSelectedLocale('uk');
    else setSelectedLocale('en-CA');
  }, []);

  const handleLangSwitch = (localeToSelect: locale) => {
    setSelectedLocale(localeToSelect);
  };

  const outputLang = (lang: string) => {
    if (lang.startsWith('ru')) return 'ru'
    else if (lang.startsWith('uk')) return 'ua'
    else return 'en'
  };

  return (
    <div className="home-page__notify">
      <div className="home-page__notify-switcher">
        {locales.map((localeItem) => (
          <button
            key={localeItem}
            className={`home-page__notify-btn ${localeItem === selectedLocale && 'active'}`}
            type="button"
            onClick={() => handleLangSwitch(localeItem as locale)}
          >
            {outputLang(localeItem)}
          </button>
        ))}
      </div>
      {translate[selectedLocale](new Intl.DateTimeFormat(selectedLocale).format(date))}
    </div>
  )
}

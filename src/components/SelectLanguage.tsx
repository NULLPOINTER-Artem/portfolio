'use client'

import CustomSelect from "./CustomSelect";

type SelectLanguageProps = {
  children?: React.ReactNode,
  className?: string,
};

export default function SelectLanguage({ className, children }: SelectLanguageProps) {
  const locales = ['en', 'ru', 'ua'];

  return (
    <CustomSelect classNameWrapper={className} listData={locales} />
  )
}

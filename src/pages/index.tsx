import { LanguageSelector } from '@/components/LanguageSelector'
import React from 'react'

type Props = {
  translations: Record<string, string>;
  selectedLanguage: "en" | "es";
  changeLanguage: (newLanguage : string) => void;
}

export const index = ({translations, selectedLanguage, changeLanguage} : Props) => {
  return (
    <div>
      <label>{translations.welcome}</label>
      <LanguageSelector 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
    </div>
  )
}


export default index;
import React from 'react'

type Props = {
  selectedLanguage: "es" | "en", 
  changeLanguage : (langauge: "es" | "en") => void
}

export const LanguageSelector = ({selectedLanguage, changeLanguage} : Props) => {
  return (
    <div>
      <label>{}</label>
      <select 
        value={selectedLanguage} 
        onChange={(e) => 
        changeLanguage(e.target.value as "en" | "es")}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  )
}

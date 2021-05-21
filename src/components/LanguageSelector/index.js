import React from 'react'
import { LanguageSelector as LanguageSelectorController } from 'ordering-components/_modules/components'
import { Select } from '../../styles/Select'

const LanguageSelectorUI = (props) => {
  const {
    languagesState,
    currentLanguage,
    handleChangeLanguage,
    notReload
  } = props
  const _languages = languagesState?.languages?.map(language => {
    return {
      value: language?.code, content: language?.name, showOnSelected: language.code?.toUpperCase()
    }
  })
  _languages && _languages.sort((a, b) =>
    (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)
  )
  return (
    <Select
      options={_languages}
      defaultValue={currentLanguage}
      onChange={(languageId) => handleChangeLanguage(languageId)}
      notReload={notReload}
    />
  )
}

export const LanguageSelector = (props) => {
  const DefaultChangeLanguage = () => {}
  return (
    <LanguageSelectorController
      {...props}
      UIComponent={LanguageSelectorUI}
      onChangeLanguage={props.onChangeLanguage || DefaultChangeLanguage}
    />
  )
}

export default LanguageSelector

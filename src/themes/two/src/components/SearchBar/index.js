import React, { useRef, useEffect } from 'react'

import { Input } from '../../styles/Inputs'
import { useTheme } from '../../../../../contexts/ThemeContext'
import { useLanguage } from 'ordering-components'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import {
  BusinessSearch,
  DeleteContent
} from './styles'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    isCustomLayout
  } = props
  const [theme] = useTheme()
  const [, t] = useLanguage()
  let timeout = null
  let previousSearch
  const el = useRef()
  const onChangeSearch = e => {
    if (e.keyCode === 13) return

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch(e.target.value)
        }, 750)
      }
    }
    previousSearch = e.target.value
  }

  const handleClear = () => {
    onSearch('')
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <BusinessSearch
        className={!isCustomLayout && 'search-bar'}
        isCustomLayout={isCustomLayout}
        hasValue={el.current?.value}
      >
        <DeleteContent>
          {el.current?.value
            ? <MdcClose onClick={handleClear} />
            : <img src={theme?.images?.general?.searchIcon} />}
        </DeleteContent>
        <Input
          ref={el}
          name='search'
          aria-label='search'
          placeholder={placeholder}
          autoComplete='off'
          maxLength='500'
        />
      </BusinessSearch>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </>
  )
}

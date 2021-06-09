import React, { useRef, useEffect } from 'react'
import { Input } from '../../../../../styles/Inputs'
import { useTheme } from '../../../../../contexts/ThemeContext'

import { useSearchValue } from '../../contexts/SearchValueContext'
import {
  BusinessSearch,
  DeleteContent
} from './styles'

export const SearchBar = (props) => {
  const {
    // onSearch,
    placeholder,
    lazyLoad
  } = props
  const [theme] = useTheme()
  const [searchValue, setSearchValue] = useSearchValue()
  let timeout = null
  let previousSearch
  const el = useRef()
  const onChangeSearch = e => {
    if (e.keyCode === 13) return

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        setSearchValue(e.target.value)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          setSearchValue(e.target.value)
        }, 750)
      }
    }
    previousSearch = e.target.value
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
    setSearchValue(null)
  }, [])

  useEffect(() => {
    if (!searchValue) {
      el.current.value = ''
    }
  }, [searchValue])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessSearch
        className='search-bar'
        hasValue={el.current?.value}
      >
        <Input
          ref={el}
          name='search'
          aria-label='search'
          placeholder={placeholder}
          autoComplete='off'
          maxLength='500'
        />
        <DeleteContent>
          <img src={theme?.images?.general?.searchIcon} />
        </DeleteContent>
      </BusinessSearch>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

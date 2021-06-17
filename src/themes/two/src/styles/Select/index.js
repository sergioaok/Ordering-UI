import React, { useEffect, useRef, useState } from 'react'
import { useOrder } from 'ordering-components'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'

import {
  Select as SelectInput,
  Selected,
  Options,
  Option,
  Chevron,
  Header
} from '../Selects'

export const Select = (props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    notReload
  } = props

  const isHome = window.location.pathname === '/' || window.location.pathname === '/home'
  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(option => option.value === defaultValue)
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()
  const [orderState] = useOrder()

  const handleSelectClick = (e) => {
    !open && setOpen(true)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', closeSelect)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mouseup', closeSelect)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find(option => option.value === defaultValue)
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options])

  const handleChangeOption = (option) => {
    setSelectedOption(option)
    setValue(option.value)
    onChange && onChange(option.value)
    setOpen(false)
  }

  return (
    <SelectInput
      id='select-input'
      isHome={isHome}
      disabled={orderState.loading && !notReload}
      onMouseUp={handleSelectClick}
    >
      {!selectedOption && <Selected>{placeholder || ''}<Chevron><GoTriangleDown /></Chevron></Selected>}
      {selectedOption && (
        <Selected>
          <Header>
            {selectedOption.showOnSelected || selectedOption.content}
          </Header>
          <Chevron>
            <GoTriangleDown />
          </Chevron>
        </Selected>
      )}
      {open && options && (
        <Options id='list' position='right' ref={dropdownReference}>
          {
            options.map(option => (
              <Option
                id='item'
                key={option.value}
                selected={value === option.value}
                onClick={() => handleChangeOption(option)}
              >
                {option.content}
              </Option>
            ))
          }
        </Options>
      )}
    </SelectInput>
  )
}

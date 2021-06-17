import React, { useState, useEffect } from 'react'
import {
  ProductOptionSuboption as ProductSubOptionController,
  useUtils,
  useLanguage
} from 'ordering-components'
import BsCircleFill from '@meronex/icons/bs/BsCircleFill'
import BsCircleHalf from '@meronex/icons/bs/BsCircleHalf'
import BsDashCircle from '@meronex/icons/bs/BsDashCircle'
import BsPlusCircle from '@meronex/icons/bs/BsPlusCircle'

import {
  Container,
  SuboptionPrice,
  QuantityControl,
  PositionControl,
  IconControl,
  Text,
  SubOptionThumbnail
} from './styles'

import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'

import { CheckBoxContainer } from '../ProductIngredient/styles'
import BsCheck from '@meronex/icons/bs/BsCheck'

const ProductOptionSubOptionUI = (props) => {
  const {
    state,
    increment,
    decrement,
    balance,
    option,
    suboption,
    toggleSelect,
    changePosition
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [showMessage, setShowMessage] = useState(false)

  const handleIncrement = (e) => {
    e.stopPropagation()
    increment()
  }

  const handleDecrement = (e) => {
    e.stopPropagation()
    decrement()
  }

  const handlePosition = (e, position) => {
    e.stopPropagation()
    changePosition(position)
  }

  const handleSuboptionClick = () => {
    toggleSelect()
    if (balance === option?.max && option?.suboptions?.length > balance && !(option?.min === 1 && option?.max === 1)) {
      setShowMessage(true)
    }
  }

  useEffect(() => {
    if (!(balance === option?.max && option?.suboptions?.length > balance && !(option?.min === 1 && option?.max === 1))) {
      setShowMessage(false)
    }
  }, [balance])

  const disableIncrement = option?.limit_suboptions_by_max ? balance === option?.max : state.quantity === suboption?.max || (!state.selected && balance === option?.max)
  const price = option?.with_half_option && suboption?.half_price && state.position !== 'whole' ? suboption?.half_price : suboption?.price
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
      <Container onClick={() => handleSuboptionClick()}>
        <IconControl>
          {((option?.min === 0 && option?.max === 1) || option?.max > 1) ? (
            state?.selected ? (
              <CheckBoxContainer active>
                <BsCheck />
              </CheckBoxContainer>
            ) : (
              <CheckBoxContainer />
            )
          ) : (
            state?.selected ? (
              <RiRadioButtonFill />
            ) : (
              <MdRadioButtonUnchecked />
            )
          )}
        </IconControl>
        {suboption.image && (
          <SubOptionThumbnail src={suboption.image} />
        )}
        <Text>
          <div>{suboption?.name}</div>
          {showMessage && <span>{`${t('OPTIONS_MAX_LIMIT', 'Maximum options to choose')}: ${option?.max}`}</span>}
        </Text>
        {option?.allow_suboption_quantity && (
          <QuantityControl>
            <BsDashCircle
              disabled={state.quantity === 0}
              onClick={handleDecrement}
            />
            {state.quantity}
            <BsPlusCircle
              disabled={disableIncrement}
              onClick={handleIncrement}
            />
          </QuantityControl>
        )}
        {
          option?.with_half_option && (
            <PositionControl>
              <BsCircleHalf
                className={['reverse', state.selected && state.position === 'left' ? 'selected' : null].filter(classname => classname).join(' ')}
                onClick={(e) => handlePosition(e, 'left')}
              />
              <BsCircleFill
                className={[state.selected && state.position === 'whole' ? 'selected' : null].filter(classname => classname).join(' ')}
                onClick={(e) => handlePosition(e, 'whole')}
              />
              <BsCircleHalf
                className={[state.selected && state.position === 'right' ? 'selected' : null].filter(classname => classname).join(' ')}
                onClick={(e) => handlePosition(e, 'right')}
              />
            </PositionControl>
          )
        }
        <SuboptionPrice>
          + {parsePrice(price)}
        </SuboptionPrice>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ProductOptionSubOption = (props) => {
  const productOptionSubOptionProps = {
    ...props,
    UIComponent: ProductOptionSubOptionUI
  }

  return (
    <ProductSubOptionController {...productOptionSubOptionProps} />
  )
}

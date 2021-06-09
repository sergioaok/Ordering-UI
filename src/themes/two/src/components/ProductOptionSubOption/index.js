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
  WrapSubOption,
  SuboptionPrice,
  QuantityControl,
  PositionControl,
  IconControl,
  Text,
  SuboptionQuanitySelectContainer,
  SubOptionThumbnail,
} from './styles'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdRadioButtonChecked from '@meronex/icons/md/MdRadioButtonChecked'
import MdRadioButtonUnchecked from '@meronex/icons/md/MdRadioButtonUnchecked'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { Modal } from '../Modal'

const ProductOptionSubOptionUI = (props) => {
  const {
    state,
    increment,
    decrement,
    balance,
    option,
    suboption,
    toggleSelect,
    changePosition,
    productName
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [showMessage, setShowMessage] = useState(false)
  const [openModal, setOpenModal] = useState(false)

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
      <Container>
        <WrapSubOption onClick={() => handleSuboptionClick()}>
          <IconControl>
            {((option?.min === 0 && option?.max === 1) || option?.max > 1) ? (
              state?.selected ? (
                <MdCheckBox />
              ) : (
                <MdCheckBoxOutlineBlank disabled />
              )
            ) : (
              state?.selected ? (
                <MdRadioButtonChecked />
              ) : (
                <MdRadioButtonUnchecked disabled />
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
        </WrapSubOption>
        {option?.allow_suboption_quantity && (
          <span onClick={() => setOpenModal(true)}>
            <BsChevronRight />
          </span>
        )}
      </Container>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <SuboptionQuanitySelectContainer>
          <div>
            <p>{productName}</p>
            <p>{option?.name}</p>
          </div>
          <div>
            <span>{t('CHOOSE_YOUR_QUANTITY', 'Choose your quantity')}</span>
            {suboption?.max && (
              <span>{t('MAX', 'Max')} {suboption?.max}</span>
            )}
          </div>
          <div>
            <p>{suboption?.name}</p>
            <QuantityControl>
              <BsDashCircle
                disabled={state.quantity === 0}
                onClick={handleDecrement}
              />
              <span>
                {state.quantity}
              </span>
              <BsPlusCircle
                disabled={disableIncrement}
                onClick={handleIncrement}
              />
            </QuantityControl>
          </div>
        </SuboptionQuanitySelectContainer>
      </Modal>
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

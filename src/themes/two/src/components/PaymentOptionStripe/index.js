import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  PaymentOptionStripe as PaymentOptionStripeController,
  useSession,
  useLanguage
} from 'ordering-components'
import BsThreeDots from '@meronex/icons/bs/BsThreeDots'
import BsCheck from '@meronex/icons/bs/BsCheck'
import AiFillCreditCard from '@meronex/icons/ai/AiFillCreditCard'
import BisChevronRight from '@meronex/icons/bi/BisChevronRight'
import { getIconCard } from '../../../../../utils'

import { Modal } from '../Modal'
import { Confirm } from '../Confirm'
import { StripeElementsForm } from '../StripeElementsForm'

import { Button } from '../../styles/Buttons'
import { NotFoundSource } from '../NotFoundSource'
import { SpinnerLoader } from '../SpinnerLoader'

import {
  OptionStripeContainer,
  WarningMessage,
  CardItem,
  CardItemContent,
  CardItemActions,
  WrapperItems,
  ActionsModal,
  BlockLoading,
  CardItemActionsContent,
  DefaultCardItem,
  AddActionButton,
  Layer
} from './styles'

const PaymentOptionStripeUI = (props) => {
  const {
    defaultCardSetActionStatus,
    onSelectCard,
    onCancel,
    deleteCard,
    setDefaultCard,
    cardDefault,
    cardsList,
    handleNewCard
  } = props
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [addCartOpen, setAddCardOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [openActionCardId, setOpenActionCardId] = useState(null)
  const dropdownReference = useRef()

  const _handleNewCard = (card) => {
    setAddCardOpen(false)
    handleNewCard(card)
    setDefaultCard(card)
  }

  const handleDeleteCard = (card) => {
    setOpen(false)
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CARD', 'Are you sure that you want to delete the card?'),
      handleOnAccept: () => {
        deleteCard(card)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const _handleCardClick = (card) => {
    setDefaultCard(card)
    setOpen(false)
  }

  const closeActionContent = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  const handleOpenActionContent = (card) => {
    setOpen(true)
    setOpenActionCardId(card)
  }

  useEffect(() => {
    document.addEventListener('mouseup', closeActionContent)
    return () => {
      document.removeEventListener('mouseup', closeActionContent)
    }
  }, [open])

  return (
    <OptionStripeContainer>
      {!token && <WarningMessage>{t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')}</WarningMessage>}

      {token && !cardsList.loading && cardsList.cards && cardsList.cards.length === 0 && (
        <CardItem>
          <span>{t('NO_CARDS', 'No cards')}</span>
        </CardItem>
      )}

      {token && cardsList.error && cardsList.error.length > 0 && (
        <NotFoundSource
          content={cardsList?.error[0]?.message || cardsList?.error[0]}
        />
      )}

      {token && cardsList.cards && cardsList.cards.length > 0 && (
        <WrapperItems borderBottom>
          <p>{t('SAVED_CARDS', 'Saved cards')}</p>
          {cardsList.cards.map((card, i) => (
            <CardItem key={i}>
              <CardItemContent>
                <span className='brand'>
                  {getIconCard(card.brand)}
                </span>
                <span className='brandName'>{card.brand}</span>
                <span>
                  ...{card.last4}
                </span>
              </CardItemContent>
              <CardItemActions>
                {card.id === cardDefault?.id && (
                  <DefaultCardItem>
                    <BsCheck />
                    <span>{t('DEFAULT', 'Default')}</span>
                  </DefaultCardItem>
                )}
                <BsThreeDots onClick={() => handleOpenActionContent(card.id)} />
                {open && openActionCardId === card.id && (
                  <CardItemActionsContent ref={dropdownReference}>
                    <span onClick={() => _handleCardClick(card)}>
                      {t('SET_DEFAULT', 'Set Default')}
                    </span>
                    <span onClick={() => handleDeleteCard(card)}>
                      {t('DELETE', 'Delete')}
                    </span>
                  </CardItemActionsContent>
                )}
              </CardItemActions>
            </CardItem>
          ))}
        </WrapperItems>
      )}

      {token && !cardsList.loading && (
        <WrapperItems bottomSection>
          <p>{t('ADD_PAYMENT_CARD', 'Add New Payment Card')}</p>
          <AddActionButton onClick={() => setAddCardOpen(true)}>
            <div>
              <AiFillCreditCard />
              <span>{t('CREDIT/DEBIT_CARD', 'Credit/Debit Card')}</span>
            </div>
            <BisChevronRight />
          </AddActionButton>
          <ActionsModal>
            <Button onClick={() => onCancel()}>
              {t('CANCEL', 'Cancel')}
            </Button>
            <Button color='primary' onClick={() => onSelectCard(cardDefault)} disabled={!cardDefault}>
              {t('ACCEPT', 'Accept')}
            </Button>
          </ActionsModal>
        </WrapperItems>
      )}
      {defaultCardSetActionStatus?.loading && (
        <Layer>
          <SpinnerLoader />
        </Layer>
      )}

      <Modal
        title={t('ADD_CREDIT_OR_DEBIT_CARD', 'Add credit or debit card')}
        className='modal-info'
        open={addCartOpen}
        onClose={() => setAddCardOpen(false)}
      >
        <StripeElementsForm
          businessId={props.businessId}
          publicKey={props.publicKey}
          toSave
          requirements={props.clientSecret}
          onCancel={() => setAddCardOpen(false)}
          onNewCard={_handleNewCard}
        />
      </Modal>

      <Confirm
        title={t('CARD', 'Card')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />

      {token && cardsList.loading && (
        [...Array(5).keys()].map(i => (
          <BlockLoading key={i}>
            <Skeleton height={50} />
          </BlockLoading>
        ))
      )}
    </OptionStripeContainer>
  )
}

export const PaymentOptionStripe = (props) => {
  const paymentOptionStripeProps = {
    ...props,
    UIComponent: PaymentOptionStripeUI
  }
  return (
    <PaymentOptionStripeController {...paymentOptionStripeProps} />
  )
}

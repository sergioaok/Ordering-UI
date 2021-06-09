import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { OrderReview as ReviewOrderController, useLanguage } from 'ordering-components'
import { ReviewOrderContainer, Reviews, Categories, Category, Stars, Comments, Send, InvisibleInput } from './styles'
import { Alert } from '../Confirm'
import AiFillStar from '@meronex/icons/ai/AiFillStar'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { ThemeContext } from 'styled-components'
import { capitalize } from '../../utils'

const ReviewOrderUI = (props) => {
  const { stars, handleChangeInput, handleChangeRating, handleSendReview, formState, closeReviewOrder, setIsReviewed } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [hover, setHover] = useState(stars)
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  const { colors } = useContext(ThemeContext)

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        success: false,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setAlertState({
        ...alertState,
        open: true,
        title: t('REVIEW_SUCCESS_TITLE', 'Well done'),
        content: t('REVIEW_SUCCESS_CONTENT', 'Thank you, Review successfully submitted!')
      })
      setIsReviewed && setIsReviewed(true)
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        success: false,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  const onSubmit = values => {
    setAlertState({ ...alertState, success: true })
    handleSendReview()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    if (!formState.loading && !formState.result?.error && alertState.success) {
      closeReviewOrder()
    }
  }

  const StarsComponent = ({ name }) => (
    [...Array(5)].map((star, i) => (
      <label key={i} onMouseLeave={() => setHover(stars)}>
        <input
          type='radio'
          name={name}
          value={i + 1}
          onClick={(e) => handleChangeRating(e)}
        />
        <AiFillStar
          color={(i + 1) <= (hover[name] || stars[name]) ? colors.primary : 'gray'}
          size={25}
          onMouseEnter={() => setHover({ [name]: (i + 1) })}
        />
      </label>
    ))
  )

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ReviewOrderContainer onSubmit={handleSubmit(onSubmit)}>
        <Reviews>
          <h2>{t('REVIEWS', 'Reviews')}:</h2>
          <Categories id='list'>
            {Object.keys(stars).map(key => (
              <React.Fragment key={key}>
                {key !== 'Comments' && (
                  <InvisibleInput
                    type='text'
                    name={key}
                    value={stars[key]}
                    ref={register({
                      validate: value => value === '0' ? t('CATEGORY_ATLEAST_ONE', `${capitalize(key)} must be at least one point`).replace('CATEGORY', key.toUpperCase()) : null
                    })}
                    disabled
                  />
                )}
              </React.Fragment>
            ))}
            {
            props.beforeMidElements?.map((BeforeMidElements, i) => (
              <React.Fragment key={i}>
                {BeforeMidElements}
              </React.Fragment>))
            }
            {
            props.beforeMidComponents?.map((BeforeMidComponents, i) => (
              <BeforeMidComponents key={i} {...props} />))
            }
            <Category id='stars' onMouseLeave={() => setHover(stars)}>
              <p>{t('QUALITY', 'Quality of Product')}:</p>
              <Stars>
                <StarsComponent name='quality' />
              </Stars>
            </Category>
            <Category id='stars' onMouseLeave={() => setHover(stars)}>
              <p>{t('PUNCTUALITY', 'Punctuality')}:</p>
              <Stars>
                <StarsComponent name='punctiality' />
              </Stars>
            </Category>
            <Category id='stars' onMouseLeave={() => setHover(stars)}>
              <p>{t('SERVICE', 'Service')}:</p>
              <Stars>
                <StarsComponent name='service' />
              </Stars>
            </Category>
            <Category id='stars' onMouseLeave={() => setHover(stars)}>
              <p>{t('PRODUCT_PACKAGING', 'Product Packaging')}:</p>
              <Stars>
                <StarsComponent name='packaging' />
              </Stars>
            </Category>
          </Categories>
        </Reviews>
        <Comments>
          <h2>{t('COMMENTS', 'Comments')}:</h2>
          <Input
            placeholder={t('COMMENTS', 'Comments')}
            name='comments'
            onChange={(e) => handleChangeInput(e)}
            autoComplete='off'
          />
        </Comments>
        {
          props.afterMidElements?.map((MidElement, i) => (
            <React.Fragment key={i}>
              {MidElement}
            </React.Fragment>))
        }
        {
          props.afterMidComponents?.map((MidComponent, i) => (
            <MidComponent key={i} {...props} />))
        }
        <Send>
          <Button
            color={!formState.loading ? 'primary' : 'secondary'}
            type='submit'
            disabled={formState.loading}
          >
            {!formState.loading ? t('SEND_REVIEW', 'Send a Review') : t('LOADING', 'Loading')}
          </Button>
        </Send>
        <Alert
          title={t('ORDER_REVIEW', 'Order Review')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </ReviewOrderContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ReviewOrder = (props) => {
  const ReviewOrderProps = {
    ...props,
    UIComponent: ReviewOrderUI
  }

  return <ReviewOrderController {...ReviewOrderProps} />
}

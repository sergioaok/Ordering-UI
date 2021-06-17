import React, { useState } from 'react'
import moment from 'moment'
import { MomentOption, useLanguage, useUtils, useConfig, useOrder } from 'ordering-components'

import {
  MomentControlContainer,
  Days,
  Hours,
  Title
} from './styles'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Alert } from '../../../../../components/Confirm'
import { Button } from '../../styles/Buttons'
import { Select } from '../../styles/Select'

const MomentControlUI = (props) => {
  const {
    isAsap,
    datesList,
    hoursList,
    dateSelected,
    timeSelected,
    handleAsap,
    handleChangeDate,
    handleChangeTime,
    onClose
  } = props

  const [{ configs }] = useConfig()
  const [{ parseTime }] = useUtils()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()
  const [orderState] = useOrder()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleDeliveryNow = () => {
    !orderState.loading && handleAsap()
    if (isAsap) {
      onClose && onClose()
    }
  }

  const handleSchedule = () => {
    if (timeSelected) {
      onClose && onClose()
    } else {
      setAlertState({
        open: true,
        content: t('SELECT_A_TIME', 'Please select a time')
      })
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const dateListOptions = datesList.slice(0, Number(configs?.max_days_preorder?.value || 6, 10)).map(date => {
    const dateParts = date.split('-')
    const _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    const dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7))
    const dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate()
    return {
      value: date,
      content: (
        <span>{dayName} {dayNumber}</span>
      )
    }
  })

  const hoursListOptions = hoursList.map(hour => {
    return {
      value: hour.startTime,
      content: (
        configs?.format_time?.value === '12' ? (
          hour.startTime.includes('12')
            ? `${hour.startTime}PM`
            : parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'hh:mma' })
        ) : (
          parseTime(moment(hour.startTime, 'HH:mm'), { outputFormat: 'HH:mm' })
        )
      )
    }
  })

  return (
    <div id='moment_control'>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <MomentControlContainer>
        <Title>{t('CHOOSE_A_HOUR', 'Choose a hour')}</Title>
        <Days name='days'>
          <Select
            options={dateListOptions}
            defaultValue={dateSelected}
            onChange={(date) => handleChangeDate(date)}
          />
        </Days>
        <Hours name='hours'>
          <Select
            options={hoursListOptions}
            defaultValue={timeSelected}
            placeholder={t('SELECT_A_TIME', 'Select a time')}
            onChange={(hour) => !orderState.loading && handleChangeTime(hour)}
          />
        </Hours>
        <Button
          rectangle
          color='primary'
          type='button'
          disabled={orderState.loading}
          onClick={() => handleSchedule()}
        >
          {t('SCHEDULE', 'Schedule')}
        </Button>
        <Button
          rectangle
          type='button'
          className='asap'
          disabled={orderState.loading}
          onClick={() => handleDeliveryNow()}
        >
          {windowSize.width > 410 ? (
            t('ASAP', 'As soon as possible')
          ) : (
            t('ASAP_ABBREVIATION', 'ASAP')
          )}
        </Button>
        <Alert
          title={t('TIME', 'Time')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </MomentControlContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

export const MomentControl = (props) => {
  const momentProps = {
    ...props,
    UIComponent: MomentControlUI
  }
  return <MomentOption {...momentProps} />
}

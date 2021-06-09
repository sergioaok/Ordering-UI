import React, { useState } from 'react'
import { useOrder, useLanguage, useUtils, useConfig } from 'ordering-components'
import { Modal } from '../../../../../components/Modal'
import { MomentContent } from '../../../../../components/MomentContent'
import { Button } from '../../styles/Buttons'

import {
  DeliveryTimeContainer,
  TimeWrapper,
  AddressContainer
} from './styles'
export const DeliveryDetails = () => {
  const [orderStatus] = useOrder()
  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()
  const [, t] = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <DeliveryTimeContainer>
        <TimeWrapper>
          <span>{t('TIME', 'Time')}</span>
          <span>
            {orderStatus.options?.moment
              ? parseDate(orderStatus.options?.moment, { outputFormat: configs?.dates_moment_format?.value })
              : t('ASAP_ABBREVIATION', 'ASAP')}
          </span>
        </TimeWrapper>
        <Button
          color='primary'
          disabled={orderStatus.loading}
          onClick={() => setModalOpen(true)}
        >
          {t('SCHEDULE', 'Schedule')}
        </Button>
      </DeliveryTimeContainer>
      <AddressContainer>
        <h1>{t('ADDRESS', 'Address')}</h1>
        <p>{orderStatus?.options?.address?.address}</p>
      </AddressContainer>
      <Modal
        width='70%'
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <MomentContent />
      </Modal>
    </>
  )
}

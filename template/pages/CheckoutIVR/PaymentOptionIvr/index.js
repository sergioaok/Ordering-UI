import React from 'react'
import { Button } from '../../../../src/styles/Buttons'
import {useLanguage} from 'ordering-components'
import { PaymentOptionIvrContainer, Title, Code,WrapperButtons } from './styles'

export const PaymentOptionIvr = (props) => {
  const {
    payReference,
    onClose,
    confirmCartIvr
  } = props

  const [, t] = useLanguage()

  return (
    <PaymentOptionIvrContainer>
      <Title>
        {t('WAIT_PAYMENT_PROCESSED', 'Please wait, the payment is being proccesed')}
      </Title>
      <Code>
        {t('CODE_IRV', 'The IVR code is')}: {payReference}
      </Code>
      <WrapperButtons>
        <Button onClick={onClose}>
          {t('CANCEL_PAYMENT', 'Cancel payment')}
        </Button>
        <Button color='primary' onClick={() => confirmCartIvr()}>
          {t('CHECK_STATUS_MANUALLY', 'Check status manually')}
        </Button>
      </WrapperButtons>
    </PaymentOptionIvrContainer>
  )
}

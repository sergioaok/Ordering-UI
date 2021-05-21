import React, { useState, useEffect } from 'react'
import { UpsellingPage as UpsellingPageController } from 'ordering-components/_modules/components'
import { useLanguage, useUtils } from 'ordering-components/_modules/contexts'
import { Container, UpsellingContainer, Item, Image, Details, CloseUpselling, SkeletonContainer } from './styles'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import { ProductForm } from '../ProductForm'

const UpsellingPageUI = (props) => {
  const {
    upsellingProducts,
    handleUpsellingPage,
    openUpselling,
    canOpenUpselling,
    setCanOpenUpselling,
    business,
    isCustomMode
  } = props
  const [, t] = useLanguage()
  const [actualProduct, setActualProduct] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [{ parsePrice }] = useUtils()

  useEffect(() => {
    if (!isCustomMode) {
      if (upsellingProducts?.products?.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true)
      } else if (!upsellingProducts?.products?.length && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage()
      }
    }
  }, [upsellingProducts.loading, upsellingProducts?.products.length])

  const handleFormProduct = (product) => {
    setActualProduct(product)
    setModalIsOpen(true)
  }

  const handleSaveProduct = () => {
    setActualProduct(null)
    setModalIsOpen(false)
  }

  const UpsellingLayout = () => {
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
        <Container>
          <UpsellingContainer>
            {
              !upsellingProducts.loading ? (
                <>
                  {
                    !upsellingProducts.error ? upsellingProducts.products.map((product, i) => (
                      <Item key={product.id} name={product.name}>
                        <Image>
                          <img src={product.images} alt={`product-${i}`} width='150px' height='150px' loading='lazy' />
                        </Image>
                        <Details>
                          <div>
                            <h3 title={product.name}>{product.name}</h3>
                          </div>
                          <p>{parsePrice(product.price)}</p>
                          <Button color='primary' onClick={() => handleFormProduct(product)}>{t('ADD', 'Add')}</Button>
                        </Details>
                      </Item>
                    )) : (
                      <>
                        {upsellingProducts.message}
                      </>
                    )
                  }
                </>
              ) : [...Array(8)].map((item, i) => (
                <SkeletonContainer key={i}>
                  <Skeleton width={150} height={250} />
                </SkeletonContainer>
              ))
            }
          </UpsellingContainer>
        </Container>
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

  return (
    <>

      {isCustomMode ? (
        <UpsellingLayout />
      ) : (
        <>
          {!canOpenUpselling || upsellingProducts?.products?.length === 0 ? '' : (
            <Modal
              title={t('WANT_SOMETHING_ELSE', 'Do you want something else?')}
              open={openUpselling}
              onClose={() => handleUpsellingPage()}
              width='70%'
            >
              <UpsellingLayout />
              <CloseUpselling>
                <Button
                  color='secondary'
                  outline
                  onClick={() => handleUpsellingPage(false)}
                >
                  {t('NO_THANKS', 'No, Thanks')}
                </Button>
              </CloseUpselling>
            </Modal>
          )}
        </>
      )}
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} width='70%' padding='0' closeOnBackdrop>
        {actualProduct && (
          <ProductForm
            product={actualProduct}
            businessId={actualProduct.api.businessId}
            businessSlug={business.slug}
            onSave={() => handleSaveProduct()}
          />
        )}
      </Modal>
    </>
  )
}

export const UpsellingPage = (props) => {
  const UpsellingPageProps = {
    ...props,
    UIComponent: UpsellingPageUI
  }

  return <UpsellingPageController {...UpsellingPageProps} />
}

export default UpsellingPage

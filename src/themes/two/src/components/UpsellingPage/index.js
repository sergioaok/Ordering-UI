import React, { useState, useEffect } from 'react'
import { UpsellingPage as UpsellingPageController, useLanguage, useUtils } from 'ordering-components'
import { Container, UpsellingContainer, Item, Image, Details, CloseUpselling } from './styles'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import { ProductForm } from '../ProductForm'
import { AutoScroll } from '../AutoScroll'

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
    if (upsellingProducts?.products?.length && !upsellingProducts.loading) {
      setCanOpenUpselling && setCanOpenUpselling(true)
    } else if (!upsellingProducts?.products?.length && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
      handleUpsellingPage()
    }
  }, [upsellingProducts.loading, upsellingProducts?.products.length])

  const handleFormProduct = (product) => {
    setModalIsOpen(true)
    setActualProduct(product)
  }

  const handleSaveProduct = () => {
    setActualProduct(null)
    setModalIsOpen(false)
  }

  const UpsellingLayout = () => {
    return (
      <Container>
        <UpsellingContainer>
          <AutoScroll innerScroll>
            {
              !upsellingProducts.loading ? (
                <>
                  {
                    !upsellingProducts.error ? upsellingProducts.products.map((product, i) => (
                      <Item key={product.id} name={product.name} onClick={() => handleFormProduct(product)}>
                        <Details>
                          <div>
                            <h3 title={product.name}>{product.name}</h3>
                          </div>
                          <p>{parsePrice(product.price)}</p>
                        </Details>
                        <Image>
                          <img src={product.images} alt={`product-${i}`} width='70px' height='70px' loading='lazy' />
                        </Image>
                      </Item>
                    )) : (
                      <>
                        {upsellingProducts.message}
                      </>
                    )
                  }
                </>
              ) : [...Array(8)].map((item, i) => (
                <Item key={i}>
                  <Skeleton width={250} height={50} />
                </Item>
              ))
            }
          </AutoScroll>
        </UpsellingContainer>
      </Container>
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
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width='70%'
        padding='0'
        closeOnBackdrop
        isProductForm
      >
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

import React, { useState } from 'react'
import { formatUrlVideo, convertHoursToMinutes } from '../../utils'
import { useTheme } from 'styled-components'
import {
  BusinessInformation as BusinessInformationController,
  GoogleMapsMap
} from 'ordering-components/_modules/components'
import {
  useOrder,
  useLanguage,
  useUtils,
  useConfig
} from 'ordering-components/_modules/contexts'
import { BusinessReviews } from '../BusinessReviews'
import { Modal } from '../Modal'
import {
  BusinessInformationContainer,
  BusinessHeader,
  BusinessContent,
  BusinessBasicContent,
  FlexTabs,
  SectionTitle,
  Map,
  ScheduleBlock,
  ScheduleSection,
  ScheduleContainer,
  DeliveryInfo,
  BusinessMediaContent,
  BusinessInfo,
  BusinessInfoItem,
  WrapperBusinessLogo,
  BusinessLogo,
  ModalIcon,
  Description,
  ImageContainer,
  OffersSection,
  OfferText,
  OfferTextP,
  OfferTable
} from './styles'
import { Tabs, Tab } from '../../styles/Tabs'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import FaStar from '@meronex/icons/fa/FaStar'
import FiClock from '@meronex/icons/fi/FiClock'
import GrLocation from '@meronex/icons/gr/GrLocation'
import MdClose from '@meronex/icons/md/MdClose'
import { AutoScroll } from '../AutoScroll'

export const BusinessInformationUI = (props) => {
  const {
    business,
    getBusinessType,
    optimizeImage,
    businessLocation,
    businessSchedule,
    businessPhotos,
    businessVideos,
    onClose
  } = props

  const theme = useTheme()
  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [tabValue, setTabValue] = useState('General Info')

  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tues'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thur'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]
  const [{ parsePrice, parseDistance }] = useUtils()
  const [modalImage, setModalImage] = useState(false)
  const [image, setImage] = useState('')

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

  const handleModalImage = (src) => {
    setImage(src)
    setModalImage(true)
  }

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
      <BusinessInformationContainer>
        <ModalIcon>
          <MdClose onClick={() => onClose(false)} />
        </ModalIcon>
        <BusinessHeader>
          <img src={business.header} alt='business-image' width='444px' height='250px' loading='lazy' />
          <BusinessBasicContent>
            {(business?.logo || theme.images?.dummies?.businessLogo) && (
              <WrapperBusinessLogo>
                <BusinessLogo
                  bgimage={
                    optimizeImage
                      ? optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')
                      : business?.logo || theme.images?.dummies?.businessLogo
                  }
                />
              </WrapperBusinessLogo>
            )}
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  <p className='bold'>{business?.name}</p>
                  <p>
                    <FaStar className='start' />
                    {business?.reviews?.total}
                  </p>
                </div>
                {getBusinessType && (
                  <div>
                    <p>{getBusinessType()}</p>
                  </div>
                )}
                <div>
                  <>
                    {orderState?.options?.type === 1 ? (
                      <h5>
                        <FiClock />
                        {convertHoursToMinutes(business?.delivery_time)}
                      </h5>
                    ) : (
                      <h5>
                        <FiClock />
                        {convertHoursToMinutes(business?.pickup_time)}
                      </h5>
                    )}
                  </>
                  <h5>
                    <GrLocation />
                    {parseDistance(business?.distance || 0)}
                  </h5>
                  <h5>
                    <GrDeliver />
                    {business && parsePrice(business?.delivery_price || 0)}
                  </h5>
                </div>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessBasicContent>
        </BusinessHeader>
        <BusinessContent>
          {business.reviews && (
            <FlexTabs>
              <Tabs variant='primary'>
                <Tab onClick={() => setTabValue('General Info')} active={tabValue === 'General Info'}>
                  {t('GENERAL_INFO', 'General Info')}
                </Tab>
                {business.reviews?.reviews && (
                  <Tab onClick={() => setTabValue('Reviews')} active={tabValue === 'Reviews'}>
                    {t('REVIEWS', 'Reviews')}
                  </Tab>
                )}
                {business?.offers?.length > 0 && (
                  <Tab onClick={() => setTabValue('Offers')} active={tabValue === 'Offers'}>
                    {t('OFFERS', 'Offers')}
                  </Tab>
                )}
              </Tabs>
            </FlexTabs>
          )}

          {tabValue === 'General Info' && (
            <>
              {business.about && (
                <>
                  <SectionTitle>{t('BUSINESS_ABOUT', 'Business short description')}</SectionTitle>
                  <Description>{business.about}</Description>
                </>
              )}
              {business.description && (
                <>
                  <SectionTitle>{t('BUSINESS_DESCRIPTION', 'Business description')}</SectionTitle>
                  <Description>{business.description}</Description>
                </>
              )}
              {businessLocation.location && (
                <>
                  <SectionTitle>{t('BUSINESS_LOCATION', 'Business location')}</SectionTitle>
                  {businessLocation.location && (
                    <Map>
                      <GoogleMapsMap
                        apiKey={configs?.google_maps_api_key?.value}
                        location={businessLocation.location}
                        mapControls={businessLocation.googleMapsControls || business.googleMapsControls}
                      />
                    </Map>
                  )}
                </>
              )}
              {businessSchedule?.length > 0 && (
                <>
                  <SectionTitle>{t('BUSINESS_OPENING_TIME', 'Business Opening Time')}</SectionTitle>
                  <ScheduleSection>
                    <ScheduleContainer>
                      <Tabs>
                        <AutoScroll modal>
                          {businessSchedule.map((schedule, i) => (
                            <ScheduleBlock key={i}>
                              <h4>{daysOfWeek[i]}</h4>
                              {schedule.enabled ? (
                                <>
                                  <p>{scheduleFormatted(schedule.lapses[0].open)}</p>
                                  <p>{scheduleFormatted(schedule.lapses[0].close)}</p>
                                </>
                              ) : (
                                <p style={{ fontWeight: 500 }}>{t('CLOSED_TODAY', 'Closed Today')}</p>
                              )}
                            </ScheduleBlock>
                          ))}
                        </AutoScroll>
                      </Tabs>
                    </ScheduleContainer>
                  </ScheduleSection>
                  <DeliveryInfo>
                    <div>
                      <h5>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</h5>
                      <h5>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</h5>
                    </div>
                  </DeliveryInfo>
                </>
              )}
              {businessPhotos?.length > 0 && (
                <BusinessMediaContent>
                  <SectionTitle>{t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')}</SectionTitle>
                  <div>
                    {
                      businessPhotos.map((photo, i) => (
                        <img key={i} src={photo.file} alt={`photo-${i}`} width='191' height='128' onClick={() => handleModalImage(photo.file)} loading='lazy' />
                      ))
                    }
                  </div>
                </BusinessMediaContent>
              )}
              {businessVideos?.length > 0 && (
                <BusinessMediaContent>
                  <SectionTitle>{t('BUSINESS_VIDEOS', 'Business Videos')}</SectionTitle>
                  <div>
                    {businessVideos.map((video, i) => (
                      <iframe key={i} src={formatUrlVideo(video.video)} width='191' height='128' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                    ))}
                  </div>
                </BusinessMediaContent>
              )}
            </>
          )}

          {tabValue === 'Reviews' && (
            <>
              {business.reviews?.reviews && (
                <BusinessReviews
                  businessId={business.id}
                  reviews={business.reviews?.reviews}
                  businessName={business.name}
                  stars={business.reviews?.total}
                />
              )}
            </>
          )}

          {tabValue === 'Offers' && (
            <OffersSection>
              <OfferText>
                <OfferTextP>{t('DISCOUNTS_OF', 'Discounts of')} {business?.name}</OfferTextP>
                <OfferTextP>{business?.address}</OfferTextP>
              </OfferText>
              <OfferTable>
                <table>
                  <thead>
                    <tr>
                      <th>{t('OFFERT_NAME', 'Offer Name')}</th>
                      <th>{t('OFFERT_PRICE', 'Offer Price')}</th>
                      <th>{t('OFFERT_START_DATE', 'Start Date')}</th>
                      <th>{t('OFFERT_END_DATE', 'End Date')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {business?.offers?.map(offer => (
                      <tr key={offer.id}>
                        <td>{offer.name}</td>
                        <td>
                          {offer.rate_type === 1 ? (
                            `${offer.rate} % ${t('MIN', 'Min')}: ${parsePrice(offer.minimum)}`
                          ) : (
                            `${parsePrice(offer.rate)} ${t('MIN', 'Min')}: ${parsePrice(offer.minimum)}`
                          )}
                        </td>
                        <td>{offer.start}</td>
                        <td>{offer.end}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </OfferTable>
            </OffersSection>
          )}
        </BusinessContent>
        <Modal
          onClose={() => setModalImage(false)}
          open={modalImage}
          padding='0'
          hideCloseDefault
          isTransparent
          height='auto'
        >
          <ImageContainer>
            <ModalIcon>
              <MdClose onClick={() => setModalImage(false)} />
            </ModalIcon>
            <img src={image} width='320px' height='180px' loading='lazy' />
          </ImageContainer>
        </Modal>
      </BusinessInformationContainer>
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

export const BusinessInformation = (props) => {
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const BusinessInformationProps = {
    ...props,
    UIComponent: BusinessInformationUI,
    googleMapsControls
  }
  return <BusinessInformationController {...BusinessInformationProps} />
}

export default BusinessInformation

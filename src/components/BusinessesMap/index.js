import React from 'react'
import { BusinessesMap as BusinessesMapController, GoogleMapsMap, useConfig, useOrder } from 'ordering-components'
import { WrapperMap } from './styles'

const BusinessesMapUI = (props) => {
  const {
    userLocation,
    businessLocations,
    onBusinessClick,
    setErrors
  } = props

  const [configState] = useConfig()
  const [orderState] = useOrder()

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <WrapperMap disabled={orderState.loading}>
        <GoogleMapsMap
          apiKey={configState?.configs?.google_maps_api_key?.value}
          location={userLocation}
          locations={businessLocations}
          mapControls={googleMapsControls}
          maxLimitLocation={parseInt(configState?.configs?.meters_to_change_address?.value)}
          businessMap
          onBusinessClick={onBusinessClick}
          setErrors={setErrors}
        />
      </WrapperMap>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessesMap = (props) => {
  const businessMapController = {
    ...props,
    UIComponent: BusinessesMapUI
  }
  return <BusinessesMapController {...businessMapController} />
}

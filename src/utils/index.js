import React from 'react'
import FaCcMastercard from '@meronex/icons/fa/FaCcMastercard'
import FaCcVisa from '@meronex/icons/fa/FaCcVisa'
import FaCreditCard from '@meronex/icons/fa/FaCreditCard'
import { useLanguage } from 'ordering-components'

export const optimizeImage = (url, params, fallback) => {
  if (!url && fallback) return fallback
  params = params && params.length > 0 ? `,${params}` : ''
  if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
    var parts = url.split('upload')
    url = `${parts[0]}upload/f_auto,q_auto${params}${parts[1]}`
  }
  return url
}

export const getIconCard = (brand = '') => {
  const value = brand.toLowerCase()
  switch (value) {
    case 'visa':
      return <FaCcVisa />
    case 'mastercard':
      return <FaCcMastercard />
    default:
      return <FaCreditCard />
  }
}

export const DriverTipsOptions = [0, 10, 15, 20, 25]

/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */
export const scrollTo = (element, to, duration) => {
  if (!element) return
  const start = element.scrollTop
  const change = to - start
  let currentTime = 0
  const increment = 20

  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */
export const formatUrlVideo = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  const id = (match && match[7].length === 11) ? match[7] : false
  return `https://www.youtube-nocookie.com/embed/${id}`
}

/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */
export const convertHoursToMinutes = (time) => {
  if (!time) return '0min'
  const [hour, minute] = time.split(':')
  const result = (parseInt(hour, 10) * 60) + parseInt(minute, 10)
  return `${result}min`
}

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Function to return a static google maps image based in location
 * @param {object} param object with latitude and logitude
 */
export const getGoogleMapImage = ({ lat, lng }) => {
  const googleMapKey = 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
  return `https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=${lat},${lng}&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${lat},${lng}&key=${googleMapKey}`
}

/**
 * _Function to flat array of one level
 * @param {Array} arr to flat
 */
export const flatArray = arr => [].concat(...arr)

/**
 * Function to return the traduction depending of a key 't'
 * @param {string} key for traduction
 */
export const getTraduction = key => {
  const [, t] = useLanguage()
  const keyList = {
    // Add the key and traduction that you need below
    ERROR_ORDER_WITHOUT_CART: 'The order was placed without a cart',
    ERROR_INVALID_COUPON: "The coupon doesn't exist",
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_PICKUP: 'The business is too far for order type pickup'
  }

  return keyList[key] ? t(key, keyList[key]) : t(key)
}
/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */
export const bytesConverter = bytes => {
  return Math.floor(bytes / 1024)
}

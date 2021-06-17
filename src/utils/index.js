import React from 'react'
import FaCcMastercard from '@meronex/icons/fa/FaCcMastercard'
import FaCcVisa from '@meronex/icons/fa/FaCcVisa'
import FaCreditCard from '@meronex/icons/fa/FaCreditCard'
import { useLanguage } from 'ordering-components'

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
export const getGoogleMapImage = (location, apiKey) => {
  const lat = location?.lat
  const lng = location?.lng
  return `https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=${lat},${lng}&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${lat},${lng}&key=${apiKey}`
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
    ERROR_IVALID_COUPON_MINIMUM: 'You must have more products in your cart to use the coupon',
    ERROR_ADD_PRODUCT_VERY_FAR_FOR_PICKUP: 'The business is too far for order type pickup',
    ERROR_PLACE_PAY_WITH_CARD2: 'An error occurred while trying to pay by card',
    ERROR_ADD_PRODUCT_BUSINESS_CLOSED: 'The business is closed at the moment',
    INTERNAL_ERROR: 'Server Error, please wait, we are working to fix it',
    PREPARED_IN: 'Preparation time',
    DELIVERY_DATETIME: 'Delivery datetime',
    ERROR_MISSING_PAYMETHOD_HOOK: 'Missing payment method hook',
    INVALID_CODE: 'Invalid verify code',
    ERROR_YOU_HAVE_NOT_CART: 'Cart not found',
    ERROR_PLACE_PAY_WITH_REDIRECT: 'An error occurred while trying to pay by redirect',
    ERROR_PLACE_PAY_WITH_CARD1: 'An error occurred while trying to pay by card',
    ERROR_PLACE_PAY_WITH_PAYPAL_CAPTURE: 'An error occurred while trying to pay by PayPal',
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

/**
 * Function to get time in 12 hours format.
 */
export const getHourMin = (hour, min) => {
  let _hour
  if (hour < 12) {
    _hour = hour < 10 ? `0${hour}` : `${hour}`
  } else {
    _hour = (hour - 12) < 10 ? `0${hour - 12}` : `${hour - 12}`
  }
  const _min = min < 10 ? `0${min}` : `${min}`
  if (hour < 12) {
    return `${_hour} : ${_min} AM`
  } else {
    return `${_hour} : ${_min} PM`
  }
}
/**
 * List of fields with correct order
 */
export const fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email']
/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */
export const sortInputFields = ({ fields, values }) => {
  let fieldsBase = fields
  const fieldsSorted = []
  const fieldsArray = Array.isArray(values) ? values : Object.values(values)

  if (!fieldsBase) {
    fieldsBase = fieldsToSort
  }

  fieldsBase.forEach(f => {
    fieldsArray.forEach(field => {
      if (f === field.code) {
        fieldsSorted.push(field)
      }
    })
  })
  return fieldsSorted
}

/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */
export const verifyDecimals = (value, parser) => {
  if (value % 1 === 0) {
    return value
  } else {
    return parser(value)
  }
}
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
export const formatSeconds = (seconds) => {   
 // Hours, minutes and seconds
 var hrs = ~~(seconds / 3600);
 var mins = ~~((seconds % 3600) / 60);
 var secs = ~~seconds % 60;

 // Output like "1:01" or "4:03:59" or "123:03:59"
 var ret = "";
 if (hrs > 0) {
     ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
 }
 ret += "" + mins + ":" + (secs < 10 ? "0" : "");
 ret += "" + secs;
 return ret;
}

import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useEvent, useLanguage } from 'ordering-components'
import { useTheme } from '../../../src/contexts/ThemeContext'

export const ListenPageChanges = ({ children }) => {
  const history = useHistory()
  const [events] = useEvent()
  const [languageState] = useLanguage()
  const [theme, { merge }] = useTheme()

  const routes = {
    home: '/',
    search: '/search',
    signin: '/signin',
    signup: '/signup',
    profile: '/profile',
    orders: '/profile/orders',
    order_detail: '/orders/:orderId',
    checkout: '/checkout/:cartUuid',
    checkout_list: '/checkout',
    business: '/store/:store',
    business_slug: '/:store',
    forgot_password: '/password/forgot',
    reset_password: '/password/reset'
  }

  const handleGoToPage = ({ page, params = {}, search, replace = false }) => {
    let path = routes[page]
    if (path) {
      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, value)
      })
      if (search) {
        path = `${path}${search}`
      }
      history[replace ? 'replace' : 'push'](path)
    }
  }

  const getCurrentPage = (pathname) => {
    Object.entries(routes).forEach(([key, value]) => {
      const regex = RegExp(value.replace(/:[a-zA-Z]+/i, '(.+)') + '$', 'gi')
      if (regex.test(pathname)) {
        const pathParts = value.split('/')
        const currentParts = pathname.split('/')
        const params = {}
        const paramRegex = /:[a-zA-Z]+/i
        pathParts.forEach((part, i) => {
          if (paramRegex.test(part)) {
            params[part.replace(':', '')] = currentParts[i]
          }
        })
        const query = {}
        const searchParams = new URLSearchParams(history.location.search)
        for (const [key, value] of searchParams.entries()) {
          query[key] = value
        }
        events.emit('change_view', { page: key, params, query })
      }
    })
  }

  const handleGetCurrentView = () => {
    getCurrentPage(history.location.pathname)
  }

  useEffect(() => {
    getCurrentPage(history.location.pathname)
    const unlisten = history.listen((data) => {
      getCurrentPage(data.pathname)
    })
    events.on('go_to_page', handleGoToPage)
    events.on('get_current_view', handleGetCurrentView)
    return () => {
      unlisten()
      events.off('go_to_page', handleGoToPage)
      events.off('get_current_view', handleGetCurrentView)
    }
  }, [])

  useEffect(() => {
    if (theme.rtl !== languageState?.language?.rtl) {
      merge({
        rtl: languageState?.language?.rtl
      })
    }
  }, [languageState?.language?.rtl])

  return (
    <>
      {children}
    </>
  )
}

import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from 'react-router-dom'
import { useSession, useLanguage, useOrder, Analytics, useConfig, useEvent } from 'ordering-components'

import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'
import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { Alert } from '../src/components/Confirm'

import { BusinessesList } from './pages/BusinessesList'
import { BusinessProductsList } from './pages/BusinessProductsList'
import { CheckoutPage } from './pages/CheckoutIVR'
import { Cms } from './pages/Cms'
import { ForgotPassword } from './pages/ForgotPassword'
import { HomePage } from './pages/Home'
import { Login } from './pages/Login'
import { OrderDetailsPage } from './pages/OrderDetails'
import { PageNotFound } from './pages/PageNotFound'
import { PagesList } from './pages/PagesList'
import { Profile } from './pages/Profile'
import { ResetPassword } from './pages/ResetPassword'

import { ScrollToTop } from './components/ScrollToTop'
import { ListenPageChanges } from './components/ListenPageChanges'
import { HelmetTags } from './components/HelmetTags'

export const App = () => {
  const [{ auth, user, loading }] = useSession()
  const [orderStatus] = useOrder()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [languageState, t] = useLanguage()
  const [loaded, setLoaded] = useState(false)
  const onlineStatus = useOnlineStatus()
  const location = useLocation()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const hashKey = new URLSearchParams(useLocation()?.search)?.get('hash') || null

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const acceptAlert = () => {
    window.localStorage.setItem('front_version', configs?.front_version?.value)
    window.location.reload()
  }

  const isHome = location.pathname === '/' || location.pathname === '/home'

  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  useEffect(() => {
    if (!loaded && !orderStatus.loading) {
      setLoaded(true)
    }
    if (
      orderStatus?.options?.user_id &&
      orderStatus?.options?.user_id === parseInt(userCustomer?.id, 10) &&
      (window.location.pathname === '/' ||
      window.location.pathname === '/home')
    ) {
      events.emit('go_to_page', { page: 'search' })
    }
  }, [orderStatus])

  useEffect(() => {
    if (!loading) {
      setLoaded(!auth)
    }
  }, [loading])

  useEffect(() => {
    if (configs?.front_version?.value && loaded) {
      const localStorageFrontVersion = window.localStorage.getItem('front_version')
      if (localStorageFrontVersion && localStorageFrontVersion !== configs?.front_version?.value) {
        setAlertState({
          open: true,
          content: [t('RELOAD_FRONT_QUESTION', 'There is a new version of Ordering! Do you want to update it?')]
        })
      }
    }
  }, [configs, loaded])
  return (
    <>
      {configs?.track_id_google_analytics?.value && (
        <Analytics trackId={configs?.track_id_google_analytics?.value} />
      )}
      <ListenPageChanges />
      {
        (!loaded || languageState.loading) && (
          <SpinnerLoader />
        )
      }
      {
        loaded && !languageState.loading && (
          <>
            <Header
              isHome={isHome}
              location={location}
              isShowOrderOptions={!!userCustomer?.id}
              isCustomerMode
              isHideSignup
            />
            <NotNetworkConnectivity />
            {onlineStatus && (
              <ScrollToTop>
                <HelmetTags />
                <Switch>
                  <Route exact path='/home'>
                    {auth
                      ? <HomePage />
                      : <Redirect to='/signin' />
                    }
                  </Route>
                  <Route exact path='/'>
                    {auth
                      ? <HomePage />
                      : <Redirect to='/signin' />
                    }
                  </Route>
                  <Route exact path='/login'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : (
                          userCustomer?.id && orderStatus?.options?.address?.address
                            ? <Redirect to='/search' />
                            : <Redirect to='/' />
                        )
                    }
                  </Route>
                  <Route exact path='/signin'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : (
                          userCustomer?.id && orderStatus?.options?.address?.address
                            ? <Redirect to='/search' />
                            : <Redirect to='/' />
                        )
                    }
                  </Route>
                  <Route exact path='/password/forgot'>
                    {
                      !auth ? (
                        <ForgotPassword
                          elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                        />
                      )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/password/reset' component={ResetPassword} />
                  <Route exact path='/profile'>
                    {auth ? (
                      <Profile
                        userId={user.id}
                        accessToken={user?.session?.access_token}
                        useValidationFields
                        isHiddenAddress
                      />
                    ) : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/search'>
                    {userCustomer?.id && orderStatus?.options?.address?.address
                      ? <BusinessesList />
                      : <Redirect to='/' />}
                  </Route>
                  <Route exact path='/store/:store'>
                    {userCustomer?.id && orderStatus?.options?.address?.address
                      ? <BusinessProductsList />
                      : <Redirect to='/' />}
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    {auth
                      ? userCustomer?.id && orderStatus?.options?.address?.address
                          ? <CheckoutPage />
                          : <Redirect to='/' />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    {(auth || hashKey)
                      ? <OrderDetailsPage />
                      : (
                        <Redirect to={{
                          pathname: '/login',
                          state: { from: location.pathname || null }
                        }}
                        />
                      )}
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    <Cms />
                  </Route>
                  <Route exact path='/pages'>
                    <PagesList />
                  </Route>
                  <Route exact path='/:store'>
                    <BusinessProductsList />
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
              </ScrollToTop>
            )}
            {/*<Footer />*/}
            <Alert
              title={t('INFORMATION', 'Information')}
              content={alertState.content}
              acceptText={t('ACCEPT', 'Accept')}
              open={alertState.open}
              onClose={() => closeAlert()}
              onCancel={() => closeAlert()}
              onAccept={() => acceptAlert()}
              closeOnBackdrop={false}
            />
          </>
        )
      }
    </>
  )
}

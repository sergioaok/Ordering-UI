import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  Redirect,
  Link
} from 'react-router-dom'
import { useSession, useLanguage, useOrder } from 'ordering-components'
import { ForgotPassword } from './pages/ForgotPassword'
import { SignUp } from './pages/SignUp'
import { BusinessesList } from './Pages/BusinessesList'
import { BusinessProductsList } from './Pages/BusinessProductsList'
import { Login } from './Pages/Login'
import { OrderDetailsPage } from './Pages/OrderDetails'
import { CheckoutPage } from './Pages/Checkout'
import { Cms } from './Pages/Cms'
import { Profile } from './Pages/Profile'
import { MyOrders } from './Pages/MyOrders'
import { PageNotFound } from './Pages/PageNotFound'
import { HomePage } from '../template/Pages/Home'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import ScrollToTop from '../src/utils/ScrollToTop'
import { SpinnerLoader } from '../src/components/SpinnerLoader'
import { NotNetworkConnectivity } from '../src/components/NotNetworkConnectivity'

import { useOnlineStatus } from '../src/hooks/useOnlineStatus'
import { ThemeProvider } from '../src/contexts/ThemeContext'

const theme = {
  fonts: {
    primary: 'Poppins',
    special: 'Lobster'
  },
  colors: {
    primary: '#D83520',
    primaryContrast: '#FFF',
    secundary: '#EFEFEF',
    secundaryContrast: '#000',
    disabled: '#CBCBCB',
    disabledContast: '#000'
  }
}

export const Router = () => {
  const [{ auth, user }, sessionDispatch] = useSession()
  const [orderStatus] = useOrder()
  const [, t] = useLanguage()
  const [loaded, setLoaded] = useState(!auth)
  const onlineStatus = useOnlineStatus()

  useEffect(() => {
    if (!loaded && !orderStatus.loading) {
      setLoaded(true)
    }
  }, [orderStatus])

  const handleSuccessSignup = (user) => {
    sessionDispatch({
      type: 'login',
      user,
      token: user.session.access_token
    })
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {
          !loaded && (
            <SpinnerLoader content={t('LOADING_DELICIOUS_FOOD', 'Loading delicious food...')} />
          )
        }
        {
          !onlineStatus && (
            <>
              <Header />
              <NotNetworkConnectivity />
              <Footer />
            </>
          )
        }
        {
          loaded && onlineStatus && (
            <>
              <Header />
              <ScrollToTop>
                <Switch>
                  <Route exact path='/home'>
                    <HomePage />
                    {/* {
                            orderStatus.options?.address?.location
                              ? <Redirect to='/search' />
                              : <HomePage />
                          } */}
                  </Route>
                  <Route exact path='/'>
                    {
                            orderStatus.options?.address?.location
                              ? <Redirect to='/search' />
                              : <HomePage />
                    }
                  </Route>
                  <Route exact path='/signup'>
                    {
                      !auth
                        ? (
                          <SignUp
                            elementLinkToLogin={<Link to='/login'>{t('LOGIN', 'Login')}</Link>}
                            useLoginByCellphone
                            useChekoutFileds
                            handleSuccessSignup={handleSuccessSignup}
                          />
                        )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/login'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT', 'Create account')}</Link>}
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/signin'>
                    {
                      !auth
                        ? (
                          <Login
                            elementLinkToSignup={<Link to='/signup'>{t('CREATE_ACCOUNT', 'Create account')}</Link>}
                            elementLinkToForgotPassword={<Link to='/password/forgot'>{t('RESET_PASSWORD', 'Reset password')}</Link>}
                            useLoginByCellphone
                          />
                        )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/password/forgot'>
                    {
                      !auth ? (
                        <ForgotPassword />
                      )
                        : <Redirect to='/' />
                    }
                  </Route>
                  <Route exact path='/password/reset'>
                    Password reset
                  </Route>
                  <Route exact path='/profile'>
                    {auth
                      ? (<Profile userId={user.id} accessToken={user.session.access_token} useChekoutFileds useValidationFileds />)
                      : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/profile/orders'>
                    {auth
                      ? (<MyOrders />)
                      : <Redirect to='/login' />}
                  </Route>
                  <Route exact path='/p/:page'>
                    <Page />
                  </Route>
                  <Route exact path='/search'>
                    {
                      orderStatus.options?.address?.location
                        ? <BusinessesList />
                        : <Redirect to='/home' />
                    }
                  </Route>
                  <Route exact path='/store/:store'>
                    <BusinessProductsList />
                  </Route>
                  <Route exact path='/order/:orderId'>
                    <Order />
                  </Route>
                  <Route exact path='/orders/:orderId'>
                    <OrderDetailsPage />
                  </Route>
                  <Route path='/checkout/:cartUuid?'>
                    <CheckoutPage />
                  </Route>
                  <Route exact path='/pages/:pageSlug'>
                    <Cms />
                  </Route>
                  <Route path='*'>
                    <PageNotFound />
                  </Route>
                </Switch>
                <Footer />
              </ScrollToTop>
            </>
          )
        }
      </ThemeProvider>
    </BrowserRouter>
  )
}

function Page () {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { page } = useParams()

  return (
    <div>
      <h3>Page: {page}</h3>
    </div>
  )
}

function Order () {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { orderId } = useParams()

  return (
    <div>
      <h3>Order ID: {orderId}</h3>
    </div>
  )
}

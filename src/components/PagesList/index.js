import React, { useEffect, useState } from 'react'
import { useApi, useLanguage } from 'ordering-components/_modules/contexts'
import { PagesListContainer } from './styles'

export const PagesList = ({ routes }) => {
  const [ordering] = useApi()
  const [roots, setRoots] = useState(routes)
  const [, t] = useLanguage()

  useEffect(() => {
    getPages()
  }, [])

  const getPages = async () => {
    try {
      const { response } = await ordering.pages().get()
      setRoots([...roots, ...response.data.result])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PagesListContainer>
      <h2>{t('SITEMAP', 'Site Map')}</h2>
      {roots.map((route, i) => (
        <span key={i}>
          <a href={route?.id ? `pages/${route.slug}` : route.slug}>{route.name}</a>
        </span>
      ))}
    </PagesListContainer>
  )
}

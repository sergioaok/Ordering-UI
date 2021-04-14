import React from 'react'
import { Helmet } from 'react-helmet'
import helmetData from '../../helmetdata.json'
import settings from '../../config.json'

export const HelmetTags = (props) => {
  const {
    page
  } = props

  const metaTag = page ? helmetData[page] : helmetData.app
  return (
    <Helmet titleTemplate={!page ? '' : `${settings.app_name} - %s`}>
      <title>{props.helmetTitle || metaTag.title}</title>
      <meta name='description' content={props.description || metaTag.description} />
      <meta name='keywords' content={props.keywords || metaTag.keywords} />
      {props.robots ? (
        <meta name='robots' content={props.robots} />
      ) : (
        metaTag.robots && <meta name='robots' content={metaTag.robots} />
      )}
      {props.canonicalUrl ? (
        <link rel='canonical' href={props.canonicalUrl} />
      ) : (
        metaTag.canonicalUrl && <link rel='canonical' href={metaTag.canonicalUrl} />
      )}
    </Helmet>
  )
}

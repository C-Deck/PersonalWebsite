import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import Thumbnail from "../../assets/thumbnail/thumbnail.png"
import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from "../../data/config"

type SEOProps = {
  title?: string
  description?: string
  location?: string
}

export const SEO: FunctionComponent<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  location = ``,
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}/?ref=clintjdecker.com`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={social.facebook} />

      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}

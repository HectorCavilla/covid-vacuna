// global SEO config
const title = 'Estado y progreso vacunación COVID-19 México 2021'
const description =
  'Consulta el estado y progreso de la vacunación del COVID-19 de forma diaria según datos del gobierno de México.'

const SEO = {
  title,
  description,
  canonical: 'https://covid-vacuna-mx.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://covid-vacuna-mx.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://covid-vacuna-mx.vercel.app/og.png',
        alt: title,
        width: 1200,
        height: 627
      }
    ]
  },
  twitter: {
    handle: '@midudev',
    site: '@midudev',
    cardType: 'summary_large_image'
  }
}

export default SEO

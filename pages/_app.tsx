import '../styles/globals.css'
import '../styles/slick-slider.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

const GA_MEASUREMENT_ID = 'G-EJR9X2H4D5'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics -->*/}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

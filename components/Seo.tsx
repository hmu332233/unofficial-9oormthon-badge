import Head from 'next/head';
import Script from 'next/script';

type Props = {};

function Seo({}: Props) {
  return (
    <>
      <Head>
        <title>9oormthon Badge</title>
        <meta
          name="description"
          content="4기 구름톤을 위한 한정판 배지입니다!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="9oormthon Badge" />
        <meta
          property="og:description"
          content="4기 구름톤을 위한 한정판 배지입니다!"
        />
        <meta property="og:url" content="https://9oormthon-badge.minung.dev/" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2SFZ0YQ5P9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2SFZ0YQ5P9');
        `}
      </Script>
    </>
  );
}

export default Seo;

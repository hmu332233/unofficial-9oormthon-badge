import Head from 'next/head';

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
    </>
  );
}

export default Seo;

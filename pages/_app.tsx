import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

import './style.scss';

import 'react-toastify/dist/ReactToastify.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window === undefined) {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <Head>
          <meta property="og:image" content="/images/thumbnail.png" />
          <meta property="og:title" content="술담화 2022 마셔보고서" />
          <meta property="og:description" content="술담화에서 보낸 2022년을 추억해봐요" />
          <link rel="icon" type="image/png" href="/icon/favicon-196.png" sizes="196x196"></link>
        </Head>
        <Component {...pageProps} />
        <ToastContainer limit={3} />
      </RecoilRoot>
    );
  }
}

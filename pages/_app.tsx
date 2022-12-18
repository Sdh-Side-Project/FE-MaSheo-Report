import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

import './style.scss';

import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window === undefined) {
    return <></>;
  } else {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
        <ToastContainer limit={3} />
      </RecoilRoot>
    );
  }
}

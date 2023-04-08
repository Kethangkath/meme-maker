import React from 'react';
import Navbar from '@/components/navbar';

import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
      
    </>
  );
}

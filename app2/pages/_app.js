import * as React from 'react';

export default function Layout({Component, pageProps}) {
  console.debug('app2')
  return  <Component {...pageProps}/>
}

import * as React from 'react';

export default function Layout({Component, pageProps}) {
  console.debug('app1')
  return  <Component {...pageProps}/>
}

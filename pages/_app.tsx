import '../styles/globals.css'

import { NextComponentType } from 'next';

export default function MyApp({
  Component,
  pageProps 
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return <Component {...pageProps} />
}

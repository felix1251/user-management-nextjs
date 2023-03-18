import AuthLayout from '@/components/layouts/authLayout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const { meta } = Component
  const layout = meta?.withLayout ? AuthLayout : ((page) => page)

  return layout(
    <>
      <Head>
        <title>{meta?.head}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

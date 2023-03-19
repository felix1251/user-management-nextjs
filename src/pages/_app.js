import { AuthLayout } from '@/templates'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const { meta } = Component
  const layout = meta?.withLayout ? AuthLayout : ((page) => page)

  return layout(
    <>
      <Head>
        <title>{meta?.head || "User Management"}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

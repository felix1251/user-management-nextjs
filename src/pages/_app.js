import AuthLayout from '@/components/layouts/authLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const { meta } = Component
  const layout = meta?.withLayout ? AuthLayout : ((page) => page)

  return layout(<Component {...pageProps} />)
}

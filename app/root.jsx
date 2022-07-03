import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import styles from '~/styles/App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export const meta = () => ({
  charset: 'utf-8',
  title: 'My new blog ',
  viewport: 'width=device-width,initial-scale=1'
})

export function links() {
  return [{
    rel: 'stylesheet',
    href: styles
  }]
}

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar/>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

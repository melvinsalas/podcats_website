import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet"></link>
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>Hecho con ❤ por <a href="https://www.twitter.com/melvinsalas" target="_blank">@melvinsalas</a> desde 🇨🇷</footer>
    </>
  )
}
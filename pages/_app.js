import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <>
        <Head>
          <title>Pet Care App</title>
        </Head>

        <div className="top-bar">
          <div className="nav">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/new">
              <a>Adicionar novo Pet</a>
            </Link>
          </div>

          <img
            id="title"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
            alt="pet care logo"
          ></img>
        </div>
        <div className="grid wrapper">
          <Component {...pageProps} />
        </div>
      </>
    </Provider>
    
  )
}

export default MyApp

import * as React from 'react'
import Head from 'next/head'
import { Heading } from 'grommet';
import Link from './Link';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Black Lives Mastter | DylanAllen.net',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main id="main">
      <header className="container">
        <Heading>BlackLivesMatter</Heading>
      </header>
      <div className="container maincontainer">
        {children}
      </div>
      <footer className="container">
        dylanallen.net | <Link href="https://github.com/DylanAllen/blm">github</Link>
      </footer>
    </main>
  </div>
)

export default Layout

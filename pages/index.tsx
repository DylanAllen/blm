import Layout from '../components/Layout'
import { Nav, Heading } from 'grommet';
import Link from '../components/Link';

const IndexPage = () => (
  <Layout>
    <Nav>
      <Heading level={2}>Organizations</Heading>
      <Link href="https://blacklivesmatter.com/">
        Black Lives Matter
      </Link>
      <Link href="https://www.naacp.org/">
        NAACP
      </Link>
      <Heading level={2}>Books</Heading>
      <span>
        <Link href="https://www.ibramxkendi.com/how-to-be-an-antiracist-1">
          How to be an Anti-Racist
        </Link>
        <em> by Ibram X. Kendi</em>
      </span>
      <span>
        <Link href="https://www.ibramxkendi.com/stamped">
          Stamped from the Beginning: The Definitive History of Racist Ideas in America 
        </Link>
        <em> by Ibram X. Kendi</em>
      </span>
    </Nav>
    
  </Layout>
)

export default IndexPage

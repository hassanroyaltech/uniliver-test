import { SearchBox, InstantSearch, Hits } from 'react-instantsearch-dom'
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import ProtectedComponent from '../components/Protected'
import Layout from '../components/Layout'
import Hit from '../components/Hit'
import { typesenseInstantsearchAdapter } from '../lib/typesense'

function Search() {
  const { searchClient } = typesenseInstantsearchAdapter
  return (
    <Layout title="Explore the Library">
      <ProtectedComponent>
        <Card maxW={500} m="auto">
          <CardHeader>
            <Heading>Book Library</Heading>
          </CardHeader>
          <CardBody>
            <InstantSearch indexName="books" searchClient={searchClient}>
              <SearchBox className="input-charka" />
              <Hits hitComponent={Hit} />
            </InstantSearch>
          </CardBody>
        </Card>
      </ProtectedComponent>
    </Layout>
  )
}
export default Search

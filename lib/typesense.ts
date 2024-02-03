import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter'

export const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: 'YKYGber6Trh8yBb2WpQVrAcpsa5f0qdO',
    nodes: [
      {
        host: 'gkempwvbsx28nti0p-1.a1.typesense.net',
        port: 443,
        protocol: 'https',
      },
    ],

    cacheSearchResultsForSeconds: 2 * 60,
  },
  additionalSearchParameters: {
    query_by: 'title,authors',
    query_by_weights: '4,1',
  },
})

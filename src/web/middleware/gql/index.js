import gql from 'graphql-tag'

const allSections = gql`query allSections($status: String!) {
    allSections(status: $status) {
      key
      name
      description
      path
      isNav
    }
  }
`

const documentListBySection = gql`query documentListBySection($status: String!, $section: String!) {
    documentListBySection(status: $status, section: $section) {
      key
      name
      description
      document {
        key
        name
        description
        path
      }
    }
  }`

const documentByPath = gql`query documentByPath($path: String!) {
    documentByPath(path: $path) {
      name
      description
      frontmatter
      markdown
    }
  }`

export { allSections, documentListBySection, documentByPath }

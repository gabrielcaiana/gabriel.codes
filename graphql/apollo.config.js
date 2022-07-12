export default ({ $config }) => {
  return {
    httpEndpoint: `${$config.apiURL}/graphql`,
  }
}

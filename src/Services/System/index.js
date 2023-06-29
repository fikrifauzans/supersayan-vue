class System {

  // API CONFIG
  apiRoot() {

    if (window.location.origin == 'http://localhost:8080') return 'http://localhost:8090/'
    return 'https://yubi-api.beytcoffeetigabelas.com/'
  }
  apiTimeout() { return 10000 }

  developerCred() {
    return { username: 'dev.maghfirah', password: 'maghfirah2118' }
  }

  apiVersion() {
    return 'api/v1/'
  }




  storageUrl(suffix = '') {
    return this.apiRoot() + 'storage/' + suffix
  }
}

export default System

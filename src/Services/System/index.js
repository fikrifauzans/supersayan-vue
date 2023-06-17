class System {

  // API CONFIG
  apiRoot() {

    if (window.location.origin == 'http://localhost:8080') return 'http://localhost:8090/'
    // else if (window.location.origin == 'https://cms.pregnancy-learning.com') 
  }
  apiTimeout() { return 10000 }

  developerCred() {
    return { username: 'dev.maghfirah', password: 'maghfirah2118' }
  }

  apiVersion() {
    return 'api/v1/'
  }

  midtransClientKey() {
    return 'SB-Mid-client-BI85k5nvzyemnk7n'
  }

  midtransUrl() {
    return 'https://app.sandbox.midtrans.com/snap/snap.js'
  }

  apiUms() {
    return 'https://api.ums.dutabaitullah.com/api/v1/en/'
  }

  storageUrl(suffix = '') {
    return this.apiRoot() + 'storage/' + suffix
  }
}

export default System

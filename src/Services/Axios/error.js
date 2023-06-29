

export default {
  errorMessage(status, error) {
    if (status == 422) {
      let objectKey = (error.response.data.errors);
      for (const key in objectKey) {
        this.Handle.errorMessage(objectKey[key])
      }
    } else if (status == 401) {
      this.Handle.errorMessage(error.response.data.Message);
    } else if (status == 403) {
      window.location = '/403'
    } else if (status == 500) {
      this.Handle.clearAllLS()
      window.location = '/login'   }
    this.Handle.loadingStop()
  }
}

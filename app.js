new Vue({
  el: '#app',
  data: {
    searchMode: false,
    nameMode: false,
    cityMode: false,
    countryMode: false,
    emailAddressMode: false,
    jobMode: false,
    searchValue:""
  },
  methods: {
    checkSearch: function(event) {
      this.searchValue = event.target.value;
    }

  }
})
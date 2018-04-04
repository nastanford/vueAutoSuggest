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
    checkSearch: function() {
      //alert("search Value = "+this.searchValue);
      if(this.searchValue.toLowerCase() == 'name')
      {
        this.nameMode=true;
        document.getElementById('name').focus();
        this.test();
      }
      if(this.searchValue.toLowerCase() == 'city')
      {
        this.cityMode=true;
        document.getElementById('city').focus();
      }
      if(this.searchValue.toLowerCase() == 'country')
      {
        this.countryMode=true;
        document.getElementById('country').focus();
      }
      if(this.searchValue.toLowerCase() == 'e-mail')
      {
        this.emailAddressMode=true;
        document.getElementById('emailAddress').focus();
      }
      if(this.searchValue.toLowerCase() == 'job')
      {
        this.jobMode=true;
        document.getElementById('job').focus();
      }

    },
    test: function() {
      //alert('a');
      this.searchValue ="";
    }

  }
})
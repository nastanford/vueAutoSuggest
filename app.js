new Vue({
  el: '#app',
  data: {
    searchMode: false,
    SearchParams: [
      {  key: "name", name: "Name", placeholder: "Name..."}, 
      {  key: "city", name: "City", placeholder: "City...", restrictToSuggestedValues: true, suggestedValues: ['Boston', 'New York','Dallas'] }, 
      {  key: "country", name: "Cuntry", placeholder: "Country..."}, 
      {  key: "emailAddress", name: "E-Mail", placeholder: "E-Mail..."}, 
      {  key: "job", name: "Job", placeholder: "Job..."} 
    ]
  }
  // ,
  // template: `
  // <div><h2>Search</h2>
  //   Search: <input name="search" @keydown="searchMode = true">
  //   <div v-if="searchMode">Parameter Suggestions: Name, City, Country, E-Mail, Job</div>

  //   <button>Search</button>
  // </div>
  // `
})
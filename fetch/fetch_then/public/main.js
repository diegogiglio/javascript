//reach API
const url = 'https://api.datamuse.com/words'
const param = '?sl='

//const fetch = require('node-fetch');
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const content = document.querySelector('#responseField');


//ajax
debugger;
const getSuggestions = () => {
    const myWord = inputField.value
    const endpoint = `${url}${param}${myWord}`
    
fetch(endpoint, {cache: 'no-cache'}).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('An Error Happened')
    }, networkError => {
        console.log(networkError.message)}
    
).then(jsonResponse => {
     renderResponse(jsonResponse)
})
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
  };

submit.addEventListener('click', displaySuggestions)
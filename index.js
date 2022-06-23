//M.inimum V.iable P.roduct Deliverables

// User CHANGEs search input field and is given a few possibly related results

// fetch("http://api.quotable.io/random")
// .then((res)=>res.json())
// .then((randomQuote) => {
//console.log(quotes)

let random = document.querySelector("#random-click");
random.addEventListener("click", () => {
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((randomQuote) => {
      let quoteSpace = document.getElementById("author");
      let quote = randomQuote.content 
      let quoteAuthor = randomQuote.author
      console.log(quoteAuthor)
      console.log(randomQuote);
      quoteSpace.innerText = `"${quote}" by ${quoteAuthor}`;
    });
});

let form = document.querySelector("form");
//console.log(form);
form.addEventListener("input", (event) => {
  event.preventDefault();
  let searchResult = document.querySelector("#search-bar").value.toLowerCase();
  //console.log(searchResult)
  let target = document.querySelector("#searchResultArea");
  target.innerText=""
  if (searchResult.innerText = undefined) {
       console.log("undefined")
    } else if (searchResult.innerText = "") {
        console.log("empty")
    } else { 
        fetch(`http://api.quotable.io/search/quotes?query=${searchResult}&fields=author&limit=3`)
        .then((res) => res.json())
        .then((searchData) => {
            //console.log(searchData);
            searchData.results.forEach(quote =>{
                //console.log(quote)
                
                let quotes = document.createElement("p");
    
                quotes.innerText = `"${quote.content}" by ${quote.author}`
                
                target.append(quotes);
            })
        });
    }
});

//console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let searchResult = document.querySelector("#search-bar").value.toLowerCase();
  //console.log(searchResult)
  let target = document.querySelector("#searchResultArea")
//   const filterAuthorNames = 
  target.innerText=""
  fetch(
    `http://api.quotable.io/search/quotes?query=${searchResult}&fields=author`
  )
    .then((res) => res.json())
    .then((searchData) => {
        //console.log(searchData);
        searchData.results.forEach(quote =>{
            //console.log(quote)
            let quotes = document.createElement("ul");

            quotes.innerText = `"${quote.content}" by ${quote.author}`
            
        target.append(quotes);
        })
    });
});

//New changes



//is given extensive list of results
//If photo is availible then display
//else MEGAMIND "No Photo / Not Mario"
//Author Wikipedia
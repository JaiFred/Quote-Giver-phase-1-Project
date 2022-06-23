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
      let quoteSpace = document.getElementById("quote-container");
      let nameSpace = document.getElementById("name-container");
      let authorImage = document.getElementById("author-image");
      let quote = randomQuote.content 
      let quoteAuthor = randomQuote.author
      console.log(quoteAuthor)
      console.log(randomQuote);
      authorImage.src= "./src/NoImages-02.png"
      quoteSpace.innerText = `"${quote}"`;
      nameSpace.innerText = `~ ${quoteAuthor}`;
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
  if (searchResult === "") {
       console.log("undefined")
    } else { 
        fetch(`http://api.quotable.io/search/quotes?query=${searchResult}&fields=author&limit=3`)
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

function moveDABOY(){
let daBoy = document.getElementById("Socrates")
daBoy.style.top = `${getRandomArbitrary(200,800)}px`
daBoy.style.left = `${getRandomArbitrary(200,1000)}px`
daBoy.style.opacity = "100%"
daBoy.style.width= "75%"
console.log(daBoy.style.top)

}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//is given extensive list of results
//If photo is availible then display
//else MEGAMIND "No Photo / Not Mario"
//Author Wikipedia

let search=document.getElementById("search")

let spin=document.getElementById("loading")
let resultHtml=document.getElementById("searchresults")
let text="";
function createAndAppendHtml(result){
    
    let {title,link,description}=result
    
    let titletag=document.createElement("a")
    titletag.href=link
    titletag.textContent=title
    titletag.target="_blank"
    titletag.classList.add("saya")
    resultHtml.appendChild(titletag)


    let breakEl=document.createElement("br")
    resultHtml.appendChild(breakEl)
    
    
    let linktag=document.createElement("a")
    linktag.href=link
    linktag.textContent=link
    linktag.target="_blank"
    linktag.classList.add("saya1")
    resultHtml.appendChild(linktag)
    
    
    let breakElpara=document.createElement("br")
    resultHtml.appendChild(breakElpara)
    

    
    let paratag=document.createElement("p")
    paratag.textContent=description
    paratag.classList.add("para")
    resultHtml.appendChild(paratag)
}
function displayResults(resultArray){
   
    resultHtml.textContent=""
    for (let result of resultArray){
    createAndAppendHtml(result);}
}

function searchWord(e){
    if (e.key==="Enter"){
       
        
       text=search.value
    
    let url="https://apis.ccbp.in/wiki-search?search="+text;
    
    let option={
        method:"GET",
}

console.log(url);
fetch(url,option)

.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log(data)
    let {search_results}=data
    
    displayResults(search_results)
})}
}


search.addEventListener("keydown",searchWord)
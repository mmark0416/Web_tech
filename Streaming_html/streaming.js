const API_KEY = "";

async function search() {
    const inputElement = document.getElementById("searchTerm");
    const response = await fetch(`apiKey=${API_KEY}`);
    const responseBody = await response.json();
    const titles = responseBody.title_results;
    if(titles){
       fillSearchResultsList(titles); 
    }

function fillSearchResultsList(titles){
    const fillSearchResultsElement = document.getElementById("searchResults");
    titles.forEach(title => {
        const listItem = document.createElement("li");
        listItem.textContent = title.name;
        fillSearchResultsElement.append(listItem);
    });
}
}

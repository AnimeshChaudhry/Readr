function bookSearch() {
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""
  console.log(search)

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",

    success: function(data) {
      for (i = 0; i < data.items.length; i++) {
        results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + " by " + data.items[i].volumeInfo.authors + "</h2>"
        results.innerHTML += "<h3>" + "Partial Description: " + data.items[i].searchInfo.textSnippet + "</h3>"
        results.innerHTML += "<h4>" + "Web Reader Link: " + data.items[i].accessInfo.webReaderLink + "</h3>"
        results.innerHTML += "<h4>" + "Purchase Link: " + data.items[i].saleInfo.buyLink + "</h3><br>"

      }
      console.log(data)
    },
    type: 'GET'
  });
}
document.getElementById('button').addEventListener('click', bookSearch, false)

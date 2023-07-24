
const booksList = [
    { title: "The Hunger Games", author: "suzanne collins", year: 2018 },
    { title: "To Kill a Mockingbird", author: "harper lee", year: 2010 },
    { title: "the Catcher in the Rye", author: "j.d. salinger", year: 2010 },
]


function logTitles(titles){
    titles.sort()
    console.log(titles.join(" "));
}

function extractTitles(booksList, callback){
  const title = booksList.map((book) => book.title)
  callback (title)
}

extractTitles(booksList, logTitles)




const books = [
    { title: "The Hunger Games", author: "suzanne collins", year: 2018 },
    { title: "To Kill a Mockingbird", author: "harper lee", year: 2010 },
    { title: "1984", author: "george orwell", publication_year: 1949 },
    { title: "The Catcher in the Rye", author: "j.d. salinger", year: 2010 },
    { title: "The Great Gatsby", author: "f. scott fitzgerald", year: 2015 },
    { title: "The Girl with the Dragon Tattoo", author: "stieg larsson", year: 2010 },
  ];

  const bookFilter = books.filter ((book) => book.year > 2010).map ((book) => {
        return {
            title:book.title,
            author:book.author.split(' ').map ((word) => word.charAt ('0').toUpperCase () + word.slice ("1")).join (' '),
            year: book.year
        }
  })
  console.log(bookFilter);
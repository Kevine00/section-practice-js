// Create an array of book objects
let books = [
    { title: 'Speaking JavaScript', author: 'Axel Rauschmayer', pages: 460 },
    { title: 'Programming JavaScript Applications', author: 'Eric Elliott', pages: 254 },
    { title: 'Understanding ECMAScript 6', author: 'Nicholas C. Zakas', pages: 352 }
  ];
  
  // Add a new book to the collection
  let newBook = { title: 'Learning JavaScript Design Patterns', author: 'Addy Osmani', pages: 254 };
  books.push(newBook);
  
  
  
  //  the sum of pages
  let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
  console.log('Total pages in the collection:', totalPages);
  
// Create an array of objects representing the books
let books = [
    { title: "Speaking JavaScript", author: "Axel Rauschmayer", pages: 460 },
    { title: "Programming JavaScript Applications", author: "Eric Elliott", pages: 254 },
    { title: "Understanding ECMAScript 6", author: "Nicholas C. Zakas", pages: 352 }
  ];
  
  // Add a new book to the collection
  let newBook = { title: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages: 254 };
  books.push(newBook);
  
  // Display the length of the array
  console.log("Number of books:", books.length);
  
  // Display all the book names in the collection
  console.log("Book names in the collection:");
  books.forEach(book => {
    console.log(book.title);
  });

  let firstbook = books.shift();
   console.log(books);
   console.log("Number of books:", books.length);

   
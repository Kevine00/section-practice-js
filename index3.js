const library = [
    {
      title: "Speaking JavaScript",
      author: "Axel Rauschmayer",
      pages: 460
    },
    {
      title: "Programming JavaScript Applications",
      author: "Eric Elliott",
      pages: 254
    },
    {
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      pages: 352
    }
  ];
  
  // Now you can access each book's information like this:
  console.log(library[0]); 
  console.log(library[1]); 
  console.log(library[2]); 

  library[2]={
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 254
  }
  console.log(library);
  
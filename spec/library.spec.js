const Library = require("../src/library")
const Book = require("../src/book")

describe("library", () => {
    it("adds a book to the library", () => {
      // set up
      const library = new Library ()
      const bookOne = new Book("The Lord of the Rings - Fellowship of the Ring", "JR Tolkein", "Fantasy")
      const bookTwo = new Book("How to make Friends and Influence People", "Dale Carnegie", "Self Help")
      const expected = [bookOne, bookTwo]
  
      // execute
      library.add(bookOne)
      const result = library.add(bookTwo)
  
      // verify
      expect(result).toEqual(expected)
    })

    it("gets a list of all books", () => {
      // set up
      const library = new Library ()
      const bookOne = new Book("The Lord of the Rings - Fellowship of the Ring", "JR Tolkein", "Fantasy")
      const bookTwo = new Book("How to make Friends and Influence People", "Dale Carnegie", "Self Help")
      const expected = [bookOne, bookTwo]
  
      // execute
      library.add(bookOne)
      library.add(bookTwo)
      const result = library.listOfBooks() 
  
      // verify
      expect(result).toEqual(expected)
    })

    it("gets books with a specific genre", () => {
      // set up
      const library = new Library ()
      const bookOne = new Book("The Lord of the Rings - Fellowship of the Ring", "JR Tolkein", "Fantasy")
      const bookTwo = new Book("How to make Friends and Influence People", "Dale Carnegie", "Self Help")
      const expected = [bookOne]
  
      // execute
      library.add(bookOne)
      library.add(bookTwo)
      const result = library.searchByGenre("Fantasy")
  
      // verify
      expect(result).toEqual(expected)
    })

    it("gets books written by author", () => {
      // set up
      const library = new Library ()
      const bookOne = new Book("The Lord of the Rings - Fellowship of the Ring", "JR Tolkein", "Fantasy")
      const bookTwo = new Book("How to make Friends and Influence People", "Dale Carnegie", "Self Help")
      const expected = [bookTwo]
  
      // execute
      library.add(bookOne)
      library.add(bookTwo)
      const result = library.searchByAuthor("Dale Carnegie")
  
      // verify
      expect(result).toEqual(expected)
    })

    it("removes a book to the library", () => {
      // set up
      const library = new Library ()
      const bookOne = new Book("The Lord of the Rings - Fellowship of the Ring", "JR Tolkein", "Fantasy", 1)
      const bookTwo = new Book("How to make Friends and Influence People", "Dale Carnegie", "Self Help", 2)
      const expected = [bookTwo]
  
      // execute
      library.add(bookOne)
      library.add(bookTwo)
      const result = library.remove(1)
  
      // verify
      expect(result).toEqual(expected)
    })

    it("update the genre of a book", () => {
      // set up
      const library = new Library ()
      const bookOne = new Book("The Lord of the Rings - Fellowship of the Ring", "JR Tolkein", "Fantasy", 1)
      const bookTwo = new Book("How to win Friends and Influence People", "Dale Carnegie", "Self Help", 2)
      const updatedBookTwo = new Book("How to win Friends and Influence People", "Dale Carnegie", "Non-Fiction", 2)
      const expected = updatedBookTwo
  
      // execute
      library.add(bookOne)
      library.add(bookTwo)
      const result = library.updateGenre("Non-Fiction", 2)
  
      // verify
      expect(result).toEqual(expected)
    })
  })
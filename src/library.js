class Library {
    constructor() {
        this.library =  []
    }
    add(book){
        this.library.push(book)
        return this.library
    }

    remove(book) {
        
    }

    listOfBooks() {
        return this.library
    }

    searchByGenre(genre) {
        let booksWithGenre = []
        for (let i = 0; i < this.library.length; i++) {
            const book = this.library[i]
            if (book.genre === genre){
                booksWithGenre.push(book)
            }
        }
        return booksWithGenre
    }

    searchByAuthor(author) {
        let booksWithAuthor= []
        for (let i = 0; i < this.library.length; i++) {
            const book = this.library[i]
            if (book.author === author){
                booksWithAuthor.push(book)
            }
        }
        return booksWithAuthor
    }

}
module.exports = Library
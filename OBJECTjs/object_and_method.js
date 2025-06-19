const Book = {
    author: 'CHINAO',
    howManybook: 20,
    IsGoodwrite: true ,
    bookreader(){
        console.log('the great author of many book ' )
    }
}
Book.bookreader()
// the call to the method console.log is not necessary because
//  the in the function block it has been display 
console.log(Book.author)
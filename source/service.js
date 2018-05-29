import 'isomorphic-fetch';

let addBook = book => {
    return fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(book)
    })
};

export const service = {
    addBook: addBook
}
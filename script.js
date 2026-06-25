let books = [
    { id: "101", name: "Java Programming", author: "Herbert Schildt" },
    { id: "102", name: "Data Structures", author: "Seymour Lipschutz" },
    { id: "103", name: "DBMS", author: "Raghu Ramakrishnan" }
];

// ADD BOOK
function addBook() {
    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    if (id === "" || name === "" || author === "") {
        alert("Please fill all fields");
        return;
    }

    books.push({ id, name, author });

    alert("Book Added Successfully!");

    document.getElementById("bookId").value = "";
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
}

// SEARCH BOOK
function searchBook() {
    let search = document.getElementById("searchBook").value.toLowerCase();
    let result = document.getElementById("result");

    let found = books.find(book => book.name.toLowerCase() === search);

    if (found) {
        result.innerHTML =
            "📘 Book Found<br>" +
            "ID: " + found.id + "<br>" +
            "Name: " + found.name + "<br>" +
            "Author: " + found.author;
    } else {
        result.innerHTML = "❌ Book not found";
    }
}
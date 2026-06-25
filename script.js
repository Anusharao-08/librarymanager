window.onload = function () {

    let books = [
        ["101","Java Programming","Herbert Schildt"],
        ["102","Data Structures","Seymour Lipschutz"],
        ["103","Database Management System","Raghu Ramakrishnan"],
        ["104","Operating Systems","Galvin"],
        ["105","Computer Networks","Tanenbaum"]
    ];

    let table = document.getElementById("bookTable");

    books.forEach(function(book){

        let row = table.insertRow();

        row.insertCell(0).innerHTML = book[0];
        row.insertCell(1).innerHTML = book[1];
        row.insertCell(2).innerHTML = book[2];
    });
};

function addBook(){

    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    if(id==="" || name==="" || author===""){
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("bookTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = author;

    document.getElementById("bookId").value="";
    document.getElementById("bookName").value="";
    document.getElementById("author").value="";
}
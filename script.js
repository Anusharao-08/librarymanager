<input type="text" id="bookId" placeholder="Book ID">
<input type="text" id="bookName" placeholder="Book Name">
<input type="text" id="author" placeholder="Author">

<button onclick="addBook()">Add Book</button>

<table id="bookTable" border="1">
    <tr>
        <th>Book ID</th>
        <th>Book Name</th>
        <th>Author</th>
    </tr>
</table>

<h2>Search Book</h2>
<input type="text" id="searchBook" placeholder="Enter Book Name">
<button onclick="searchBook()">Search</button>

<p id="result"></p>
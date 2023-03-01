// GET DATA FROM REST(API CALL)

fetch("https://chikanga.pythonanywhere.com/api/books/")
  .then(response => response.json())
  .then(data => {

    console.log(data);
    // Get the paragraph element with ID 'apidata'
    const paragraph = document.getElementById('apidata');
  
    // Set the text content of the paragraph element to the data received
    // paragraph.innerText = JSON.stringify(data);
  
    // Table code

    var table = document.getElementById("mytable");
    var tbody = table.getElementsByTagName('tbody')[0];

    data.forEach(function(item) {

      // slice the year string to eg 2001
      const year = item.date.substring(0, 4);

      var row = document.createElement('tr');
      row.classList.add('text-sm', 'text-gray-600', 'dark:text-gray-200')
      // add table data from each item in the array.column in the json object
      row.innerHTML = '<td>' + item.id + '</td><td>' + item.title + '</td><td>' + item.muridzi + '</td><td>' + item.price + '</td><td>' 
      + item.after_tax + '</td><td>' + year + '</td>' + '</td><td><a href="#" data-id="' + item.id + '">Delete</a></td>';

      tbody.appendChild(row);
      
      // get a element from the row.innerHTML, loop through each element by element length and add event listiner of click
      // then get id using get attribute of item.id from row.innerHTML and then finnally call the deleteItem method passing in id
      var deleteLinks = row.getElementsByTagName('a');
      for (var i = 0; i < deleteLinks.length; i++) {
        deleteLinks[i].addEventListener('click', function(event) {
          event.preventDefault();
          var id = this.getAttribute('data-id');
          deleteItem(id);
        });
      }
    });

  })
  .catch(error => {
    // Handle any errors that occurred
    console.error(error);
  });

// DELETE DATA IN REST(API CALL)

// Method to delete an item through the API given the id, the method is called in the foreach loop
function deleteItem(id) {
  fetch('https://chikanga.pythonanywhere.com/api/books/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // if response was ok reload page
    location.reload();
  })
  .catch(error => console.error('An error occurred on delete:', error.message));
}

// POST DATA TO REST(API CALL)

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const url = 'https://chikanga.pythonanywhere.com/api/books/';
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    // Handle response from server
    console.log(response);
    if (!response.ok) {
      throw new Error('Post not successful');
    }
    // if response was ok reload page
    location.reload();
  })
  .catch(error => {
    // Handle errors
    console.error(error.message)
  });
});




  // SCROLL

// Get the table element
// const table = document.getElementById('table');

// Add a class to the table to enable custom scrollbar
// table.classList.add('overflow-y-scroll', 'scrollbar-thin', 'scrollbar-thumb-blue-500', 'scrollbar-track-gray-100');

// SCROLL

// Get the table element
const table = document.querySelector('.table');

// Add a class to the table to enable custom scrollbar
table.classList.add('overflow-y-scroll', 'scrollbar-thin', 'scrollbar-thumb-blue-500', 'scrollbar-track-gray-100');


// DISPLAYING DATA AT REST(API CALL)

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://chikanga.pythonanywhere.com/api/books/');
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    // Do something with the data returned by the API
    console.log(data);
    const paragraph = document.getElementById('apidata');
  
    // Set the text content of the paragraph element to the data received
    paragraph.innerText = JSON.stringify(data);
    
  } else {
    console.log('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();

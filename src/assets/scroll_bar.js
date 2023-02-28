// SCROLL

// Get the table element
const table = document.querySelector('.table');

// Add a class to the table to enable custom scrollbar
table.classList.add('overflow-y-scroll', 'scrollbar-thin', 'scrollbar-thumb-blue-500', 'scrollbar-track-gray-100');


// DISPLAYING DATA AT REST(API CALL)

fetch('https://chikanga.pythonanywhere.com/api/books/')
.then(response => response.json())
.then(data => {
    console.log(data);
  // Create a new paragraph element
  const paragraph = document.getElementById('apidata');
  
  // Set the text content of the paragraph element to the data received
//   paragraph.textContent = JSON.stringify(data);
  paragraph.innerText = JSON.stringify(data);
  
})
.catch(error => {
  // Handle any errors that occurred
  console.error(error);
});

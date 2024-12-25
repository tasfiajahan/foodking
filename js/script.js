const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        btn.classList.toggle('active');
        
        if (btn.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
// script.js
function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');
    
    datetimeElement.textContent = now.toLocaleString(); // Adjust the format as needed
  }
  
  // Call updateDateTime function initially to set the current date and time
  updateDateTime();
  
  // Update the time every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);
// Get all question elements
const questions = document.querySelectorAll('.question');

// Add click event listener to each question
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the 'open' class to expand/collapse the answer
        question.classList.toggle('open');

        // Select the corresponding answer element
        const answer = question.nextElementSibling;

        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
  
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();  // Prevents the default form submission behavior
    
    // Display an alert popup
    alert("Form submitted successfully!");
    
    // You can clear the form fields after submission, if necessary
    this.reset();
  });
  
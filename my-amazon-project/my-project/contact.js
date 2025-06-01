function handleSubmit(event) {
            event.preventDefault(); // Prevent the form from reloading the page

            // Get input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Basic validation (optional, since required fields are in the form)
            if (!name || !email || !message) {
                alert("All fields are required!");
                return false;
            }

            // Display Thank You Message
            document.getElementById("contactForm").style.display = "none"; // Hide the form
            const thankYouDiv = document.getElementById("thankYouMessage");
            thankYouDiv.style.display = "block";
            document.getElementById("userName").innerText = name;

            return false; // Prevent actual form submission
        }
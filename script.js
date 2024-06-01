document
    .getElementById("new-quote-button")
    .addEventListener("click", generateQuote);

function generateQuote() {
    fetch("quotes.json")
        .then((response) => response.json())
        .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex];
            document.getElementById("quote-text").textContent =
                `"${quote.quote}"`;
            document.getElementById("quote-author").textContent =
                `- ${quote.author}`;
        })
        .catch((error) => {
            console.error("Error fetching the quotes:", error);
            document.getElementById("quote-text").textContent =
                "An error occurred while fetching the quotes.";
            document.getElementById("quote-author").textContent = "";
        });
}

// Generate an initial quote on page load
generateQuote();

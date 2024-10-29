let stack = document.querySelector(".stack");
let shuffleButton = document.getElementById("shuffle-button");

// Initial reverse order of cards
[...stack.children].reverse().forEach(i => stack.append(i));

// Event listener for shuffle button
shuffleButton.addEventListener("click", () => shuffleCards(5));

function shuffleCards(times) {
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            let card = document.querySelector(".card:last-child");
            card.style.animation = "swap 400ms forwards";

            setTimeout(() => {
                card.style.animation = "";
                stack.prepend(card);
            }, 400);
        }, i * 500); // Add delay for each shuffle
    }
}
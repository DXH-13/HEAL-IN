const cards = document.querySelectorAll('.card');
const shuffleSpreadButton = document.getElementById('shuffle-spread-button');
const stack = document.querySelector('.stack');
let isSpread = false;

// Ban đầu chỉ hiện 3 lá bài cuối
stack.classList.add('folded');

[...stack.children].reverse().forEach(i => stack.append(i));

// Define the initial shuffle event handler
function shuffleHandler() {
    shuffleCards(5);
}

shuffleSpreadButton.addEventListener("click", shuffleHandler);

function shuffleCards(times) {
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            let card = document.querySelector(".card:last-child");
            card.style.animation = "swap 400ms ease-in-out forwards";

            setTimeout(() => {
                card.style.animation = "";
            }, 420);

            // When the last shuffle is done, change the button text
            if (i === times - 1) {
                setTimeout(() => {
                    shuffleSpreadButton.textContent = "Trải bài";

                    // Remove the shuffle event listener
                    shuffleSpreadButton.removeEventListener('click', shuffleHandler);

                    // Add the event listener for spreading the cards
                    shuffleSpreadButton.addEventListener('click', spreadCards);
                }, 420);
            }
        }, i * 480); // Add delay for each shuffle
    }
}

function spreadCards() {
    if (!isSpread) {
        cards.forEach(card => {
            card.classList.add('spread'); // Xòe bài
        });
        shuffleSpreadButton.classList.add('spread'); 
        isSpread = true;
    }
}

cards.forEach(card => {
    card.addEventListener('click', function () {
        if (isSpread) {
            // Tìm lá bài đang flipped
            const flippedCard = document.querySelector('.card.flipped');

            // Nếu có lá bài flipped và không phải là lá bài hiện tại
            if (flippedCard && flippedCard !== this) {
                // Xóa class flipped và loại bỏ lá bài khỏi DOM
                flippedCard.classList.remove('active', 'flipped');
                flippedCard.remove(); // Loại bỏ lá bài khỏi danh sách
            }

            // Lật lá bài được click
            this.classList.add('active', 'flipped');
        }
    });
});


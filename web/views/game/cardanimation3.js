const cards = document.querySelectorAll('.card');
const spreadButton = document.getElementById('spreadButton');
let isSpread = false;

spreadButton.addEventListener('click', function () {
    if (!isSpread) {
        cards.forEach(card => {
            card.classList.add('spread'); // Xòe bài
        });
        spreadButton.classList.add('spread'); // Di chuyển button sang phải khi xòe bài
        spreadButton.textContent = 'Thu bài'; // Đổi chữ thành "Thu bài"
        isSpread = true;
    } else {
        cards.forEach(card => {
            card.classList.remove('spread'); // Thu bài lại
            card.classList.remove('flipped'); // Đảm bảo lá bài không bị lật
            card.classList.remove('active');
        });
        spreadButton.classList.remove('spread'); // Di chuyển button về lại bên trái khi thu bài
        spreadButton.textContent = 'Xòe bài'; // Đổi chữ thành "Xòe bài"
        isSpread = false;
    }
});

cards.forEach(card => {
    card.addEventListener('click', function () {
        if (isSpread) {
            cards.forEach(c => {
                c.classList.remove('active');
                c.classList.remove('flipped');
            });

            this.classList.add('active');
            this.classList.add('flipped');
        }
    });
});

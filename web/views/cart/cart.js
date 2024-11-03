const scrollButton = document.querySelector('.scroll-up-button');

// Khi người dùng cuộn trang, gọi hàm kiểm tra
window.onscroll = function() {
    if (window.scrollY > 300) {  // Nếu người dùng cuộn xuống quá 300px
        scrollButton.classList.add('show');  // Thêm lớp 'show' để hiện nút
    } else {
        scrollButton.classList.remove('show');  // Loại bỏ lớp 'show' để ẩn nút
    }
};

// Cuộn lên đầu trang khi nhấn nút
scrollButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Cuộn mượt
    });
});
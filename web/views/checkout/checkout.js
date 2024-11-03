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


const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const options = dropdown.querySelectorAll("div");

// Hiển thị dropdown khi người dùng nhấp vào ô tìm kiếm
searchInput.addEventListener("focus", () => {
  dropdown.classList.remove("hidden");
});

// Tìm kiếm tùy chọn khi người dùng nhập
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  
  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    option.classList.toggle("hidden", !text.includes(filter));
  });
});

// Cập nhật lựa chọn khi nhấp vào một tùy chọn
options.forEach(option => {
  option.addEventListener("click", () => {
    searchInput.value = option.textContent;
    dropdown.classList.add("hidden");
  });
});

// Ẩn dropdown khi nhấp ngoài vùng dropdown
document.addEventListener("click", (event) => {
  if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

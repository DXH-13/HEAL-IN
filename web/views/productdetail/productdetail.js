const scrollButton = document.querySelector('.scroll-up-button');

// Khi người dùng cuộn trang, gọi hàm kiểm tra
window.onscroll = function () {
    if (window.scrollY > 300) {  // Nếu người dùng cuộn xuống quá 300px
        scrollButton.classList.add('show');  // Thêm lớp 'show' để hiện nút
    } else {
        scrollButton.classList.remove('show');  // Loại bỏ lớp 'show' để ẩn nút
    }
};

// Cuộn lên đầu trang khi nhấn nút
scrollButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Cuộn mượt
    });
});

// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" bg-gray-900 text-white", " bg-white text-gray-500");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " bg-gray-900 text-white";
// }


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");  // Loại bỏ lớp active khỏi các nút khác
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");  // Thêm lớp active vào nút đang được chọn
}

function changeMainImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.classList.add("fade-out");

    setTimeout(() => {
        mainImage.src = thumbnail.src;
        mainImage.classList.remove("fade-out");
    }, 200); // Đợi 0.5 giây cho hiệu ứng "fade-out" trước khi thay đổi ảnh
}


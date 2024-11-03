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

    // Kiểm tra nếu ảnh chính đang hiển thị là ảnh được nhấp vào
    if (mainImage.src === thumbnail.src) return;

    mainImage.classList.add("fade-out");

    setTimeout(() => {
        mainImage.src = thumbnail.src;
        mainImage.classList.remove("fade-out");
    }, 200); // Đợi 0.2 giây cho hiệu ứng "fade-out" trước khi thay đổi ảnh
}

/////////
let isZoomed = false;

function openFullScreen() {
    const mainImage = document.getElementById("mainImage");
    const overlay = document.getElementById("overlay");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = mainImage.src;
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}
function closeFullScreen(event) {
    const overlay = document.getElementById("overlay");
    
    // Kiểm tra nếu nhấp vào overlay hoặc nút đóng
    if (event.target === overlay || event.currentTarget.id === "closeBtn") {
        // Nếu đang ở chế độ toàn màn hình, thoát ra
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        overlay.classList.add("hidden");
        document.body.style.overflow = "";
        resetZoom();
    }
}

// Attach the event listener to the close button
document.getElementById("closeBtn").addEventListener("click", closeFullScreen);



function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function resetZoom() {
    const fullImage = document.getElementById("fullImage");
    isZoomed = false;
    fullImage.classList.remove("zoomed");
    fullImage.style.transformOrigin = "center"; 
    fullImage.style.transform = "scale(1)"; 
}

//////

let swiper; // Khai báo biến swiper toàn cục

function openFullScreen() {
    const mainImage = document.getElementById("mainImage");
    const overlay = document.getElementById("overlay");
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    
    // Làm sạch các slide cũ
    swiperWrapper.innerHTML = '';

    // Tạo slide cho hình ảnh chính và các thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    const allImages = [mainImage.src, ...Array.from(thumbnails).map(thumbnail => thumbnail.src)];

    allImages.forEach(src => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        const img = document.createElement('img');
        img.classList.add('max-w-full', 'max-h-full', 'object-contain');
        img.src = src;
        slide.appendChild(img);
        swiperWrapper.appendChild(slide);
    });

    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Khởi tạo Swiper nếu chưa khởi tạo
    if (!swiper) {
        swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true, // Nếu bạn muốn lặp lại các slide
        });
    } else {
        swiper.update(); // Cập nhật swiper nếu đã khởi tạo
    }
}




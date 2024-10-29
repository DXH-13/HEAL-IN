const images = document.getElementById('carousel-images');
const imageElements = images.querySelectorAll('img');
const dotsContainer = document.getElementById('carousel-dots');
const imagesCount = imageElements.length;
let index = 0;
let intervalId;

// Thêm dots để điều hướng các slide
for (let i = 0; i < imagesCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => setCurrentSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');
dots[index].classList.add('active');
imageElements[index].classList.add('active');

function updateCarousel() {
    imageElements.forEach((img, i) => {
        // Xóa bỏ class active và zoom của tất cả ảnh
        img.classList.remove('active', 'zoom');
        
        if (i === index) {
            // Thêm class active và zoom cho ảnh mới
            img.classList.add('active', 'zoom');
        }
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function setCurrentSlide(i) {
    index = i;
    updateCarousel();
    resetInterval();
}

function nextSlide() {
    index = (index + 1) % imagesCount;
    updateCarousel();
    resetInterval();
}

function prevSlide() {
    index = (index - 1 + imagesCount) % imagesCount;
    updateCarousel();
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 8000); 
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

resetInterval();

window.onload = function () {
    updateCarousel();
};

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Mở mobile-menu và overlay khi nhấn hamburger button
mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('show');
});

// Đóng mobile-menu và overlay khi nhấn vào overlay
overlay.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('show');
});

// Đóng mobile-menu khi nhấn ra ngoài menu
document.addEventListener('click', function (event) {
    // Kiểm tra nếu bấm ngoài mobile menu và hamburger button
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    }
});


// hover button
// Lấy phần tử nút scroll lên
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


// EVENT
const container = document.getElementById('carousel-container');
const cardWidth = container.querySelector('.carousel-card').offsetWidth + 16;
let scrollPosition = 0;

document.getElementById('event-next').addEventListener('click', () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (scrollPosition < maxScroll) {
        scrollPosition += cardWidth; // Scroll by 1 card
        container.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

document.getElementById('event-prev').addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth; // Scroll back by 1 card
        container.style.transform = `translateX(-${scrollPosition}px)`;
    }
});
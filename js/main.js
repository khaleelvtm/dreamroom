// Slider ----------------------------------------
$(document).on('ready', function () {
    $(".regular").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    // Videp Slider ----------------------------------------
    $(".videoSlide").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        //autoplay: true,
        autoplaySpeed: 5000,
    });
});

// Paralax ----------------------------------------
(function () {
    var parallax, speed;
    parallax = document.querySelectorAll('.parallax-image');
    speed = 0.5;
    window.onscroll = function () {
        return [].slice.call(parallax).forEach(function (el, i) {
            var dist;
            dist = $(window).scrollTop() - $(el).offset().top;
            return $(el).css('top', dist * speed + 'px');
        });
    };
}).call(this);


// Video Slider With Modal ----------------------------------------
let videoButton, videoModal, closeModal;
videoButton = document.getElementsByClassName('video-button');
videoModal = document.querySelector('.modal-window');
closeModal = document.querySelector('.modal-close');

for (var i = 0; i < videoButton.length; i++) {
    videoButton[i].addEventListener("click", function () {
        videoModal.classList.add('show');
        let dataVideo = this.getAttribute("data-video");
        document.getElementById("videoURL").src = dataVideo + '?autoplay=1&rel=0&showinfo=0';
    });
}
closeModal.onclick = () => {
    videoModal.classList.remove('show');
    document.getElementById("videoURL").removeAttribute("src");
}

function videoThumbnail() {
    let videoThumb = document.getElementsByClassName('video-thumbnail');
    for (var i = 0; i < videoThumb.length; i++) {
        let iframeSRC = videoThumb[i].getAttribute("data-video");
        var iframe_src = iframeSRC;
        var youtube_video_id = iframe_src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        if (youtube_video_id.length == 11) {
            var video_thumbnail = $('<img src="//img.youtube.com/vi/' + youtube_video_id + '/0.jpg" alt="' + iframeSRC + '">');
            this.$(videoThumb[i]).append(video_thumbnail);
        }
    }
}
videoThumbnail();


// Scroll to Top ----------------------------------------
$(function () {
    var offset = 300,
        duration = 500,
        top_section = $('.to-top'),
        toTopButton = $('.back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $(top_section).fadeIn(duration);
        } else {
            $(top_section).fadeOut(duration);
        }
    });

    $(toTopButton).click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    });
});

// Service Hover ----------------------------------------
let mouseHoverBtn = document.getElementsByClassName('service-link');
let hoverImage = document.getElementById('serviceHover');

for (let i = 0; i < mouseHoverBtn.length; i++) {
    mouseHoverBtn[i].addEventListener('mouseover', function () {
        const selectImage = mouseHoverBtn[i].getElementsByClassName('hover-image')[0];
        const cloneImage = selectImage.cloneNode(true);
        const hoverImageHTML = hoverImage.getElementsByClassName('hover-image')[0];
        hoverImageHTML.outerHTML = cloneImage.outerHTML;
    })
}

// Footer Fixed ----------------------------------------
let selectFooter = document.getElementById('footer');
let selectArticle = document.getElementsByTagName('article');
selectArticle[0].style.marginBottom = selectFooter.offsetHeight + 'px';

// Page Loading ----------------------------------------
const loadingAnimation = () => {
    let load;
    load = setTimeout(showPage, 2500);
}
const showPage = () => {
    document.getElementsByClassName('loading')[0].classList.add('hide');
    document.getElementsByTagName('main')[0].classList.add('show');
}




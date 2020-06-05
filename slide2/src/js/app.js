import $ from 'jquery';
import 'slick-carousel';

class Carousel {
  constructor(selector) {
    this.selector = selector;
    this.slick_dots = document.getElementsByClassName('slick-dots');
  }

  handleChange(event, slick, currentSlide) {
    this.updateActiveContent(slick, currentSlide);
    if (this.slick_dots.length > 0) {
      $('.slick-control').html(this.slick_dots[0]);
    }
  }

  updateActiveContent(slick, currentSlide) {
    const $slide = $(slick.$slides[currentSlide]);
    const $content = $slide.find('script[data-item="post-info"]');
    const content = $content.html();
    this.$component.find('.post-info').html(content);
    if (this.slick_dots.length > 0) {
      $('.slick-control').html(this.slick_dots[0]);
    }
  }

  init() {
    this.$component = $(this.selector);
    this.$display = this.$component.find('.carousel');
    this.$display.slick({
      centerMode: true,
      slidesToShow: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1980,
          settings: {
            arrows: true,
            centerMode: true,
            cssEase: false,
            dots: true,
            draggable: false,
            centerPadding: '350px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1601,
          settings: {
            arrows: true,
            centerPadding: true,
            cssEase: false,
            dots: true,
            draggable: false,
            centerPadding: '300px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1441,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '275px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1381,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '260px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1201,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '230px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 993,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '190px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 915,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '175px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '152px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 641,
          settings: {
            arrows: true,
            centerMode: true,
            dots: true,
            draggable: false,
            cssEase: false,
            centerPadding: '120px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: true,
            centerMode: true,
            draggable: false,
            cssEase: false,
            centerPadding: '110px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 501,
          settings: {
            arrows: true,
            centerMode: true,
            draggable: false,
            cssEase: false,
            centerPadding: '90px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 376,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '70px',
            slidesToShow: 1
          }
        }
      ]
    });
    this.$display.on('afterChange', this.handleChange.bind(this));
    this.updateActiveContent(this.$display.slick('getSlick'), 0);
  }
}

const carousel = new Carousel('.site-slide');
carousel.init();


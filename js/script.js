function ocasions() {
  var menu = document.getElementById("menuOcasions");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function categories() {
  var menu = document.getElementById("menuCategories");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function Bundles() {
  var menu = document.getElementById("menuBundles");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

const heder = document.getElementById('buttonHeder');
heder.addEventListener("click", () => {
  heder.classList.toggle("present");
});

const factory = document.getElementById('buttonHeder2');
if (factory) {
  const isHeder = document.getElementById('spanStrilka2');
  factory.addEventListener("click", function (e) {
    isHeder.classList.toggle('_activee');
  });
}

const factory3 = document.getElementById('buttonHeder3');
if (factory3) {
  const isHeder = document.getElementById('spanStrilka3');
  factory3.addEventListener("click", function (e) {
    isHeder.classList.toggle('_activee');
  });
}

$(document).ready(function () {
  $('.divSlider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: true,
    dots: false,
    speed: 1000,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 1166,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
        }
      },
    ]
  });

  const factory = document.getElementById('burgerMenu');
  if (factory) {
    const isHeder = document.getElementById('heder');
    factory.addEventListener("click", function (e) {
      isHeder.classList.toggle('_activee');
    });
  }

  const body = document.getElementById('burgerMenu');
  if (factory) {
    const isHeder = document.getElementById('body');
    factory.addEventListener("click", function (e) {
      isHeder.classList.toggle('_activee');
    });
  }

  const isHeder = document.getElementById('divTop');
  const divX = document.getElementById('divX');
  divX.addEventListener("click", () => {
    isHeder.classList.toggle("present");
  });
});

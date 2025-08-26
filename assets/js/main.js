/**
 * Template Name: Personal - v2.1.0
 * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // // Nav Menu
  // $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var hash = this.hash;
  //     var target = $(hash);
  //     if (target.length) {
  //       e.preventDefault();

  //       if ($(this).parents('.nav-menu, .mobile-nav').length) {
  //         $('.nav-menu .active, .mobile-nav .active').removeClass('active');
  //         $(this).closest('li').addClass('active');
  //       }

  //       if (hash == '#header') {
  //         $('#header').removeClass('header-top');
  //         $("section").removeClass('section-show');
  //         return;
  //       }

  //       if (!$('#header').hasClass('header-top')) {
  //         $('#header').addClass('header-top');
  //         setTimeout(function() {
  //           $("section").removeClass('section-show');
  //           $(hash).addClass('section-show');
  //         }, 350);
  //       } else {
  //         $("section").removeClass('section-show');
  //         $(hash).addClass('section-show');
  //       }

  //       if ($('body').hasClass('mobile-nav-active')) {
  //         $('body').removeClass('mobile-nav-active');
  //         $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  //         $('.mobile-nav-overly').fadeOut();
  //       }

  //       return false;

  //     }
  //   }
  // });

  function updateActiveNavLink(hash) {
    // Remove the 'active' class from all links
    $(".nav-menu li").removeClass("active");

    // Add the 'active' class to the link that matches the hash
    if (hash && $(hash).length) {
      $('.nav-menu li a[href="' + hash + '"]')
        .parent()
        .addClass("active");
    } else {
      // If no hash is provided, activate the 'Home' link
      $('.nav-menu li a[href="#header"]').parent().addClass("active");
    }
  }

  $(document).on("click", ".nav-menu a, .mobile-nav a", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        // Update the URL with the hash without reloading the page
        history.pushState(null, null, hash);

        // Scroll smoothly to the target section
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            window.location.hash = hash; // Update the hash in the URL again after scrolling
          }
        );

        // if ($(this).parents(".nav-menu, .mobile-nav").length) {
        //   $(".nav-menu .active, .mobile-nav .active").removeClass("active");
        //   $(this).closest("li").addClass("active");
        // }
        updateActiveNavLink(hash);

        if (hash == "#header") {
          $("#header").removeClass("header-top");
          $("section").removeClass("section-show");
          return;
        }

        if (!$("#header").hasClass("header-top")) {
          $("#header").addClass("header-top");
          setTimeout(function () {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
          }, 350);
        } else {
          $("section").removeClass("section-show");
          $(hash).addClass("section-show");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    }
  });
  window.addEventListener("popstate", function (event) {
    var hash = window.location.hash;
    updateActiveNavLink(hash);

    if (hash) {
      if ($(hash).length) {
        if (hash == "#header") {
          $("#header").removeClass("header-top");
          $("section").removeClass("section-show");
          return;
        }

        if (!$("#header").hasClass("header-top")) {
          $("#header").addClass("header-top");
          setTimeout(function () {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
          }, 350);
        } else {
          $("section").removeClass("section-show");
          $(hash).addClass("section-show");
        }
      }
    } else {
      // Handle the situation where there's no hash (e.g., when you've navigated back to the initial state).
      $("#header").removeClass("header-top");
      $("section").removeClass("section-show");
    }
  });
  $(document).ready(function () {
    // Your sample JSON data
    var jsonData = [
      {
        title: "Tesarrec",
        image: "assets/img/project/tesarrec.PNG",
        link: "https://tesarrec.web.app/",
        description:
          "Tesarrec tackles sustainability challenges. It provides interdisciplinary solutions.",
      },
      {
        title: "Stonks",
        image: "assets/img/project/stonks.PNG",
        link: "https://stonk1.web.app/",
        description:
          "Stonks gamifies stock trading. Experience trading like a game.",
      },
      {
        title: "Xplore",
        image: "assets/img/project/xplore.png",
        link: "https://github.com/sohumsen/NewWalks",
        description:
          "Xplore offers new walking paths. Discover a new walk every day.",
      },
      {
        title: "Evolve AI",
        image: "assets/img/project/evolve.PNG",
        link: "https://evolve-ai.vercel.app/",
        description:
          "Evolve AI enhances market research. It's tailored for small businesses.",
      },
      {
        title: "Burger Builder",
        image: "assets/img/project/burger.PNG",
        link: "https://react-my-burger-e9e6e.web.app/",
        description:
          "Build your dream burger with Burger Builder. It's a customized burger experience.",
      },
      {
        title: "Auto code refactoring",
        image: "assets/img/project/gan.jpg",
        link: "https://github.com/sohumsen/masters_project",
        description:
          "This project refactors testability smells. It utilizes GANs for the task.",
      },
      {
        title: "Matching website",
        image: "assets/img/project/match.PNG",
        link: "https://matchy-rq7l.onrender.com",
        description:
          "Matching website connects users. It uses a unique algorithm for matching.",
      },
      {
        title: "Daily workout website",
        image: "assets/img/project/daily.PNG",
        link: "https://daily-prin.onrender.com",
        description:
          "Daily meditation, strength, and yoga exercises. It's a daily workout planner.",
      },
      {
        title: "TFL National rail uptime website",
        image: "assets/img/project/uptime.png",
        link: "https://transport-status.onrender.com/",
        description:
          "TFL National rail uptime website provides historical uptime on train statuses.",
      },
      {
        title: "Poker odds calculator",
        image: "assets/img/project/poker.png",
        link: "https://pokerbot-88jr.onrender.com/",
        description:
          "Poker odds calculator helps players calculate their chances of winning.",
      }
    ];

    // <a href="${item.link}" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Project Details"><i class="bx bx-info-circle"></i></a>

    // Function to generate HTML from JSON
    function generateHTML(data) {
      var html = "";

      data.forEach(function (item) {
        html += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <a href="${item.link}" target="_blank" style="text-decoration: none; color: inherit;">
        <center><h4>${item.title}</h4></center>
          <div class="portfolio-wrap">
          <div style="width: 100%; height: 300px; background-size: cover; background-position: center center; background-repeat: no-repeat; background-image: url('${item.image}');"></div>
          <div class="portfolio-info">
              <div class="portfolio-links">
              <h4>${item.description}</h4>
              </div>
            </div>
          </div>
          </a>
        </div>`;
      });

      return html;
    }

    // Append the generated HTML to a container, e.g., a div with id="portfolioContainer"
    $("#portfolioContainer").append(generateHTML(jsonData));
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $("#header").addClass("header-top");
      $(".nav-menu .active, .mobile-nav .active").removeClass("active");
      $(".nav-menu, .mobile-nav")
        .find('a[href="' + initial_nav + '"]')
        .parent("li")
        .addClass("active");
      setTimeout(function () {
        $("section").removeClass("section-show");
        $(initial_nav).addClass("section-show");
      }, 350);
    }
  }

  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });
})(jQuery);

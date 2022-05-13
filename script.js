window.addEventListener(
  "load",
  function () {
    const sliders = document.querySelectorAll(".slider");

    const slider = sliders[0];
    const sliderItems = slider.querySelectorAll(".slider-item");
    sliderItems[0].style.animationName = "start";
    for (let i = 0; i < sliders.length; ++i) {
      const dots = slider.querySelector(".slider-dots");
      const thumbs = slider.querySelectorAll(".thumb");
      for (let i = 0; i < sliderItems.length; ++i) {
        thumbs[i].addEventListener("click", dotClick.bind(null, i), false);
      }

      let currImg = 0;
      let prevImg = sliderItems.length - 1;

      for (let i = 0; i < sliderItems.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
      }

      const allDots = dots.querySelectorAll(".dot");
      allDots[0].classList.add("active");
      thumbs[0].classList.add("active");

      /**
       * Animates images
       * @param {number} [nextImg] - index of next image to show
       * @param {boolean} [right = false] - animate to right
       */
      function animateSlider(nextImg, right) {
        if (!nextImg)
          nextImg = currImg + 1 < sliderItems.length ? currImg + 2 : 1;

        --nextImg;
        sliderItems[prevImg].style.animationName = "";

        if (!right) {
          sliderItems[nextImg].style.animationName = "leftNext";
          sliderItems[currImg].style.animationName = "leftCurr";
        } else {
          sliderItems[nextImg].style.animationName = "rightNext";
          sliderItems[currImg].style.animationName = "rightCurr";
        }

        prevImg = currImg;
        currImg = nextImg;

        currDot = allDots[currImg];
        currDot.classList.add("active");
        prevDot = allDots[prevImg];
        prevDot.classList.remove("active");
        currThumb = thumbs[currImg];
        currThumb.classList.add("active");
        prevThumb = thumbs[prevImg];
        prevThumb.classList.remove("active");
      }

      /**
       * Decides if animate to left or right and highlights clicked dot
       * @param {number} num - index of clicked dot
       */
      function dotClick(num) {
        if (num == currImg) return false;

        if (num > currImg) animateSlider(num + 1);
        else animateSlider(num + 1, true);
      }
    }

    const dropdown = document.querySelector(".dropdown-ul");
    const dropdownLink = document.querySelectorAll(".dropbtn");
    var dropdowns = document.querySelectorAll(".dropdown-content");

    if (window.innerWidth > 576) {
      dropdown.addEventListener("mouseover", function (event) {
        document.querySelector("section").classList.add("active");
      });
      dropdown.addEventListener("mouseleave", function (event) {
        document.querySelector("section").classList.remove("active");
      });

      
    } else {
      document
        .querySelector(".btn-menu")
        .addEventListener("click", function () {
          this.classList.toggle("active");
          document.querySelector("section").classList.toggle("active");
          document.querySelector(".col-xs").classList.toggle("active");
        });

      const innerDropdownLinks = document.querySelectorAll(".list-title");

      dropdownLink.forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", (e) => {
          e.preventDefault();
          if (dropdownLink.classList.contains("is-open")) {
            dropdownLink.classList.remove("is-open");
          } else {
            const dropdownLinkIsOpen = document.querySelectorAll(".is-open");
            dropdownLinkIsOpen.forEach((dropdownLinkIsOpen) => {
              dropdownLinkIsOpen.classList.remove("is-open");
            });
            dropdownLink.classList.add("is-open");
          }
        });
      });
      innerDropdownLinks.forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", (e) => {
          e.preventDefault();
          if (dropdownLink.classList.contains("isOpen")) {
            dropdownLink.classList.remove("isOpen");
          } else {
            const dropdownLinkIsOpen = document.querySelectorAll(".isOpen");
            dropdownLinkIsOpen.forEach((dropdownLinkIsOpen) => {
              dropdownLinkIsOpen.classList.remove("isOpen");
            });
            dropdownLink.classList.add("isOpen");
          }
        });
      });
    }
  },
  false
);

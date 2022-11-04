let menuBtn = document.querySelector(".mobile-icon");
let menuList = document.querySelector(".mobile-menu");
menuBtn.addEventListener("click", function () {
  menuList.classList.toggle("d-block");
});

const box = {
  name: "Lorem ipsum",
  category: "Camera",
  price1: "500",
  price2: "15.500",
  price3: "1500",
  price4: "2500",
};
let dataBase = [];
dataBase.push(box);
dataBase.push(box);
dataBase.push(box);
dataBase.push(box);
dataBase.push(box);
dataBase.push(box);
dataBase.push(box);
dataBase.push(box);

const productContainer = document.querySelector(".product-container");
dataBase.forEach((ele) => {
  productContainer.innerHTML += `<div class="col-bx-4 col-md-12 product-box">
  <div class="product">
    <div class="product-head">
      <div class="product-image">
        <img src="/assets/images/product.png" alt="" />
      </div>
      <div class="product-name">
        <h3>${ele.name}</h3>
        <span>${ele.category}</span>
      </div>
      <div class="product-head-icons">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 1H15V18H18V1ZM15 0H14V1V18V19H15H18H19V18V1V0H18H15ZM11 9.44441H8V18H11V9.44441ZM8 8.44441H7V9.44441V18V19H8H11H12V18V9.44441V8.44441H11H8ZM1 5.22216H4V18H1V5.22216ZM0 4.22216H1H4H5V5.22216V18V19H4H1H0V18V5.22216V4.22216Z"
            fill="black"
          />
        </svg>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_862_482)">
            <path
              d="M4.04053 19.5278C3.96642 19.5278 3.89232 19.5049 3.83003 19.4594C3.71977 19.3792 3.66464 19.2435 3.68791 19.1093L4.79446 12.659L0.107975 8.09132C0.0106009 7.99609 -0.0244824 7.85397 0.0174028 7.72473C0.059646 7.59514 0.171698 7.50063 0.306661 7.48094L6.78276 6.53978L9.67928 0.671196C9.73942 0.548762 9.864 0.471436 10 0.471436C10.1364 0.471436 10.261 0.548762 10.3208 0.671196L13.217 6.53978L19.6934 7.48094C19.8284 7.50063 19.9401 7.59478 19.9827 7.72473C20.0246 7.85397 19.9898 7.99645 19.8921 8.09132L15.2056 12.6597L16.3118 19.1096C16.3347 19.2439 16.2796 19.3796 16.1697 19.4598C16.0594 19.5407 15.913 19.551 15.7924 19.487L10 16.4419L4.207 19.487C4.15473 19.5142 4.09745 19.5278 4.04053 19.5278ZM1.12718 8.08488L5.42883 12.278C5.51296 12.36 5.55162 12.4789 5.53157 12.5949L4.51594 18.5154L9.83357 15.7202C9.93775 15.665 10.062 15.665 10.1669 15.7202L15.4838 18.5154L14.4685 12.5949C14.4485 12.4789 14.4871 12.3604 14.5713 12.278L18.8729 8.08488L12.9284 7.22104C12.8117 7.20421 12.7111 7.13082 12.6589 7.02522L10 1.63885L7.34123 7.02557C7.28896 7.13118 7.18836 7.20457 7.07166 7.2214L1.12718 8.08488Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_862_482">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="product-body d-flex">
      <div class="price-box">
        <p>${ele.price1} $</p>
        <span>Lorem</span>
      </div>
      <div class="price-box">
        <p>${ele.price2} $</p>
        <span>Loreasm</span>
      </div>
      <div class="price-box">
        <p>${ele.price3} $</p>
        <span>Lorem</span>
      </div>
      <div class="price-box">
        <p>${ele.price4} $</p>
        <span>Lorem</span>
      </div>
    </div>
    <div class="product-footer d-flex">
      <div class="btn"><p>Buy</p></div>
      <div class="btn btn-green">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Add Basket</p>
      </div>
    </div>
  </div>
</div>`;
});

let currentSlideNumber = 0;
const firstBox = document.querySelector(".product-box");
const leftBtn = document.querySelector(".arrow.arrow-left");
const rightBtn = document.querySelector(".arrow.arrow-right");
firstBox.style.transition = "0.5s";
leftBtn.style.pointerEvents = "none";
leftBtn.addEventListener("click", function () {
  handleCarouselButtonClick(-1);
});
rightBtn.addEventListener("click", function () {
  handleCarouselButtonClick(1);
});
console.log(dataBase.length);
function handleCarouselButtonClick(direction) {
  currentSlideNumber += direction;
  let count = 0;
  if (currentSlideNumber <= 0) {
    leftBtn.style.pointerEvents = "none";
  } else {
    leftBtn.style.pointerEvents = "all";
  }

  if (currentSlideNumber === dataBase.length - 4) {
    rightBtn.style.pointerEvents = "none";
  } else {
    rightBtn.style.pointerEvents = "all";
  }

  const margin = -390 * currentSlideNumber;
  firstBox.style.marginLeft = `${margin}px`;
}

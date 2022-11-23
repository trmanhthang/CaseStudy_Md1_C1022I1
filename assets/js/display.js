// Hiển thị sản phẩm
function displayProduct(productArr) {
    let result = "";
    let userValue = document.getElementById('userName').value;
    for(let i = 0; i < productArr.length; i++) {
        if(userValue == "Admin") {
            result += `<li class="col l-3 m-4 c-6 container__menu-list-item">
                            <a href="" class="container__menu-list-link">
                                <div class="container__menu-list-link-img-btn">
                                    <img src="${productArr[i].getImg()}" alt="">
                                    <button class="container__menu-list-link-btn">
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                                <p class="container__menu-list-link-name">${productArr[i].getName()}</p>
                                <p class="container__menu-list-link-price">
                                    Giá:
                                    <span>${productArr[i].getPrice()}</span>
                                </p>
                                <div class="container__product-btn">
                                    <button class="product-btn">Sửa</button>
                                    <button class="product-btn">Xoá</button>
                                </div>
                            </a>
                        </li>`                                      
        } else {
            result += `<li class="col l-3 m-4 c-6 container__menu-list-item">
                            <a href="" class="container__menu-list-link">
                                <div class="container__menu-list-link-img-btn">
                                    <img src="${productArr[i].getImg()}" alt="">
                                </div>
                                <p class="container__menu-list-link-name">${productArr[i].getName()}</p>
                                <p class="container__menu-list-link-price">
                                    Giá:
                                    <span>${productArr[i].getPrice()}</span>
                                </p>
                            </a>
                        </li>`            
        }
                    
    }
    document.getElementById('menu').innerHTML = result;
}

let hot_tea = document.getElementById('hotTea');
let fruit_tea = document.getElementById('fruitTea');
let smoothies = document.getElementById('smoothies');
let cake = document.getElementById('cake');

// Check tạo sự kiện hover
function checkActive() {
    if (hot_tea.classList.contains("active")) {
        hot_tea.classList.remove("active")
    } else if (fruit_tea.classList.contains("active")) {
        fruit_tea.classList.remove("active")
    } else if (smoothies.classList.contains("active")) {
        smoothies.classList.remove("active")
    } else if (cake.classList.contains("active")) {
        cake.classList.remove("active")
    }
}

// Nút bấm hiển thị sản phẩm
function displayHotTea() {
    checkActive();
    displayProduct(hotTeaArr);
    hot_tea.classList.add('active');
}

function displayFruitTea() {
    checkActive();
    displayProduct(fruitTeaArr);
    fruit_tea.classList.add('active')
}

function displaySmoothies() {
    checkActive();
    displayProduct(smoothiesArr);
    smoothies.classList.add('active')
}

function displayCake() {
    checkActive();
    displayProduct(cakeArr);
    cake.classList.add('active')
}

let cart = [];
function buyProduct(index, category) {
    // tạo biến để lưu sản phẩm sẽ mua
    let productAdd = {};
    switch (category) {
        case "Trà nóng":
            // gán sản phẩm vào sản phẩm sẽ mua
            productAdd = hotTeaArr[index];
            break;
        case "Trà hoa quả":
            // gán sản phẩm vào sản phẩm sẽ mua
            productAdd = fruitTeaArr[index];
            break;
        case "Smoothies":
            // gán sản phẩm vào sản phẩm sẽ mua
            productAdd = smoothiesArr[index];
            break;
        case "Bánh":
            // gán sản phẩm vào sản phẩm sẽ mua
            productAdd = cakeArr[index];
            break;
    }

    if(cart.length > 0) {

        for (let i = 0; i < cart.length; i++) {
            if (cart[i][0].getName() == productAdd.getName() && cart[i][0].getCategory() == productAdd.getCategory()) {
                cart[i][1] += 1;
            } else {
                cart.push([productAdd, 1]);
            }
            break;
        }
    } else {
        cart.push([productAdd, 1]);

    }
    displayCart(cart);
}

// Hiển thị số lượng hàng trong giỏ
function amountProduct() {
    if(cart.length >= 1) {
        let result = 0;
        for (let i = 0; i < cart.length; i++) {
            result += cart[i][1];
        }
        document.getElementById('cart-price').innerHTML = `<span>${result}</span>` ;
        document.getElementById('cart-price').style.display = "flex";
    } else {
        document.getElementById('cart-price').style.display = "none";
    }
}

// Xoá hàng trong giỏ hàng
function deleteProductCart(index) {
    cart.splice(index, 1);
    displayCart(cart)
    amountProduct(); 
}

// Hiển thị sản phẩm đã thêm vào giỏ hàng
function displayCart(cart) {
    let cartProduct = document.getElementById('has-product');
    let result = ""
    for(let i = 0; i < cart.length; i++) {
        result += `<li class="header__cart-item">
                        <img src="${cart[i][0].getImg()}" alt="" class="header__cart-item-img">
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-head">
                                    <h5 class="header__cart-item-name">${cart[i][0].getName()}</h5>
                                    <div class="header__cart-item-wrap">
                                        <span class="header__cart-item-price">${cart[i][0].getPrice()}đ</span>
                                        <span class="header__cart-item-multiply">x</span>   
                                        <span id="qualityProduct" class="header__cart-item-quantity">${cart[i][1]}</span>
                                    </div>
                                </div>
                                <div class="header__cart-item-body">
                                    <span class="header__cart-item-description">
                                        Phân loại hàng: 
                                        <span id="classifyProduct">${cart[i][0].getCategory()}</span>
                                    </span>
                                    <span class="header__cart-item-remove" onclick="deleteProductCart(${i})">Xoá</span>
                                </div>
                            </div>
                        </li>`
    }
    cartProduct.innerHTML = result;
    amountProduct();
    totalMoney(cart);
}

// Tính tổng tiền hàng trong giỏ
function totalMoney(cart) {
    let sum = 0;
    for(let i = 0; i < cart.length; i++) {
        sum += (cart[i][0].getPrice() * cart[i][1]);
    }
    document.getElementById('total').innerHTML = sum;
}
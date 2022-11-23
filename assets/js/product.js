class Product {
    constructor(name, category, img, price) {
        this.name = name;
        this.category = category;
        this.img = img
        this.price = price;
    }

    getName() {return this.name;};
    getCategory() {return this.category;};
    getImg() {return this.img;};
    getPrice() {return this.price;};

    setName(value) {this.name = value;};
    setCategory(value) {this.category = category;};
    setImg(value) {this.img = value;};
    setPrice(value) {this.price = value;};
}

// MENU TRÀ NÓNG
let traPhucBonTu_hot = new Product("Trà phúc bồn tử", "hotTea", "./assets/img/Product/Tea/phucbontu.webp", "40.000đ");
let traVai_hot = new Product("Trà vải", "hotTea", "./assets/img/Product/Tea/travai.webp", "40.000đ");
let traCamDao_hot = new Product("Trà cam đào", "hotTea", "./assets/img/Product/Tea/tracamdao.webp", "40.000đ");
let traTao_hot = new Product("Trà táo", "hotTea", "./assets/img/Product/Tea/tratao.webp", "40.000đ");
let traVietQuat_hot = new Product("Trà việt quất", "hotTea", "./assets/img/Product/Tea/travietquat.webp", "40.000đ");
let traDauTay_hot = new Product("Trà dâu tây", "hotTea", "./assets/img/Product/Tea/tradautay.webp", "40.000đ");
let traXoai_hot = new Product("Trà xoài", "hotTea", "./assets/img/Product/Tea/traxoai.webp", "40.000đ");
let traChanh_hot = new Product("Trà chanh", "hotTea", "./assets/img/Product/Tea/trachanh.webp", "40.000đ");

let hotTeaArr = [traPhucBonTu_hot, traVai_hot, traCamDao_hot, traTao_hot, traVietQuat_hot, traDauTay_hot, traXoai_hot, traChanh_hot];


// MENU TRÀ HOA QUẢ
let traPhucBonTu = new Product("Trà phúc bồn tử", "fruitTea", "./assets/img/Product/Tea/phucbontu.webp", "40.000đ");
let traVai = new Product("Trà vải", "fruitTea", "./assets/img/Product/Tea/travai.webp", "40.000đ");
let traCamDao = new Product("Trà cam đào", "fruitTea", "./assets/img/Product/Tea/tracamdao.webp", "40.000đ");
let traTao = new Product("Trà táo", "fruitTea", "./assets/img/Product/Tea/tratao.webp", "40.000đ");
let traVietQuat = new Product("Trà việt quất", "fruitTea", "./assets/img/Product/Tea/travietquat.webp", "40.000đ");
let traDauTay = new Product("Trà dâu tây", "fruitTea", "./assets/img/Product/Tea/tradautay.webp", "40.000đ");
let traXoai = new Product("Trà xoài", "fruitTea", "./assets/img/Product/Tea/traxoai.webp", "40.000đ");
let traChanh= new Product("Trà chanh", "fruitTea", "./assets/img/Product/Tea/trachanh.webp", "40.000đ");

let fruitTeaArr = [traVietQuat, traDauTay, traVai, traPhucBonTu, traChanh, traXoai, traCamDao, traTao];


// MENU SMOOTHIES
let smChuoiDua = new Product("Smoothies Chuối Dừa", "smoothies", "./assets/img/Product/Smoothies/smchuoidua.webp", "55.000đ");
let smDauVietQuat = new Product("Smoothies Việt Quất", "smoothies", "./assets/img/Product/Smoothies/smdauvietquat.webp", "55.000đ");
let smDau = new Product("Smoothies Dâu", "smoothies", "./assets/img/Product/Smoothies/smdau.webp", "55.000đ");
let smDauChuoi = new Product("Smoothies Dâu Chuối", "smoothies", "./assets/img/Product/Smoothies/smdauchuoi.webp", "55.000đ");

let smoothiesArr = [smChuoiDua, smDauVietQuat, smDau, smDauChuoi];


// MENU BÁNH NGỌT
let caPhePhomai = new Product("Bánh Cà Phê Phomai", "cake", "./assets/img/Product/Cake/banhcaphephomai.webp", "25.000đ");
let tiramisu = new Product("Tiramisu", "cake", "./assets/img/Product/Cake/tiramisu.webp", "25.000đ");
let caramelPhomai = new Product("Caramel Phomai", "cake", "./assets/img/Product/Cake/caramen.webp", "25.000đ");
let bongLanCuon = new Product("Bánh Bông Lan Cuộn Trà Xanh", "cake", "./assets/img/Product/Cake/bonglancuon.webp", "25.000đ");

let cakeArr = [caPhePhomai, tiramisu, caramelPhomai, bongLanCuon];
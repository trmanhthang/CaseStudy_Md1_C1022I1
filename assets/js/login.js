const userName = "admin";
const userPassword = "123456789";
let inputUserName = document.getElementById('name').value;
let inputUserPassword = document.getElementById('password').value;
let modal = document.getElementById('modal');

function openLoginModal() {
    modal.style.display = "flex";
}

function closeLoginModal() {
    modal.style.display = "none";
}

function acceptLogin() {
    if(inputUserName == userName && inputUserPassword == userPassword) {
        let  = ""
        alert('Đăng Nhập Thành Công!')
        document.getElementById('account').innerHTML = 
    }
}
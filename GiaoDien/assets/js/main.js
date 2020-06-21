//Tim san pham
function search_phone(value) {
    var text_search = document.getElementById("text_search").value.toString();
    var mySearch = document.getElementById("search-results");
    console.log(text_search);
    if(text_search.length>0){
        mySearch.style.display = "block";
    }else{
        mySearch.style.display = "none";
    }
    
}
// Danh sach hang dien thoai
var cp = document.getElementById("company");
function show_company() {
    cp.style.left = "0";
    
}
function hide_company() {
    cp.style.left = "-200px";
}
window.addEventListener("resize",function () {
    hide_company();
    if (window.innerWidth > 768) cp.style.left = "0";
});

// Scroll Top
function scroll_top() {
    var y;
    var myset = setInterval(() => {
        if (pageYOffset > 0) {
            y = pageYOffset - 10;
            window.scrollTo(0, y);
        } else {
            clearInterval(myset);
        }
    }, 1);

}
window.addEventListener('scroll', function () {
    if (pageYOffset > 50) {
        this.document.getElementById("up-btn").style.right = "20px";
    }
    if (pageYOffset < 50) {
        this.document.getElementById("up-btn").style.right = "-60px";
    }
});

// MODAL FUNCTION
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var page_body = document.getElementsByClassName("container");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    for(var i=0;i<page_body.length;i++){
        page_body.item(i).style.filter = "blur(3px)";
    }
}
btn2.onclick = function () {
    modal.style.display = "block";
    for (var i = 0; i < page_body.length; i++) {
        page_body.item(i).style.filter = "blur(3px)";
    }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    for (var i = 0; i < page_body.length; i++) {
        page_body.item(i).style.filter = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        for (var i = 0; i < page_body.length; i++) {
            page_body.item(i).style.filter = "none";
        }
    }
}

//TAB FUNCTION
function openTab(evt, tabName) {
    var i, tabcontent, tablinks, title_sign_form, content_sign;
    tabcontent = document.getElementsByClassName("tabcontent");
    title_sign_form = document.getElementById("title_sign_form");
    content_sign = document.getElementById("content_sign");
    if (tabName =='register'){
        title_sign_form.innerHTML="ĐĂNG KÍ";
        content_sign.innerHTML ="Trở thành thành viên và nhận nhiều ưu đãi hấp dẫn !";
    }
    if (tabName=='login'){
        title_sign_form.innerHTML = "ĐĂNG NHẬP";
        content_sign.innerHTML = "Đăng nhập để lưu lại giỏ hàng, mua sản phẩm, bình luận và nhiều hơn thế,...";
    }
    if (tabName== 'quenmatkhau') {
        title_sign_form.innerHTML = "ĐỔI MẬT KHẨU";
        content_sign.innerHTML = "Mật khẩu mới sẽ được gửi về email của bạn. Vui lòng kiễm tra mail và đăng nhập với mật khẩu mới!";
    }
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//SHOW SEARCH BAR FUNCTION
function show_search_bar() {
    var search_bar =document.getElementsByClassName("search-bar").item(0);
    if(search_bar.style.display=="block"){
        search_bar.style.display="none";
    }else{
        search_bar.style.display ="block";
    }
}
// SWITCH MODE FUCNTION
const toggleSwitch = document.querySelector('.switch [type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
window.matchMedia('(prefers-color-scheme: dark)').matches

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
/// LoadPage
function loadPage(page) {
    location.assign(page);

}
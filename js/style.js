import { productService } from "../model/model.js";

 
const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

async function showProduct() {
    var url = "http://localhost:3000/product?category=NIKE&_limit=5";
    var res = await fetch(url);
    var products = await res.json();
    console.log(products);
    var pr = "";
    products.forEach(items => {
        pr += `
        <div class="container-product-table-item">
        <div class="product-table-item-img">
               
        <span class="class-sale-product-all">Sale !</span>
        <a href="chitietsanpham.html?product?category=NIKE&id=${items.id}">
        <img  src="../img/product/${items.anh}" alt="">
        </a>
        </div>
        <div class="product-table-items-compare-whislist-view-truout">
            <div class="product-table-items-compare-whislist-view">
            
                <div class="product-table-items-whislist">
                    <i class='bx bxs-heart'></i>
                </div>
                <div class="product-table-items-compare">
                    <i class='bx bx-transfer-alt'></i>
                </div>
                <div class="product-table-items-view">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>
        </div>
        <div class="product-table-item-brand">
          <a href="#">${items.category}</a>
        </div>
        <div class="product-table-item-name-product">
            <a href="#">${items.tensp}</a>
        </div>
        <div class="product-table-item-price">
            <div class="product-table-item-price-main">
                    <span>${formatter.format(items.gia)}</span>
            </div>
            <div class="product-table-item-price-extra">
                <del>${formatter.format(items.giaold)}</del>
            </div>
        </div>
        <div  class="product-table-item-button">
            <button data-id="${items.id}" class="btn_buy hienthi_addCart" > <i class='bx bxs-cart'></i> Add To Cart</button>
        </div>
        </div>
        `;
    });
    var listProduct = document.querySelector('.container-product-table-items');
   listProduct.innerHTML = pr;
}

async function showProduct2() {
    var url = "http://localhost:3000/product?category=ADIDAS&_limit=5";
    var res = await fetch(url);
    var products = await res.json();
    console.log(products);
    var pr = "";
    products.forEach(items => {
        pr += 
        `
        <div class="container-product-table-item">
        <div class="product-table-item-img">
               
        <span class="class-sale-product-all">Sale !</span>
        <a href="chitietsanpham.html?product?category=NIKE&id=${items.id}">
        <img  src="./../img/product/${items.anh}" alt="">
        </a>
        </div>
        <div class="product-table-items-compare-whislist-view-truout">
            <div class="product-table-items-compare-whislist-view">
            
                <div class="product-table-items-whislist">
                    <i class='bx bxs-heart'></i>
                </div>
                <div class="product-table-items-compare">
                    <i class='bx bx-transfer-alt'></i>
                </div>
                <div class="product-table-items-view">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>
        </div>
        <div class="product-table-item-brand">
          <a href="#">${items.category}</a>
        </div>
        <div class="product-table-item-name-product">
            <a href="#">${items.tensp}</a>
        </div>
        <div class="product-table-item-price">
            <div class="product-table-item-price-main">
                    <span>${formatter.format(items.gia)}</span>
            </div>
            <div class="product-table-item-price-extra">
                <del>${formatter.format(items.giaold)}</del>
            </div>
        </div>
        <div class="product-table-item-button">
            <button> <i class='bx bxs-cart'></i> Add To Cart</button>
        </div>
        </div>
        `;
    });
    var listProduct = document.querySelector('.container-product-table-items2');
   listProduct.innerHTML = pr;
}

showProduct();
showProduct2();

document.addEventListener("click", async(e) => {
    if (e.target.classList.contains('btn_buy')) {
        const id = e.target.getAttribute('data-id');
        const product = await productService.getDataById(id);
        let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[];
        const index = cart.findIndex(item => item.id==product.id );
        if (index==-1) {
            product.qty= 1;
            cart.push(product);
        }else{
            cart[index].qty+= 1;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
     
    }
})


document.addEventListener("click", async (e) => {
    if (e.target.classList.contains('hienthi_addCart')) {
        // Hiển thị phần tử
        document.querySelector('#hienthi_addcart_html').style.display = "block";

        // Đợi 2 giây rồi ẩn phần tử đi
        setTimeout(() => {
            document.querySelector('#hienthi_addcart_html').style.display = "none";
        }, 2500);
    }
});


























var currentPage = 1;

function changePage(pageNumber) {
    // Ẩn trang hiện tại
    document.getElementById('page' + currentPage).classList.remove('active');
    console.log(pageNumber);
    // Ẩn nút hiện tại
    document.getElementById('button' + currentPage).classList.remove('active-button');

    // Hiển thị trang mới
    currentPage = pageNumber;
    document.getElementById('page' + currentPage).classList.add('active');

    // Hiển thị nút mới
    document.getElementById('button' + currentPage).classList.add('active-button');
}

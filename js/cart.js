
const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
function hienthicart() {
    document.querySelector('tbody').innerHTML = "";
    cart.forEach((item, index) => {
        document.querySelector('tbody').innerHTML +=
            `
        <tr>
        <td><div class="trash-cart-product delPro" data-id="${item.id}"><i class="fa-solid fa-xmark"></i></div></td>
        <td> 
        ${index + 1}
        </td>
        <td><img src="img/product/${item.anh}" alt=""></td>
        <td class="text-cart-product" style="text-align: left; padding-left: 10px; font-size: 15px;">${item.tensp}</td>
        <td>${formatter.format(item.gia)}</td>
        <td>
        
          <input class="qty" data-id="${item.id}" type="number" min="1" value="${item.qty}">
          
               </td>
        <td>${formatter.format(item.qty * item.gia)}</td>
    </tr>
        
        `
    });
}
hienthicart();

document.addEventListener("click", async (e) => {
    if (e.target.classList.contains('delPro')) {
        const id = e.target.getAttribute('data-id');
        const index = cart.findIndex(item => item.id == id)
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        hienthicart();
    }
})

document.addEventListener("change", (e) => {
    if (e.target.classList.contains('qty')) {
        const id = e.target.getAttribute('data-id');
        const value = e.target.value;
        const index = cart.findIndex(item => item.id == id);
        cart[index].qty = value;
        localStorage.setItem('cart', JSON.stringify(cart));
        hienthicart();
    }
})

function xoatatca() {
    alert("Bạn có muốn xóa hết sản phẩm đã đặt");
    if (alert) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = "index.html";
    }
}

let sum = 0;
cart.forEach(item => {
    sum += item.gia * item.qty
})
document.querySelector('#sumMoney').innerHTML = formatter.format(sum);







// function $_GET(key) {
//     var query = location.search.slice(1).split('&');
//     //['id=2', 'url=aaa', 'page=1']
//     var _get = {};
//     for (const q of query) {
//         var tmp = q.split('=');
//         _get[tmp[0]] = tmp[1];
//     }
//     return _get[key];
// }
// function get_product(id) {
//     for(const sp of mangproduct){
//         if (sp.id == id) {
//             return sp;
//         }
//     }
//     // return dsSp.filter(sp => sp.id == id)[0];
// }

// var e = get_product($_GET('id'));
// document.querySelector('.anhsp').src = sanpham.anh;
// document.querySelector('.tensp').innerText = sanpham.tensp;
// document.querySelector('.giaold').innerText = formatter.format(sanpham.giaold);
// document.querySelector('.giagoc').innerText = formatter.format(sanpham.gia);
// document.querySelector('.mota').innerText = sanpham.motasp;
// var url = "http://localhost:3000/product?danhmuc=NIKE";
//     fetch(url)
//         .then(Response => Response.json())
//         .then(data => {
//             const listProductdetail = document.querySelector('.container-detail-product-row');
//             console.log(listProductdetail);
//                 listProductdetail.innerHTML = `
//                 <div class="container-detail-product-col-1">
//                 <div class="container-detail-product-col-imgsp-all">
//                     <div class="detail-product-col-imgsp-small">
//                         <div class="detail-product-col-imgsp-small-item">
//                             <img src="img/product/productphu1.1.jpg" alt="">
//                         </div>
//                         <div class="detail-product-col-imgsp-small-item">
//                             <img src="img/product/productphu1.2.jpg" alt="">
//                         </div>
//                         <div class="detail-product-col-imgsp-small-item">
//                             <img src="img/product/productphu1.3.jpg" alt="">
//                         </div>
//                         <div class="detail-product-col-imgsp-small-item">
//                             <img src="img/product/productphu1.4.jpg" alt="">
//                         </div>
//                         <div class="detail-product-col-imgsp-small-item">
//                             <img src="img/product/productphu1.5.jpg" alt="">
//                         </div>
//                         <div class="detail-product-col-imgsp-small-item">
//                             <img src="img/product/productphu1.6.jpg" alt="">
//                         </div>
//                     </div>
//                     <div class="detail-product-col-imgsp-big">
//                         <img class="anhsp" src="${data.anh}" alt="">
//                     </div>
//                 </div>
//             </div>
//             <div class="container-detail-product-col-2">
//                 <div class="container-detail-product-col-text-content">
//                     <div class="container-detail-product-col-text-content-items">
//                         <h2 class="tensp">${data.tensp}</h2>
//                         <div class="detail-product-col-text-content-star">
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                              <span>15 Đánh Giá</span>
//                         </div>
//                         <hr>
//                         <div class="detail-product-col-text-content-watch-sale">
//                             <i> <h4>⚡SIÊU SALE 30.12 - 19.2⚡ THỜI GIAN SALE CÒN:</h4></i>
//                             <div class="detail-product-col-text-content-watch" data-end="2024-02-19 15:00:00" >
//                                 <div class="watch-day">
//                                     <h5>00</h5>
//                                     <p>Ngày</p>
//                                 </div>
//                                 <div class="watch-hour">
//                                     <h5>00</h5>
//                                     <p>Tiếng</p>
//                                 </div>
//                                 <div class="watch-minutes">
//                                     <h5>00</h5>
//                                     <p>Phút</p>
//                                 </div>
//                                 <div class="watch-second">
//                                     <h5>00</h5>
//                                     <p>Giây</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="detail-product-col-text-content-price">
//                             <div class="detail-product-price-sale">
//                                 <h3 class="giagoc">${data.gia}</h3>
//                                 <del class="giaold">${data.giaold}</del>
//                             </div>
//                             <div class="detail-product-gach">

//                             </div>
//                             <div class="detail-product-price-kho">
//                                 <span>Kho hàng : <i>Còn Hàng</i> </span>
//                                 <span>Mã Sản Phẩm :<i>" 1 "</i> </span>
//                             </div>
//                             <div class="detail-product-price-brach">
//                                 <img src="img/logothuonghieu/nike.png" alt="">
//                             </div>
//                         </div>
//                         <hr>
//                         <div class="detail-product-col-text-content-size">
//                             <div class="product-col-text-content-size-title">
//                                 <span>
//                                     Chọn size
//                                 </span>
//                             </div>
//                             <div class="product-col-text-content-size-kind">
//                                 <span>
//                                     36
//                                 </span>
//                                 <span>
//                                     37
//                                 </span>
//                                 <span>
//                                     38
//                                 </span>
//                                 <span>
//                                     39
//                                 </span>
//                                 <span>
//                                     40
//                                 </span>
//                             </div>
//                         </div>
//                         <div class="detail-product-col-text-content-magiamgia">
//                             <div class="detail-product-col-text-content-magiamgia-voucher">
//                                 <i class="fa-solid fa-ticket"></i>
//                             </div>
//                             <div class="detail-product-col-text-content-magiamgia-text">
//                                 <h3>Khuyến Mãi Đặt Biệt</h3>
//                                 <p><i>Giảm thêm 200.000đ với đơn hàng từ 4 triệu. Nhập mã: TCK</i></p>
//                             </div>
//                         </div>
//                         <div class="detail-product-col-text-content-qty">
//                             <div class="product-col-text-content-size-title">
//                                 <span>
//                                     Số Lượng :
//                                 </span>
//                             </div>
//                             <form action="#">
//                                 <input type="number" min="1" value="1">
//                             </form>
//                         </div>
//                         <div class="detail-product-col-text-content-btn">
//                             <button><i class='bx bxs-cart'></i> Thêm Vào Giỏ</button>
//                             <button><i class="fa-brands fa-bitcoin"></i>Mua Ngay</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             `
//             });

async function showProductDetail(id) {
    var url = "http://localhost:3000/product/" + id;
    var res = await fetch(url);
    var e = await res.json();
    console.log(e);
    var pr = `
            <div class="container-detail-product-col-1">
                        <div class="container-detail-product-col-imgsp-all">
                            <div class="detail-product-col-imgsp-small">
                                <div class="detail-product-col-imgsp-small-item">
                                    <img src="../img/product/${e.anh}" alt="">
                                </div>
                                <div class="detail-product-col-imgsp-small-item">
                                    <img src="img/product/productphu1.2.jpg" alt="">
                                </div>
                                <div class="detail-product-col-imgsp-small-item">
                                    <img src="img/product/productphu1.3.jpg" alt="">
                                </div>
                                <div class="detail-product-col-imgsp-small-item">
                                    <img src="img/product/productphu1.4.jpg" alt="">
                                </div>
                                <div class="detail-product-col-imgsp-small-item">
                                    <img src="img/product/productphu1.5.jpg" alt="">
                                </div>
                                <div class="detail-product-col-imgsp-small-item">
                                    <img src="img/product/productphu1.6.jpg" alt="">
                                </div>
                            </div>
                            <div class="detail-product-col-imgsp-big">
                                <img class="anhsp" src="../img/product/${e.anh}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="container-detail-product-col-2">
                        <div class="container-detail-product-col-text-content">
                            <div class="container-detail-product-col-text-content-items">
                                <h2 class="tensp">${e.tensp}</h2>
                                <div class="detail-product-col-text-content-star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <span>15 Đánh Giá</span>
                                </div>
                                <hr>
                                <div class="detail-product-col-text-content-watch-sale">
                                    <i> <h4>⚡SIÊU SALE 30.12 - 19.2⚡ THỜI GIAN SALE CÒN:</h4></i>
                                    <div class="detail-product-col-text-content-watch" data-end="2024-02-19 15:00:00" >
                                        <div class="watch-day">
                                            <h5>00</h5>
                                            <p>Ngày</p>
                                        </div>
                                        <div class="watch-hour">
                                            <h5>00</h5>
                                            <p>Tiếng</p>
                                        </div>
                                        <div class="watch-minutes">
                                            <h5>00</h5>
                                            <p>Phút</p>
                                        </div>
                                        <div class="watch-second">
                                            <h5>00</h5>
                                            <p>Giây</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="detail-product-col-text-content-price">
                                    <div class="detail-product-price-sale">
                                        <h3 class="giagoc">${e.gia}</h3>
                                        <del class="giaold">${e.giaold}</del>
                                    </div>
                                    <div class="detail-product-gach">
            
                                    </div>
                                    <div class="detail-product-price-kho">
                                        <span>Kho hàng : <i>Còn Hàng</i> </span>
                                        <span>Mã Sản Phẩm :<i>" 1 "</i> </span>
                                    </div>
                                    <div class="detail-product-price-brach">
                                        <img src="img/logothuonghieu/nike.png" alt="">
                                    </div>
                                </div>
                                <hr>
                                <div class="detail-product-col-text-content-size">
                                    <div class="product-col-text-content-size-title">
                                        <span>
                                            Chọn size
                                        </span>
                                    </div>
                                    <div class="product-col-text-content-size-kind">
                                        <span>
                                            36
                                        </span>
                                        <span>
                                            37
                                        </span>
                                        <span>
                                            38
                                        </span>
                                        <span>
                                            39
                                        </span>
                                        <span>
                                            40
                                        </span>
                                    </div>
                                </div>
                                <div class="detail-product-col-text-content-magiamgia">
                                    <div class="detail-product-col-text-content-magiamgia-voucher">
                                        <i class="fa-solid fa-ticket"></i>
                                    </div>
                                    <div class="detail-product-col-text-content-magiamgia-text">
                                        <h3>Khuyến Mãi Đặt Biệt</h3>
                                        <p><i>Giảm thêm 200.000đ với đơn hàng từ 4 triệu. Nhập mã: TCK</i></p>
                                    </div>
                                </div>
                                <div class="detail-product-col-text-content-qty">
                                    <div class="product-col-text-content-size-title">
                                        <span>
                                            Số Lượng :
                                        </span>
                                    </div>
                                    <form action="#">
                                        <input type="number" min="1" value="1">
                                    </form>
                                </div>
                                <div class="detail-product-col-text-content-btn">
                                    <button ><i class='bx bxs-cart'></i> Thêm Vào Giỏ</button>
                                    <button><i class="fa-brands fa-bitcoin"></i>Mua Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
    var listProduct = document.querySelector('.container-detail-product-row');
    listProduct.innerHTML = pr;
    console.log(listProduct);
}
showProductDetail(1);

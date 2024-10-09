import { productService } from "../model/model.js";
const tbody = document.querySelector('tbody');
const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
function ShowProduct() {
    tbody.innerHTML = "";
    productService.fetchData('http://localhost:3000/product').then(mangproduct => {
        mangproduct.forEach(function (item, index) {

            tbody.innerHTML += `
            <tr>
            <td>${index + 1}</td>
            <td>${item.tensp}</td>
            <td><img width=120px src="../img/product/${item.anh}" alt=""></td>
            <td>${formatter.format(item.gia)}</td>
            <td>${formatter.format(item.giaold)}</td>
            <td>${item.category}</td>
            <td>
            <button class="openEditPage admin-product-edit"  data-id="${item.id}"><i class="fa-solid fa-pencil"></i></button>
            <button class="detelePro admin-product-remove-item" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>      
            `
        });
    })
}
ShowProduct();
const addModal = document.querySelector('#addModal');
document.querySelector('#openAppPage').onclick = function () {
    addModal.style.display = "block";
}
document.querySelector('.close').onclick = function () {
    addModal.style.display = "none";
}
// Thêm Sản Phẩm lấy dữ liệu




document.querySelector('#addPro').onclick = function () {
    const name = document.querySelector('#name').value;
    const image = document.querySelector('#image').value.split('\\').pop();
    const price = document.querySelector('#price').value;
    const sale = document.querySelector('#sale').value;
    const category = document.querySelector('#category').value;
    productService.getlastId().then(id => {
        const pro = {
            'id': (Number(id) + 1).toString(),
            'tensp': name,
            'anh': image,
            'gia': price,
            'giaold': sale,
            'category': category,

        }
        productService.addData(pro);
    })
    addModal.style.display = "none";
    ShowProduct();
}

//Sửa sp
const editModal = document.querySelector('#editModal');

document.querySelector('tbody').addEventListener("click", function (e) {
    if (e.target.classList.contains('openEditPage')) {
        const id = e.target.dataset.id;
        productService.getDataById(id).then(pro => {
            editModal.style.display = "block";
            editModal.innerHTML +=
                `
            <div class="modal-content">
            <span class="close">&times;</span>
              <div class="form">
                  <label for="">Tên Sản Phẩm</label> <br>
                  <input value="${pro.tensp}" type="text" id="editName"> <br>
                  <label for="">Hình Ảnh</label> <br>
                  <img id="showImage" src="../img/product/${pro.anh}" width="200" >
                  <input type="file" id="editImage"> <br>
                  <label for="">Giá</label> <br>
                  <input value="${pro.gia}"  type="text" id="editPrice"> <br>
                  <label for="">Giá Khuyến Mãi</label> <br>
                  <input value="${pro.giaold}"  type="text" id="editSale"> <br>
                  <label for="">Danh Mục</label> <br>
                  <select id="editCategory">
                      <option ${pro.category == "NIKE" ? "selected" : ""} value="NIKE">NIKE</option>
                      <option  ${pro.category == "ADIDAS" ? "selected" : ""}value="ADIDAS">ADIDAS</option>
                  </select>
                  <br>
                  <button class="editPro" data-id="${id}" id="editPro">Sửa Sản Phẩm</button>
              </div>
          </div>
        
            `
        })
    }
})
editModal.addEventListener("click", function (e) {
    if (e.target.classList.contains('editPro')) {
        const id = e.target.dataset.id;
        const editName = document.querySelector('#editName').value;
        var editImage = document.querySelector('#editImage').value.split("\\").pop();
        if (editImage == "") {
            editImage = document.querySelector('#showImage').src.split("/").pop()
        }
        const editPrice = document.querySelector('#editPrice').value;
        const editSale = document.querySelector('#editSale').value;
        const editCategory = document.querySelector('#editCategory').value;
    
        console.log(editImage + editName + editCategory + editSale);
        var pro = {
            'id': id,
            'tensp': editName,
            'anh': editImage,
            'gia': editPrice,
            'giaold': editSale,
            'category': editCategory,
        }
        productService.updateData(id, pro);
        editModal.style.display = "none";
        ShowProduct();
    }
})
// Xóa

document.querySelector('tbody').addEventListener("click", function (e) {
    if (e.target.classList.contains('detelePro')) {
        const id = e.target.dataset.id;
        productService.deleteData(id);
        ShowProduct();
    }
})
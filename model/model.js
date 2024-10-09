export class productService {
    // Gửi yêu cầu GET đến URL được chỉ định và trả về dữ liệu phản hồi.
    static async fetchData(url) { //Phương Thức
        try {
            const response = await axios.get(url);
            return response.data;
        } catch {
            console.log(error);
            throw error;
        }
    }
    static async addData(data) {
        try {
            await axios.post('http://localhost:3000/product', data)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getlastId() {
        try {
            const response = await axios.get('http://localhost:3000/product');
            return response.data[response.data.length - 1].id;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // Gửi yêu cầu DELETE để xóa sản phẩm có ID cụ thể 
    static async deleteData(id) {
        try {
            await axios.delete(`http://localhost:3000/product/${id}`)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getDataById(id){
        try {
            const response = await axios.get(`http://localhost:3000/product/${id}`);
            return response.data;
        } catch {
            console.log(error);
            throw error;
        }
    }
    // Gửi yêu cầu PUT để cập nhật dữ liệu sản phẩm có ID 
    static async updateData(id, data){
        try {
           await axios.put(`http://localhost:3000/product/${id}`, data);
           console.log('update Thành Công');
        } catch {
            console.log(error);
            throw error;
        }
    }
}
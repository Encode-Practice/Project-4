import baseApi from "./baseApi";

class IpfsService {

    getAllData() {
        return baseApi.get('/');
    }

    getById(id: number) {
        return baseApi.get('/ipfs/:id');
    }

    createFile(file: Blob) {
        // formData
        let imageData = new FormData();
        imageData.append('file', file);

        return baseApi.post('/file', imageData, {
             headers: {
                'Content-Type': "multipart/form"
              }
        }
        );
    }
}

export default new IpfsService();
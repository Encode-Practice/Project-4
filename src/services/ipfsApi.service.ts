import baseApi from "./baseApi";

class IpfsService {

    getAllData() {
        return baseApi.get('/ipfs');
    }

    getById(id: number) {
        return baseApi.get('/ipfs/:id');
    }

    createFile(
        originalname: string,
        mimetype: string,
        filename: string,
        size: number,
    ) {
        return baseApi.post('/file',{
        originalname,
        mimetype,
        filename,
        size
        });
    }
}

export default new IpfsService;
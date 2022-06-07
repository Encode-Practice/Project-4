import baseApi from "./baseApi";


class ApiService {

    getServerBlock() {
        return baseApi.get('/block');
    }

    getTransactionReceipt(hash: string) {
        return baseApi.get(`/transaction/receipt/${hash}`);
    }

    getToken(address:string, amount:number, signature:string) {
        return baseApi.post(`/contract/mint-token`, {
            address,
            amount,
            signature 
        });
    }

}


export default new ApiService();
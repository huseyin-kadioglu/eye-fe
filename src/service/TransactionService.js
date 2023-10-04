import axios from "axios";

class TransactionService {

    static getTransactions = () => {
        return axios.get("http://localhost:8080/transactions");
    }

    static createTransaction(params) {
        params.side = params.side === "on"  ? "BUY" : "SELL";
        return axios.post("http://localhost:8080/transactions", params);
    }
}

export default TransactionService;
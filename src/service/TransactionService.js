import axios from "axios";

class TransactionService {

    static getTransactions = () => {
        return axios.get("http://localhost:8080/transactions");
    }

    static async createTransaction(params) {
        params.side = params.side === "on" ? "BUY" : "SELL";
        await axios.post("http://localhost:8080/transactions", params);
    }
}

export default TransactionService;
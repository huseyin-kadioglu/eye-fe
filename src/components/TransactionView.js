import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";
import {useEffect, useState} from "react";
import TransactionService from "../service/TransactionService";

const TransactionView = (props) => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        TransactionService.getTransactions().then(
            response => {
                response.data.map(e => {
                    setTransactions(prevState => [...prevState, e]);
                });
            }
        );
    }, []);


    const columns = [
        {field: 'code', headerName: 'Hisse Kodu', width: 130},
        {field: 'side', headerName: 'İşlem Yönü', width: 130,},
        {field: 'share', headerName: 'Pay Adedi', width: 130},
        {field: 'cost', headerName: 'Maliyet', width: 130},
    ];


    return (<DataGrid
        rows={transactions}
        columns={columns}
        initialState={{
            pagination: {
                paginationModel: {page: 0, pageSize: 5},
            },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
    />)
};
export default TransactionView;
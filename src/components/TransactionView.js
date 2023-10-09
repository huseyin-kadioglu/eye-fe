import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";

const TransactionView = ({transactions}) => {
    const columns = [
        {field: 'localDate', headerName: 'Tarih', width: 130},
        {field: 'code', headerName: 'Hisse Kodu', width: 130},
        {field: 'side', headerName: 'İşlem Yönü', width: 130,},
        {field: 'share', headerName: 'Pay Adedi', width: 130},
        {field: 'cost', headerName: 'Maliyet', width: 130},
    ];

    return (
        <DataGrid
            rows={transactions}
            columns={columns}
        />)
};
export default TransactionView;
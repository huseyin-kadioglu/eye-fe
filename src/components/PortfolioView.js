import {DataGrid} from "@mui/x-data-grid";
import * as React from "react";

const PortfolioView = ({portfolios}) => {
    const columns = [
        {field: 'code', headerName: 'Hisse Kodu', width: 130},
        {field: 'totalShare', headerName: 'Lot', width: 130,},
        {field: 'averageCost', headerName: 'Maliyet', width: 130},
    ];

    return (

        <>
            <p style={{textAlign: "center"}}>Portföy</p>
            <DataGrid
                rows={portfolios}
                columns={columns}
            />
        </>)
};
export default PortfolioView;
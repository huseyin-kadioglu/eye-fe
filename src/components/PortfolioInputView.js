import {Button} from "@mui/material";
import TransactionService from "../service/TransactionService";

const PortfolioInputView = (props) => {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

       TransactionService.createTransaction(formProps);
    }


    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Hisse Kodu: <input name="code"/>
            </label>
            <label>
                Adet: <input name="code"/>
            </label>
            <label>
                ALIŞ: <input type="checkbox" name="side" defaultChecked={true}/>
            </label>
            <label>
                Maliyet: <input name="cost"/>
            </label>
            <button type="reset">TEMİZLE</button>
            <button type="submit">EKLE</button>
        </form>
    );
};
export default PortfolioInputView;
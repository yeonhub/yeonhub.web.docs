
import CustomerList from '../components/CustomerList';
import './Customer.css'

const Customer = () => {


    return (
        <>
            <div className="inner">
                <h2> 고객문의 </h2>
                <CustomerList />
            </div>
        </>
    );
};

export default Customer;
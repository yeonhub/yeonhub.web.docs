import Header from "../components/Header";
import Product from "../components/Product";
import { products } from '../assets/api/data'
import './Home.css'


const Home = () => {
  return (
    <div>
        <div className="visual"></div>
      <div className="inner">
        <div className="cart-box">
          {
            products.map(item => <Product key={item.id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
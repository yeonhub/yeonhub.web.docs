import Header from "../components/Header";
import Product from "../components/Product";
import { products } from '../assets/api/data'
import './Home.css'


const Home = () => {
  return (
    <div>
      <div className="visual"></div>
      <div className="inner">
        <div className="search">
          <form>
            <input className="searchInput" type="text" />
          </form>
          <div className="sort">
            <form>
              <select name="sort" id="sort">
                <option value="">랭킹순</option>
                <option value="">인기순</option>
                <option value="">낮은가격순</option>
                <option value="">높은가격순</option>
              </select>
            </form>
          </div>
        </div>
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
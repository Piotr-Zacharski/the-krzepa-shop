import logo from '../img/bcaa.jpg'
import storm from '../img/storm.jpg'

const Promo = () => {
    return ( 
        <div>
        <img className="promo" src={logo} alt="Logo" width="200" />
        <img className="promo" src={storm} alt="Logo" width="200" />
        </div>
    );
}

export default Promo;
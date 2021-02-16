import { connect } from 'react-redux';
import  { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import './cart-icon.styles.scss';

const cartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = {
    toggleCartHidden
}

export default connect(null,mapDispatchToProps)(cartIcon);
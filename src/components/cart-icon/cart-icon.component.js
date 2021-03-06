import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// const mapStateToProps = (state) => ({
//   itemCount: state.cart.cartItems.reduce(
//     (accumalated, cartItem) => accumalated + cartItem.quantity,
//     0
//   ),
// });

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

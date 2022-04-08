import React from 'react';
import Checkbox from '../../../atoms/Checkbox';

const Cart = ({cart}) => {
    return (
        <div className={"cart"} style={{background: cart.bg_color}}>
            <h2>{cart.title}</h2>
            <div className={"container"}>
                <div className={"cart-items"}>
                    {cart.items && cart.items.map(item => {
                        return (
                            <div className={"cart-item"} key={item.id}>
                                <Checkbox item={item}/>
                                <p>{item.value}</p>
                            </div>)
                    })}
                </div>
            </div>


        </div>
    );
};

export default Cart;
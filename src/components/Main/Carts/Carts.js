import React, {useState} from 'react';
import Cart from "./Cart";
import IconAdd from './CreateCard/IconAdd';

const Carts = ({onCreate, carts}) => {
    

    return <div className={"carts-container"}>
        {
            carts && carts.map(cart => {
                return (<Cart cart={cart}/>)
            })
        }
        <div className={"create-cart"}>
            <IconAdd onCreate={onCreate}/>
        </div>
    </div>;
};

export default Carts;
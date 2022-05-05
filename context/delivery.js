import { createContext, useState } from 'react';

export const DeliveryContext = createContext();

const DeliveryContextProvider = ({children}) => {
    
    const [ list, setList] = useState([]);

 /*    const addItem = (item, quantity) => {

        if(isInCart(item.id)) {         
            return false;
        }

        setCartList(oldCartList => 
            [
                ...oldCartList, 
                {
                id: item.id,
                title: item.title,
                pictureUrl: item.pictureUrl,
                price: item.price,
                quantity: quantity
               }
            ]
        )
    }

    const removeItem = (itemId) => {
        setCartList(oldCarList => 
            [...oldCarList.filter(item => item.id !== itemId)]
        )
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id) !== undefined;
    }

    const quantityTotal = () => {
        return (
            cartList.length === 0 ? 0 :
            cartList.reduce((total, item) => { return total += item.quantity }, 0)
        );
    }

    const priceTotal = () => {
        return (
            cartList.length === 0 ? 0 :
            cartList.reduce((total, item) => { return total += (item.quantity * item.price) }, 0)
        );
    } */

    return (
        <DeliveryContext.Provider value={{ list, setList }}>
            {children}
        </DeliveryContext.Provider>
    );
}

export default DeliveryContextProvider;
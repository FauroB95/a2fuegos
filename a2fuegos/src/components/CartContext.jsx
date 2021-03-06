import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCarList] = useState([]);

    const addToCart = (item, cantidadItem) => {
        let funcioneliminar = cartList.find(product => product.key === item.key);
        if (funcioneliminar === undefined) {

        setCarList([
            ...cartList,
            {
                key: item.key,
                foto: item.imagen,
                apodo: item.nombre,
                monto: item.precio,
                cantidadItem: cantidadItem
            }
        ]);
        } else {
            funcioneliminar.cantidadItem += cantidadItem;
            setCarList([
                ...cartList
            ]);
        }
    }

    const deleteProduct = (key) => {
        let eliminaProducto = cartList.filter(item => item.key !== key);
        setCarList(eliminaProducto);
    }

    const removeCart = () => {
        setCarList([]);
    }

    const calculoTotalPorItem = (key) => {
        let resultadoPorItem = cartList.map(item => item.key).indexOf(key);
        return cartList[resultadoPorItem].monto * cartList[resultadoPorItem].cantidadItem;
    }

    const calculoSubTotal = () => {
        let subTotalPorItem = cartList.map(item => calculoTotalPorItem(item.key));
        return subTotalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const impuestos = () => {
        return calculoSubTotal() * 0.18;
    }
    
    const calculoTotal = () => {
        return calculoSubTotal();
    }

    const cantidadItemsKey = () => {
        let cantidadKeys = cartList.map(item => item.cantidadItem);
        return cantidadKeys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, removeCart, calculoTotalPorItem, calculoSubTotal, impuestos, calculoTotal, cantidadItemsKey}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;

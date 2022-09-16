import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    //main payload
    const [items, setItems] = useState([]);
    const [id, setId] = useState()

    // quantity of payload.price
    const [quantity, setQuantity] = useState(1)

    const [clicked, setClicked] = useState(false)

    const reducer = (accumulator, curr) => accumulator + curr
    // const tet = tot.reduce(reducer)

    const [quanty, setQuanty] = useState()
   


    function sumArr(arr){
        return arr.reduce((acc,curr) => {
            return acc + curr
        })
    }

      //handleIncrement quantity

    const handleIncrement = () => {
        if(quantity > 0) {
        setQuantity(prevCount => prevCount + 1)
        console.log("INCREMENT----->",quantity)
        }
    }
    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount -1)
            console.log("DECREMENT----->",quantity)
        }
    }
    
    //Add to cart function

    const addToCart = (el, elint) => {
        // let existe = items.includes(el)
        console.log("id from arg-->",el.id);
        let existe = false
        items.forEach( it => {
            console.log("this is ittt:---->",it);

            if(it.id == el.id) {
                setQuantity(elint)
                existe = true
                it.quantity = quantity
            }
        })

        if (!existe){
            el.quantity = elint
            setItems((items) => [...items, el])
            
            
            
        }
    }
    
    //remove from cart function
    const removeHandler = (item) => {
        let it = items.indexOf(item)
        items.splice(it, 1)
        setItems((items) => [...items])

    }

    //Increase from cart 
    const handleCartInc = (item, quantity) => {
        if (item.quantity > 0){
            console.log("hello cart");
        item.quantity++
        console.log("item------>", item.quantity);
        setQuanty(item.quantity)
        } else {
            setQuanty(1)
        }
    }
    
    //Increase from cart 
    const handleCartDec = (item, quantity) => {
        if (item.quantity > 1){
            console.log("hello cart");
        item.quantity--
        setQuanty(item.quantity)
        // item.quantity=quanty
        } else {
            setQuanty(1)
        }
    }

    return (
        <CartContext.Provider value={{ removeHandler, quanty, setQuanty, handleCartDec, handleCartInc,items, addToCart, quantity, setQuantity, sumArr, handleDecrement, handleIncrement, clicked, setClicked, id, setId}}>{children}</CartContext.Provider>
    )
}
export default CartContext;
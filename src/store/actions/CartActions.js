import axios from 'axios';

export function addToCart(payload)
{
    return(dispatch) =>
    {
        return axios.put("http://localhost:8080/cart/addItem",payload).then(
            resp=>
            
            {
                
                dispatch(
                    {
                        type:"cart/item",
                        payload:resp.data
                    }
                )
            }
        )
    }
}



export function fetchCart(id)
{
    return(dispatch) =>
    {
        return axios.get("http://localhost:8080/user/cart/"+id).then(
            resp=>
            
            {
                console.log(resp)
                console.log("welcome")
                dispatch(
                    {
                        type:"cart/get",
                        payload:resp.data
                    }
                )
            }
        )
    }
}



export function placeOrder(id,payload)
{
    return(dispatch) =>
    {
        return axios.post("http://localhost:8080/order/checkout/"+id,payload).then(
            resp=>
            
            {
                
                dispatch(
                    {
                        type:"place/order",
                        payload:resp.data
                    }
                )
            }
        )
    }
}

export function fetchOrder(id)
{
    return(dispatch) =>
    {
        return axios.get("http://localhost:8080/user/orders/"+id).then(
            resp=>
            
            {
              
                dispatch(
                    {
                        type:"order/get",
                        payload:resp.data
                    }
                )
            }
        )
    }
}
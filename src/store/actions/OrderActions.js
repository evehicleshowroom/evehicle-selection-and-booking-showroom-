import axios from 'axios';

export function placeOrder(id,payload)
{
    return(dispatch) =>
    {
        return axios.put("http://localhost:8080/order/checkout/"+id,payload).then(
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
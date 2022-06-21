const initialState={
    cart:null,
    carts:[],
    usercart:null,
    order :null,
    userorder:null
}

export default function CartReducer(state=initialState,action)
{
    if(action.type === 'cart/item')
    {
        return ({
            ...state,
            cart : action.payload
        })
    }

    if(action.type==='cart/get')
    {
        console.log(action.payload)
        return ({
          
            ...state,
            usercart : action.payload
        })
    }
    if(action.type==='place/order')
    {
        return(
            {
                ...state,
                order:action.payload
            }
        )
    }
    if(action.type==='order/get')
    {
        return(
            {
                ...state,
                userorder:action.payload
            }
        )
    }

    else {
        return state;
    }
}
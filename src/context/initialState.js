import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();

console.log(cartInfo);

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
}

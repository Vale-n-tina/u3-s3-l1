
import { GET_WORKS } from "../Actions"

const initialState = {
    inStock: [], 
   
  }
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WORKS:
        return {
          ...state,
          inStock: action.payload,
        }
  
      
  
      default:
        return state
    }
  }
  
  export default bookReducer
  
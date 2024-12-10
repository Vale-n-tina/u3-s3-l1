export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_CART = "DELETE_CART";
export const GET_WORKS="GET_WORKS"

export const removeCart = (i) => {
  return {
    type: DELETE_CART,
    payload: i,
  };
};

export const addCart=(data)=>{
    return{
        type: ADD_TO_CART,
          payload:data
    }
}

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="

export const getBooksAction = (query) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
              const data  = await response.json();
              
              dispatch({
                type: GET_WORKS,
                payload:data.data

              })
            } else {
              alert("Error fetching results");
            }
          } catch (error) {
            console.log(error);
          }
        };
      
      }
  
      

  
  
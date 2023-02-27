
export const countries =  (state =  [{
    id:0,
    text:"Please select a country"
}] , action) => {
    switch (action.type) {
        case "SET":
            return action.payload            
            break;
    
        default:
            return state
        
    }
}
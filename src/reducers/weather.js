export const weather =  (state =  {} , action) => {
    switch (action.type) {
        case "SETWEATHER":
            return action.payload        
    
        default:
            return {    }
        
    }
}
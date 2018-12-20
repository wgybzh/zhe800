
const defaultState = {
        navList:[]
} 
export default (state = defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "GET_DATA_FULFILLED":
            let navState = JSON.parse(JSON.stringify(state));
            navState.navList = action.payload
            return navState
    }
    return state
}


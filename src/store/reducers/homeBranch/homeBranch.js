const defaultState = {
    navList:[],
    idList:[]
} 
export default (state = defaultState,action)=>{
    //console.log(action)
// eslint-disable-next-line default-case
switch(action.type){
   
        case "GET_DATA_FULFILLED":
            let navState = JSON.parse(JSON.stringify(state));
            navState.navList = action.payload
            return navState;
    
    case "GET_DATA_ID_FULFILLED":
        let idState = JSON.parse(JSON.stringify(state));
        idState.idList = action.payload
        return idState
}
return state
}


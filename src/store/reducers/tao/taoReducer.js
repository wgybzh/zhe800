

const defaultState = {
   getList:[],
   page:20,
   flag:false
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "GET_DATA_FULFILLED":
        let getListState = JSON.parse(JSON.stringify(state));
        getListState.getList = action.payload;
        return getListState;
    case "GET_MORE_DATA_FULFILLED":
        let getMoreListState = JSON.parse(JSON.stringify(state));
        getMoreListState.getList = [...getMoreListState.getList,...action.payload];
        getMoreListState.page+=20;
        return getMoreListState;
    case "TO_TOP":
        let toTopState = JSON.parse(JSON.stringify(state));
            if(action.value===1){
                toTopState.flag = true
            }else if(action.value===2){
                toTopState.flag = false
            }
        return toTopState;  

        default:  
    }
    return state;
}
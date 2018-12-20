const defaultState = {
    homeDealList:[]
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "DEALLIST_FULFILLED":
        let homeDealListState = JSON.parse(JSON.stringify(state));
        homeDealListState.homeDealList = action.payload.objects;
        return homeDealListState;
        default:
    }
    return state;
}
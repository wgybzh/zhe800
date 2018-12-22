const defaultState = {
    homeNavList:[],
    homeDealList:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "DEALLIST_FULFILLED":
        let homeDealListState = JSON.parse(JSON.stringify(state));
        homeDealListState.homeDealList = action.payload.objects;
        return homeDealListState;

        case "HOMENAV_FULFILLED":
        let homeNavState = JSON.parse(JSON.stringify(state));
        homeNavState.homeNavList = action.payload;
        return homeNavState;
        default:
    }
    return state;
}
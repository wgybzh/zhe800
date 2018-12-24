const defaultState = {
    homeNavList:[],
    homeDealList:[],
    page:20,
    dealId:""
}

export default (state=defaultState,action)=>{
  // console.log(action.type)
    switch(action.type){
        case "DEALLIST_FULFILLED":
        let homeDealListState = JSON.parse(JSON.stringify(state));
        homeDealListState.homeDealList = action.payload.objects;
        homeDealListState.dealId = action.payload.id;
        return homeDealListState;

        case "HOMENAV_FULFILLED":
        let homeNavState = JSON.parse(JSON.stringify(state));
        homeNavState.homeNavList = action.payload;
        return homeNavState;

        case "MOREDEALLIST_FULFILLED":
        let MoreHomeDealListState = JSON.parse(JSON.stringify(state));
        MoreHomeDealListState.homeDealList = [... MoreHomeDealListState.homeDealList,...action.payload.objects];
        MoreHomeDealListState.page +=20;
        return  MoreHomeDealListState;
        
        case "FLAG_TOGGLE":
        let flagState = JSON.parse(JSON.stringify(state));
        if (action.value == 1) {
            flagState.flag = true;
        } else {
            flagState.flag = false;
        }
        return flagState;

       
        default:
    }
    return state;
}
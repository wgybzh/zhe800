
const defaultState = {
        navList:[],
        list:[]
} 
export default (state = defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "GET_DATA_FULFILLED":
            let navState = JSON.parse(JSON.stringify(state));
            navState.navList = action.payload
            return navState
        case "GET_List_FULFILLED":
            let list = JSON.parse(JSON.stringify(state));
                list.list=action.payload
            return list
    }
    return state
}


const defautState = {
    list:[]
}
export default (state = defautState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "GET_LICKCAR_FULFILLED":
            let getState = JSON.parse(JSON.stringify(state))
            getState.list = action.payload
            //console.log(action.payload)
            return getState
    }
    return state
}
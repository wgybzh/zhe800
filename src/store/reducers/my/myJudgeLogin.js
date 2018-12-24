
const defaultState = {
    phone:"",
    pwd:"",
    flag:false,
    list:[]
} 
export default (state = defaultState,action)=>{
   // console.log(action)
// eslint-disable-next-line default-case
switch(action.type){
    case "MY_PHONE" :
        let phoneState = JSON.parse(JSON.stringify(state));
        // eslint-disable-next-line default-case
        switch(action.index){
            case 1 :
                phoneState.phone = action.value;
                sessionStorage.setItem("phone",phoneState.phone)
                break
               // return phoneState
            case 2 :
                phoneState.pwd = action.value;
                sessionStorage.setItem("pwd",phoneState.pwd)
                break
               // return phoneState
        }
        return phoneState;
    case "MY_CONFIRM":
        let confrimState = JSON.parse(JSON.stringify(state));
        confrimState.list.push(confrimState.phone)
       
        return confrimState
   /*  case "JUDGE_LOGIN":
        let flagState = JSON.parse(JSON.stringify(state));
        flagState.navList = action.value
        return flagState */
    }
    return state
}


import fetchJsonp from "fetch-jsonp"
export const myJudgeLoginAction = (val)=>({
    type:"JUDGE_LOGIN",
    value:val
})
export const myPhoneAction = (val,index)=>({
    type:"MY_PHONE",
    value:val,
    index:index
})
export const confirmAction = ()=>({
    type:"MY_CONFIRM"
})
export const fetchJsonpAction = ()=>({
    type:"MY_CONFIRM"
})
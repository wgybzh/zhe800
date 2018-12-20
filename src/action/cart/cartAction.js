//https://m.api.zhe800.com/list/detail?channel=5&client_type=3&vtype=branddetail&ids=53577660%2C53577680%2C53577675%2C53577658%2C53577682%2C53577690%2C53577702%2C53577696%2C53577715%2C53577681%2C53577663%2C53577669%2C53577705%2C53577717%2C53577686%2C53577695%2C53577733%2C53577724%2C53577723%2C53577726%2C53577719&callback=getBrandDetailIds0
import fetchJsonp from "fetch-jsonp"
export const get_car_action = (dispatch)=>{
    let url = "https://m.api.zhe800.com/list/detail?channel=5&client_type=3&vtype=branddetail&ids=53577660%2C53577680%2C53577675%2C53577658%2C53577682%2C53577690%2C53577702%2C53577696%2C53577715%2C53577681%2C53577663%2C53577669%2C53577705%2C53577717%2C53577686%2C53577695%2C53577733%2C53577724%2C53577723%2C53577726%2C53577719"
    dispatch({
        type:"GET_LICKCAR",
        payload:new Promise(resolve=>{
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                resolve(data)
            })
        })
    })
}
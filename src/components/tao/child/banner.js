import React,{Component} from 'react'

export default class TaoBanner extends Component{
    render(){
        let {listImg} = this.props
        return  (
            <div className="TaoBanner">
                    {
                        listImg.map((item,index)=>{
                            return <div key={index} >
                                <img src={item.image_url} />
                            </div>
                        })
                    }
            </div>
        )
    }
}
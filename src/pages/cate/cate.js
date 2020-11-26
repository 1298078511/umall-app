import Header from "../../components/Header/Header"
import "./cate.styl"
import {reqCate} from "../../utils/http"
import React, { Component } from 'react'
export default class cate extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            n: 0
        }
    }
  
    componentDidMount(){
        reqCate().then(res=>{
            this.setState({
                data:res.data.list
            })
        })
    }
    changeN(index){
        this.setState({
            n:index
        })
    }
    toList(name,id){
        this.props.history.push("/list/"+name+"/"+id)
    }
    render() {
        let {data,n} = this.state
        let rightList=data[n]? data[n].children:[]
        return (
            <div className="catecont"> 
               <Header title="分类"></Header>
               <div className="cate">
                    <div className="left">
                        {
                            data.map((item,index)=>{
                                return <div onClick={()=>
                                this.changeN(index)} className={index===n?'select':''} key={item.id}>
                                    {item.catename}
                                </div>
                            })
                        }
                    </div>
                    <div className="right">
                        {
                            rightList.map(item=>{
                                return (
                                    <div className="item" key={item.id} onClick={()=>this.toList(item.catename,item.id)}>
                                        <div className="con">
                                            <img src={item.img} alt="" />
                                            <div>
                                                {item.catename}
                                            </div>
    
                                        </div>
    
                                    </div>
                                )
                            })
                        }
                    </div>
               </div>
            </div>
        )
    }
}


import React from 'react'
import {Link} from "react-router-dom"
import "./list.styl"
export default function list(props) {
    let {goods}=props
    return (
        <div className="list">
          {
              goods.map(item=>{
                  return(
                      <Link to={"/detail?id=" +item.id} className="list-item" key={item.id}>
                         
                          <p className="pimg">
                              <img  src={item.img} className="imgs"/>
                          </p>
                         <div className="Imgcon">
                             <h3>{item.goodsname}</h3>
                             <h4>￥{item.price}</h4>
                            <div className="btns">
                              立即抢购
                          </div>
                         </div>
                      </Link>
                  )
              })
          }
        </div>
    )
}

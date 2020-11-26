import React from 'react'
import { filterPrice } from "../../../filters/index"
export default function Info(props) {
    let { detail } = props;
    return (
        <div className="goodscont">
            <h3>{detail.goodsname}</h3>
            <div className="goodslist1">现价：￥{filterPrice(detail.price)}</div>
            <div className="goodslist2">原价：￥{filterPrice(detail.market_price)}</div>

            {
                detail.isnew === 1 ? <div className="goodslist3"> 新品</div> : null
            }
            {
                detail.ishot === 1 ? <div className="goodslist3">热卖</div> : null
            }

        </div>


    )
}

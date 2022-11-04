import React from 'react'
import PropType from 'prop-types'
import './css/product.css'

const ProductCard = ({ n1, n2, n3, p1, p2, size = [], color = [] }) => {

    const listofSize = size.map(x => {
        return <li className="bg">{x}</li>
    })

    const listofColor = color.map(x => {
        return <li className={x}></li>
    })





    return (
        <div className="card">
            <div className="left">
                <img src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" alt="shoe" />
                <i className="fa fa-long-arrow-left"></i>
                <i className="fa fa-long-arrow-right"></i>
            </div>
            <div className="right">
                <div className="product-info">
                    <div className="product-name">
                        <h1>{n1}</h1>
                        <i className="fa fa-search"></i>
                        <i className="fa fa-user"></i>
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                    <div className="details">
                        <h3>{n2}</h3>
                        <h2>{n3}</h2>
                        <h4><span className="fa fa-dollar"></span>{p1}</h4>
                        <h4 className="dis"><span className="fa fa-dollar"></span>{p2}</h4>
                    </div>
                    <ul>
                        <li>SIZE</li>
                        {listofSize}
                        {/* <li className="bg">{size[0]}</li>
                        <li className="bg">{size[1]}</li>
                        <li className="bg">{size[2]}</li>
                        <li className="bg">{size[3]}</li>
                        <li className="bg">{size[4]}</li>
                        <li className="bg">{size[5]}</li>
                         */}
                    </ul>
                    <ul>
                        <li>COLOR</li>
                        {listofColor}
                        {/* <li className={color[0]}></li>
                        <li className={color[1]}></li>
                        <li className={color[2]}></li> */}
                    </ul>
                    <span className="foot"><i className="fa fa-shopping-bag"></i>Buy Now</span>
                    <span className="foot"><i className="fa fa-shopping-cart"></i>Add TO Cart</span>
                </div>
            </div>
        </div>

    )

}

ProductCard.defaultProps = {
    n1: 'Reboke',
    n2: 'Summer Collection',
    n3: 'Desc There',
    p1: 100,
    p2: 200,
    size: [1],
    color: ['yellow', 'blue']

}

ProductCard.PropType = {
    n1: PropType.string.isRequired,
    n2: PropType.string.isRequired,
    n2: PropType.string,
    p1: PropType.number.isRequired,
    p2: PropType.number.isRequired,
    size: PropType.arrayOf(PropType.number).isRequired,
    color: PropType.arrayOf(PropType.string).isRequired,
}
export default ProductCard
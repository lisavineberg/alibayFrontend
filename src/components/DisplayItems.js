import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import Item from './Item.js'

/*this page receives items from the buyHomepage (where the user searches for an item/asks to see all
items for sale). The itemsto be displayed have been sent as props. */

function getPicIndex(i, maxNumber){
    return i % maxNumber
}

let pictures = ['/../images/album0.png',
'./images/album1.png',
'./images/album2.png',
'./images/album3.png',
'./images/album4.png', 
'./images/album5.png',
'./images/album6.png',
'./images/album7.png',
'./images/album8.png']

class DisplayItemsBasic extends Component {
    constructor(props) {
        super(props)
        this.displayItems = this.displayItems.bind(this)
       
    }


   

    displayItems() {
      return  this.props.items.map((item, index) => {
          let newIndex = getPicIndex(index, pictures.length)
          let bgImg = pictures[newIndex]
          let myStyle = {backgroundImage: 'url(' + bgImg +')', backgroundSize: 'cover'}
         return    (
                <div className='itemInList'
                style={myStyle} >
                    <div>For sale! {item.itemName} </div>
                    <div>Description: {item.description} </div>
                    <div>Price: {item.price} </div>
                    <div><Link to={'/itemDetail/' + item.itemId}>Link to listing</Link></div>
                </div>
            )
        })

    }

    render() {
        return (
            <div className='holdingItems'>
              
                {this.displayItems()}
               
            </div>
        )
    }

}

let DisplayItems = withRouter(DisplayItemsBasic)
export default DisplayItems
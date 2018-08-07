import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Item from './Item.js';
import album0 from '../images/album0.png';
import album1 from '../images/album1.png';
import album2 from '../images/album2.png';
import album3 from '../images/album3.png';
import album4 from '../images/album4.png';
import album5 from '../images/album5.png';
import album6 from '../images/album6.png';
import album7 from '../images/album7.png';



/*this page receives items from the buyHomepage (where the user searches for an item/asks to see all
items for sale). The itemsto be displayed have been sent as props. */

function getPicIndex(i, maxNumber){
    return i % maxNumber
}

let pictures = [album0,
album1, album2, album3, album4, album5, album6, album7]

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
         
         if(newIndex === 0 || newIndex === 1 || newIndex === 4 || newIndex === 5) {
             myStyle['color'] = 'darkblue'
         } else {
            myStyle['color'] = 'lightpink'
         }
         
         
          return    (
                <div className='itemInList'
                style={myStyle} >
                    <div className='itemInListName'>For sale! {item.itemName} </div>
                    
                    <div className='itemInListLink'><Link to={'/itemDetail/' + item.itemId}>Link to listing</Link></div>
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
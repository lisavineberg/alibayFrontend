import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Item from './Item.js';
import album0 from '../images/book1.JPG';
import album1 from '../images/book2.JPG';
import album2 from '../images/book3.JPG';
import album3 from '../images/book4.JPG';
import album4 from '../images/book5.JPG';
import album5 from '../images/book6.JPG';
import album6 from '../images/book7.JPG';
import album7 from '../images/book8.JPG';
import album8 from '../images/book9.JPG';



/*this page receives items from the buyHomepage (where the user searches for an item/asks to see all
items for sale). The itemsto be displayed have been sent as props. */

function getPicIndex(i, maxNumber){
    return i % maxNumber
}

let pictures = [album0,
album1, album2, album3, album4, album5, album6, album7, album8]

class DisplayItemsBasic extends Component {
    constructor(props) {
        super(props)
        this.displayItems = this.displayItems.bind(this)
       
    }


   

    displayItems() {
        console.log(this.props.items)
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
                    
                    <div className='itemInListLink'><Link to={'/itemDetail/' + item}>Link to listing</Link></div>
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
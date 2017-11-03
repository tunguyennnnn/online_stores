import React from 'react'
import { Grid, Card, Image, Divider } from 'semantic-ui-react'

export default class Item extends React.Component {
  render () {
    const {belongToCurrentUser, ownerName, editPost} = this.props
    const {imageUrl, title, description, price, postDate, completed, address, phoneNumber, adType, forSaleBy} = this.props.itemInfo
    return (
        // <div class='col s12 m4'>
        //   <div class='ui items'>
        //     <div class='item'>
        //       <div class='image'>
        //         <img src={imageUrl} />
        //       </div>
        //       <div class='content'>
        //         <a class='header'>{title}</a>
        //         <div class='meta'>
        //           <span>Price: {`${price} CAD`}</span>
        //         </div>
        //         <div class='meta'>
        //           <span>Address: {address} </span>
        //         </div>
        //         <div class='meta'>
        //           <span>Phone number: {phoneNumber}</span>
        //         </div>
        //         <div class='description'>
        //           <p>{description}</p>
        //         </div>
        //         <div class='extra'>
        //           Additional Details
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      <div class='card'>
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
          <Divider horizontal />
          <Card.Meta style={{color: '#78909c'}}>Price: {`${price} CAD`}</Card.Meta>
          <Card.Meta style={{color: '#78909c'}}>Address: {address} </Card.Meta>
          <Card.Meta style={{color: '#78909c'}}>Phone number: {phoneNumber} </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div class='card-action'>
            <span>Status: </span><span>{completed ? 'Sold' : 'Available'}</span>
            <br />
            <span>
              {
                belongToCurrentUser
                  ? completed ? null : <a onClick={editPost.bind(null, this.props.itemInfo)}>Edit</a>
                  : <a href='#'>{ownerName}</a>
              }
              <a href='#'>More</a>
            </span>
          </div>
        </Card.Content>
      </div>
    )
  }
}

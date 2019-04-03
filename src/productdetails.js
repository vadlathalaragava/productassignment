import React, { Component } from 'react';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (







 
<div>
<table id="customers">
   
  <tr>
  <td>{this.props.details.name}</td>

     <td> <img src={this.props.details.largeImage} /></td>
    <td>{this.props.details.itemId}</td>
    <td>{this.props.details.salePrice}</td>
    <td><i class="fa fa-plus-circle btn-add" onClick={()=>{
        this.props.add();
        }}></i>
    </td>
    <td><i class="fa fa-trash btn-red" onClick={
        ()=>{
            this.props.remove();
        }
    }></i>
    </td>
     
  </tr> <br/>
  
</table>

</div>






            
        )
    }
}

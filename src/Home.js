
import React from 'react';
import ListingProduct from './listingProduct';
import GetData from './db';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import ShowCart from './showCart';
class Home extends React.Component {

constructor(){
    super();
    let newData =GetData();
    this.state={
        productData:newData,
        cartData:[],
        sorting:0,        
    }
    this.shortBy=this.shortBy.bind(this);
    this.showCart=this.showCart.bind(this);
    this.addToCart=this.addToCart.bind(this);
    
    
}

shortBy(){

}
showCart(){


}
addToCart(P){
console.log("this add to cart is called",P)
let x=this.state.cartData;
x.push(P);
this.setState({
    cartData:x,
})
}
  


// componentDidMount(){
//     let newData =<GetData/>;
//     this.setState({
//         productData:newData,
//     })
// //     fetch('http://localhost:3001/Products')
// // // We get the API response and receive data in JSON format...
// // .then(response => response.json())
// // // ...then we update the users state
// // .then(data =>
// //   this.setState({
// //     productData: data,
    
// //   })
// // )
// // // Catch any errors we hit and update the app
// // .catch(function (error) {
// //         console.log(error);
// //     });



// }

    
  render(){
    // const classes = useStyles();
    let b={
        float:"right"
    }
 return(
 <div className="App">
    <div>
       <center> <h1> MY Store</h1></center>
       <Link to={`/showCart/${this.state.productData}`}><Button variant="contained" color="primary">CART</Button></Link>
       
    </div>
    <hr/>
    <div>
    <ListingProduct d={this.state.productData.products} addInCart={this.addToCart}/>
    </div>
    </div>
 )
  }
}

export default Home;

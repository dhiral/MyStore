import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function addInCart(tile,addCart){
   return addCart(tile);
}

var ListingProduct=(props) => {
  console.log("Productlist:",props.d)
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">My Store</ListSubheader>
        </GridListTile>
        {props.d.map((tile) => (
          <GridListTile key={tile.imgsrc}>
            <img src={tile.imgsrc} alt={tile.name} />
            <Button onClick={() => { alert('clicked') }}>Click me</Button> 
            <GridListTileBar
              title={tile.name}
              subtitle={<span>{tile.price} {tile.currency}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`} className={classes.icon} onClick={
                    (evt) => {
                        evt.stopPropagation();
                        return props.addInCart(tile)
                    }}>
                    <ShoppingCartTwoToneIcon />
                  
                </IconButton>
              }
            />
            
          </GridListTile>
          
        ))}
      </GridList>
    </div>
  );
}

export default ListingProduct;


   
// var ListingProduct=(d)=>{
   
//     return(
//         <p>
//             {console.log("listing")}
//             {console.log(d)}
//           done
//         </p>
//     )
    
// }
// export default ListingProduct;
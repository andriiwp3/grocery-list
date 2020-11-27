import classes from "./Product.module.css"
import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import { Redirect } from "react-router-dom"

const Product = (props) => {
   if (props.product[0]) {
      return (
         <div className={classes.Product}>
            <ProductCard
					single={true}
               id={props.product[0].id}
               name={props.product[0].name}
               ended={props.product[0].ended}
               priority={props.product[0].priority}
					history={props.product[0].statusChangeHistory}
               onDelete={props.onDelete}
               onChangePriority={props.onChangePriority}
               onChangeStatus={props.onChangeStatus}
					onChangeName={props.onChangeName}
            />
         </div>
      )
   } else {
 		return <Redirect to="/" />
   }
}

export default Product

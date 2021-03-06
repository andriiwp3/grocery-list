import { NavLink } from "react-router-dom"
import classes from "./ProductCard.module.css"
import StatusChangeHistory from "./StatusChangeHistory/StatusChangeHistory"

const ProductCard = (props) => {
   return (
      <div className={classes.ProductCard}>
         <div className={classes.info}>
            <input
               className={classes.name}
               type="text"
               value={props.name}
               placeholder="Type product name"
               onBlur={(e) => {
                  if (e.target.value === "") {
                     props.onDelete(props.id)
                  }
               }}
               onChange={(e) => props.onChangeName(e.target.value, props.id)}
            />
            <div className={classes.status}>
               {props.ended ? (
                  <span className={classes.ended}>Ended</span>
               ) : (
                  <span>We have</span>
               )}
            </div>
            <div className={classes.priority}>
               Priority:
               <input
                  type="text"
                  value={props.priority}
                  onChange={(e) => {
                     props.onChangePriority(e.target.value, props.id)
                  }}
                  onBlur={(e) => {
                     if (e.target.value === "") {
                        props.onChangePriority(5, props.id)
                     }
                  }}
               />
            </div>
         </div>

         <div className={classes.actions}>
            <button
               className={classes.btn}
               onClick={(e) => {
                  props.onDelete(props.id)
               }}
            >
               Delete
            </button>
            <button
               className={classes.btn}
               onClick={(e) => {
                  props.onChangeStatus(props.id)
               }}
            >
               Change status
            </button>
            {props.single ? (
               ""
            ) : (
               <NavLink className={classes.btn} to={`/${props.id}`}>
                  See more
               </NavLink>
            )}
         </div>

         {props.history ? (
            <div className={classes.history}>
               {props.history.map((change, index) => {
                  return (
                     <StatusChangeHistory
								key={index}
                        time={change.time}
                        oldStatus={change.oldStatus}
                        newStatus={change.newStatus}
                     />
                  )
               })}
            </div>
         ) : (
            ""
         )}
      </div>
   )
}
export default ProductCard

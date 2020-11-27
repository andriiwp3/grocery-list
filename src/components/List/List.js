import ProductCard from "../ProductCard/ProductCard"
import classes from "./List.module.css"

const List = (props) => {
   return (
      <div className={classes.List}>
         <h1 className={classes.title}>Products List</h1>

         <div className={classes.header}>
            <form
               onSubmit={(e) => {
                  e.preventDefault()
                  props.onAddProduct()
               }}
               className={classes.add}
            >
               <input
                  type="text"
                  value={props.productsList.newProductInfo.value}
                  placeholder="Product Name"
                  onChange={props.onChange}
               />
               <input
                  type="text"
                  value={props.productsList.newProductInfo.priority}
                  onChange={(e) => {
                     props.onChangePriority(e.target.value, "new")
						}}
						placeholder='Priority (1 to 5)'
               />
               <div className={classes.checkbox}>
                  <span>Ended?</span>
                  <input
                     type="checkbox"
                     value="off"
                     onChange={() => {
                        props.onChangeStatus()
                     }}
                  />
               </div>
               <button type="submit">Add product</button>
            </form>
         </div>

			<div className={classes.sorting}>
				<div className={classes.status}>
					<button onClick={() => {props.onChangeStatusSortParam('all')}}>All</button>
					<button onClick={() => {props.onChangeStatusSortParam(false)}}>We have</button>
					<button onClick={() => {props.onChangeStatusSortParam(true)}}>Ended</button>
				</div>
				<div className={classes.otherParams}>
					<button onClick={props.onSortByPriority}>By Priority</button>
					<button onClick={props.onSortByAlphabet}>By Alphabet</button>
				</div>
			</div>

         <ul className={classes.productsList}>
            {props.productsList.products.map((product, index) => {
					if(props.productsList.statusSortParam === 'all' || product.ended === props.productsList.statusSortParam) {
               return (
                  <ProductCard
							single={false}
							key={index}
							index={index}
                     id={product.id}
                     name={product.name}
                     ended={product.ended}
                     priority={product.priority}
                     onDelete={props.onDelete}
                     onChangePriority={props.onChangePriority}
                     onChangeStatus={props.onChangeStatus}
                     onChangeName={props.onChangeName}
                  />
               )} else { return null}
            })}
         </ul>
      </div>
   )
}
export default List

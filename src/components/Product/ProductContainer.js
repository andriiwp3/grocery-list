import { connect } from "react-redux"
import { deleteProduct, changePriority, changeStatus, changeName } from "../../redux/reducers/productsReducer"
import Product from "./Product"

const mapStateToProps = (state) => {
	return {
		product: state.productsList.products.filter(product => {
			if ('/' + product.id == window.location.pathname) {
				return true
			} else {
				return false
			}
		})
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: (id) => {
			dispatch(deleteProduct(id))
		},
		onChangePriority: (value, id) => {
			dispatch(changePriority(value, id))
		},
		onChangeStatus: (id) => {
			dispatch(changeStatus(id))
		},
		onChangeName: (value, id) => {
			dispatch(changeName(value, id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
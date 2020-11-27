import { connect } from "react-redux"
import { deleteProduct, changePriority, changeStatus, updateNewProductInfo, addProduct, changeName, changeStatusSortParam, sortByPriority, sortByAlphabet } from "../../redux/reducers/productsReducer"
import List from "./List"

const mapStateToProps = (state) => {
	return {
		productsList: state.productsList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onAddProduct: (name, priority, ended) => {
			dispatch(addProduct())
		},
		onDelete: (id) => {
			dispatch(deleteProduct(id))
		},
		onChange: (e) => {
			dispatch(updateNewProductInfo(e.target.value))
		},
		onChangePriority: (value, id) => {
			dispatch(changePriority(value, id))
		},
		onChangeStatus: (id) => {
			dispatch(changeStatus(id))
		},
		onChangeName: (value, id) => {
			dispatch(changeName(value, id))
		},
		onChangeStatusSortParam: (sortStatus) => {
			dispatch(changeStatusSortParam(sortStatus))
		},
		onSortByPriority: () => {
			dispatch(sortByPriority())
		},
		onSortByAlphabet: () => {
			dispatch(sortByAlphabet())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
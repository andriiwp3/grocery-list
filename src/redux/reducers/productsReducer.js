const ADD_NEW_PRODUCT = "ADD-NEW-PRODUCT"
const DELETE_PRODUCT = "DELETE-PRODUCT"
const UPDATE_NEW_PRODUCT = "UPDATE-NEW-PRODUCT"
const CHANGE_PRIORITY = "CHANGE-PRIORITY"
const CHANGE_STATUS = "CHANGE-STATUS"
const CHANGE_NAME = "CHANGE-NAME"
const CHANGE_STATUS_SORT_PARAM = "CHANGE-STATUS-SORT-PARAM"
const SORT_BY_PRIORITY = "SORT-BY-PRIORITY"
const SORT_BY_ALPHABET = "SORT-BY-ALPHABET"

const initialState = {
   statusSortParam: "all",
   newProductInfo: {
      value: "",
      priority: 5,
      ended: false,
   },
   products: [
      {
         id: 232132,
         name: "egg",
         ended: false,
         priority: 3,
         statusChangeHistory: [],
      },
      {
         id: 23034,
         name: "apple",
         ended: true,
         priority: 5,
         statusChangeHistory: [],
      },
   ],
}

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_PRODUCT:
         return {
            ...state,
            newProductInfo: { ...state.newProductInfo, value: action.value },
         }
      case ADD_NEW_PRODUCT:
         if (state.newProductInfo.value !== "") {
            let newState = {
               ...state,
               newProductInfo: {
                  value: "",
                  priority: 5,
                  ended: false,
               },
               products: [
                  ...state.products,
                  {
                     id: Date.now(),
                     name: state.newProductInfo.value,
                     ended: state.newProductInfo.ended,
                     priority: state.newProductInfo.priority || 5,
                     statusChangeHistory: [],
                  },
               ],
            }
            return newState
         } else {
            return { ...state }
         }
      case CHANGE_PRIORITY:
         if (
            action.value === "" ||
            (typeof +action.value === "number" &&
               +action.value > 0 &&
               +action.value < 6)
         ) {
            if (action.id !== "new") {
               let products = [...state.products].map((product) => {
                  if (product.id === action.id) {
                     product.priority = action.value
                  }
                  return { ...product }
               })
               return { ...state, products }
            } else {
               return {
                  ...state,
                  ...(state.newProductInfo.priority = action.value),
               }
            }
         } else {
            return {
               ...state,
            }
         }
      case CHANGE_STATUS:
         if (action.id !== undefined) {
            let products = [...state.products].map((product) => {
               if (product.id === action.id) {
                  let currentDate = new Date()
                  product.ended = !product.ended
                  product.statusChangeHistory = [
                     ...product.statusChangeHistory,
                     {
                        time: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${currentDate.getDay()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`,
                        oldStatus: product.ended ? "We have" : "Ended",
                        newStatus: product.ended ? "Ended" : "We have",
                     },
                  ]
               }
               return { ...product }
            })
            return { ...state, products }
         } else {
            let currentNewProductInfo = { ...state.newProductInfo }
            currentNewProductInfo.ended = !currentNewProductInfo.ended
            return { ...state, newProductInfo: currentNewProductInfo }
         }
      case DELETE_PRODUCT:
         let products = [...state.products].filter((product) => {
            if (product.id === action.id) {
               product.priority = action.value
               return false
            } else {
               return true
            }
         })
         return {
            ...state,
            products,
         }
      case CHANGE_NAME:
         let newProducts = [...state.products].map((product) => {
            if (product.id === action.id) {
               product.name = action.value
            }
            return { ...product }
         })
         return { ...state, products: newProducts }
      case CHANGE_STATUS_SORT_PARAM:
         let newState = { ...state }
         newState.statusSortParam = action.sortParam
         return { ...newState }
      case SORT_BY_PRIORITY:
         let sortedByPriorityProducts = [...state.products].sort((a, b) => {
            return a.priority - b.priority
         })
         return { ...state, products: sortedByPriorityProducts }
      case SORT_BY_ALPHABET:
         let sortedByAlphabetProducts = [...state.products].sort((a, b) => {
            if (a.name < b.name) {
               return -1
            } else if (a.name > b.name) {
               return 1
            } else {
               return 0
            }
         })
         return { ...state, products: sortedByAlphabetProducts }

      default:
         return { ...state }
   }
}

export default productsReducer

export const addProduct = () => ({
   type: ADD_NEW_PRODUCT,
})
export const deleteProduct = (id) => ({
   type: DELETE_PRODUCT,
   id,
})
export const updateNewProductInfo = (value) => ({
   type: UPDATE_NEW_PRODUCT,
   value,
})
export const changePriority = (value, id) => ({
   type: CHANGE_PRIORITY,
   value,
   id,
})
export const changeStatus = (id) => ({
   type: CHANGE_STATUS,
   id,
})
export const changeName = (value, id) => ({
   type: CHANGE_NAME,
   value,
   id,
})
export const changeStatusSortParam = (sortParam) => ({
   type: CHANGE_STATUS_SORT_PARAM,
   sortParam,
})
export const sortByPriority = () => ({
   type: SORT_BY_PRIORITY,
})
export const sortByAlphabet = () => ({
   type: SORT_BY_ALPHABET,
})

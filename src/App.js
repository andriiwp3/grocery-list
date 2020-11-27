import { Route, Switch } from "react-router-dom"
import classes from "./App.module.css"
import ListContainer from "./components/List/ListContainer"
import ProductContainer from "./components/Product/ProductContainer"

function App() {
   return (
      <Switch>
         <Route exact path="/">
            <ListContainer />
         </Route>
         <Route path="/:id">
            <ProductContainer />
         </Route>
      </Switch>
   )
}

export default App

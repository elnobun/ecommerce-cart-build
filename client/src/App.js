import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import ProductPage from './Pages/Product/ProductPage'
import CartPage from './Pages/Cart/CartPage'
import Navbar from './components/Navbar/Navbar'

function App () {
    return (
        <Router>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route  path="/products/:id" component={ProductPage}/>
                    <Route  path="/cart" component={CartPage}/>
                </Switch>
            </main>
        </Router>
    )
}

export default App

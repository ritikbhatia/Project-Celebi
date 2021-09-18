import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faTrashAlt,
    faEdit,
    faCog,
    faSyncAlt,
    faChevronDown,
    faChevronRight,
    faDownload,
    faCheck,
    faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { render } from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import promiseMiddleware from "redux-promise-middleware"
import reducer from "./redux/reducers"
import App from "./containers/App"
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./containers/Home"
// import { ChakraProvider } from "@chakra-ui/core";

// configure fontawesome
const icons = [faTrashAlt, faEdit, faCog, faSyncAlt, faChevronDown, faChevronRight, faDownload, faCheck, faTimes]
icons.forEach(icon => {
    library.add(icon)
})

// create redux store with root reducer and middleware stack
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle
// const store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware())))

render(

            <BrowserRouter>
                <App />
                <Switch>
                    <Route exact path='/home' component={Home} />
                </Switch>
            </BrowserRouter>,
        

    document.getElementById("root")
)



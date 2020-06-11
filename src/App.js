import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
/* import Basket from "./components/Basket"; */
import store from "./store";
import "./App.css";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
/* import Copyright from "./components/Copyright"; */
const components = [
    {
        position: {
            bottom: 0,
            left: 0,
        },
        event: 'hover',
        alwaysShowTitle: true,
        mainButtonStyles: {
            backgroundColor: '#27ae60',
        },
        actionButtonStyles: {
            backgroundColor: '#16a085',
        },
    },
    {
        position: {
            top: 0,
            right: 0,
        },
        event: 'click',
        mainButtonStyles: {
            backgroundColor: '#9b59b6',
        },
        actionButtonStyles: {
            backgroundColor: '#8e44ad',
        },
    },
    {
        position: {
            top: 0,
            left: 0,
        },
        event: 'hover',
        mainButtonStyles: {
            backgroundColor: '#95a5a6',
            color: '#34495e',
        },
        actionButtonStyles: {
            backgroundColor: '#696969',
            color: '#27ae60',
        },
    },
    {
        position: {
            bottom: 0,
            right: 0,
        },
        event: 'click',
        mainButtonStyles: {
            backgroundColor: '#e74c3c',
        },
        actionButtonStyles: {
            backgroundColor: '#ffffff',
            color: '#34495e',
        },
    },
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="col-md-10">
              <img src="logo.png" alt="Lemonade - Mi tienda de ropa online" className="responsive"/>
          </div>
          <div className="col-md-2">
              {/* <Basket /> */}
              <Fab
                  mainButtonStyles={components.mainButtonStyles}
                  actionButtonStyles={components.actionButtonStyles}
                  position={components.position}
                  icon="+"
                  event={components.event}
              >
                  <Action
                    text="Action"
                    onClick={() => console.log("CM:: action")}
                  />
              </Fab>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <Filter />
              <hr />
              <Products />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import { StyleSheet } from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import MainContainer from "./src/containers/MainContainer/MainContainer";
import rootReducer from './src/store/reducers/root-reducer';

const rootReducers = combineReducers({
    getReducer: rootReducer,
});

const store = createStore(
    rootReducers,
    applyMiddleware(thunkMiddleware)
);

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <MainContainer/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewItem from './Components/NewItem/NewItem';
import ItemList from './Components/ItemList';
import TodoNav from './Components/TodoNav';
import StartPage from './Components/StartPage/StartPage';

export default () => {
  return (
    <div className="app">
      <BrowserRouter>
        <TodoNav />
        <Route path="/" component={StartPage} exact />
        <Route path="/new-item" component={NewItem} />
        <Route path="/items" component={ItemList} />
      </BrowserRouter>
    </div>
  );
};

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewItem from './Components/NewItem/NewItem';
import ItemList from './Components/ItemList';

export default () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/new-item" component={NewItem} />
        <Route path="/items" component={ItemList} />
      </BrowserRouter>
    </div>
  );
};

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewItem from 'Components/NewItem/NewItem';
import ItemList from 'Components/ItemList';
import TodoNav from 'Components/TodoNav';
import StartPageContainer from 'Container/StartPageContainer';
import ItemFullContainer from 'Container/ItemFullContainer';
import ItemEditContainer from 'Container/ItemEditContainer/ItemEditContainer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <TodoNav />
        <Route path="/" component={StartPageContainer} exact />
        <Route path="/new-item" component={NewItem} />
        <Route path="/items" component={ItemList} />
        <Route path="/item/:id" component={ItemFullContainer} exact />
        <Route path="/item/:id/edit" component={ItemEditContainer} exact />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewItem from 'Components/NewItem/NewItem';
import ItemList from 'Components/ItemList';
import TodoNav from 'Components/TodoNav';
import ItemEdit from 'Components/ItemEdit/ItemEdit';
import StartPageContainer from 'Container/StartPageContainer';
import ItemContainer from 'Container/ItemContainer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <TodoNav />
        <Route path="/" component={StartPageContainer} exact />
        <Route path="/new-item" component={NewItem} />
        <Route path="/items" component={ItemList} />
        <Route path="/edit" component={ItemEdit} />
        <Route path="/item/:id" component={ItemContainer} />
      </BrowserRouter>
    </div>
  );
};

export default App;

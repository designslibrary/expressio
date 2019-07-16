import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Pages from './PageController/PageReader' 
import PageBuilder from './PageBuilder';
export default class App extends Component {
  render() {
    const pages = Pages.getPages()
    return (
      <Router>
        {
          pages.map(page => {
            return (
            <Route 
              path={'/'+page.pageId} 
              exact
              render={(props) => <PageBuilder {...props} pageConfig={page} />}
            />
            )
          })
        }
        
      </Router>
    );
  }
}


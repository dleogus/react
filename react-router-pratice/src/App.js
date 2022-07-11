import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './page/AllQuotes';
import QuoteDetail from './page/QuoteDetail';
import NewQuote from './page/NewQuote';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;

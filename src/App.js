import React,{Suspense}from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
const NewQuote = React.lazy(()=> import('./Pages/NewQuote'));
const QuoteDetail = React.lazy(()=> import('./Pages/QuoteDetail'));
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
const AllQuote = React.lazy(() => import('./Pages/AllQuote'))
function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
    <Switch>
      <Route path='/' exact>
       <Redirect to='/quotes'></Redirect>
      </Route>
      <Route path='/quotes' exact>
        <AllQuote />
      </Route> 
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/newquote' >
        <NewQuote />
      </Route>
      <Route path='*'>
        <PageNotFound /></Route>
    </Switch>
    </Suspense>
    </Layout>
  );
}

export default App;

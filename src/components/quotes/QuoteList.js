import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  
  const history = useHistory();//this hook sllows us to access history object and object that allows us to change or manage the url
  
  const location = useLocation();//it allows us to access location object which has the information about the currently loaded page

  const queryparams = new URLSearchParams(location.search);//default js constructor function

  const isSortingAscending = queryparams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes,isSortingAscending);

  const changeSortHandler = () =>{

   history.push(`${location.pathname}?sort=${(isSortingAscending? 'desc':'asc')}`);//push allows to go back to previous page but replace don't allow this.
    
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}> Sort{isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

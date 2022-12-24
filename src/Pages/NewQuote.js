import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'
import { addQuote } from '../lib/api';
import useHttp from '../hooks/use-http';
function NewQuote() {
 const { sendRequest,status} = useHttp(addQuote);
  const history = useHistory();
  useEffect(() =>{
    if(status === 'completed'){
      history.push('/quotes');
    }
  },[status,history])
    const addQuoteHandler = (quotedata) =>{
     sendRequest(quotedata);
    }
  return (
    <QuoteForm  onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuote
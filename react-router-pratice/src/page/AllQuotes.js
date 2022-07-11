import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Winter', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Karina', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  return <QuoteList qutoes={DUMMY_QUOTES} />
};

export default AllQuotes;
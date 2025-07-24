import { Row } from 'react-bootstrap';
import SingleBook from './SingleBook'; // Importa il SingleBook che abbiamo appena creato

const BookList = ({ books }) => { // Questo componente riceverà i libri tramite props
  return (
    <Row className="g-2">
      {books.map((book) => (
        // SingleBook ora include il Col al suo interno, quindi non lo mettiamo qui
        <SingleBook key={book.asin} book={book} />
      ))}
    </Row>
  );
};

export default BookList;
import React from 'react';
import { Card, Col } from 'react-bootstrap';

class SingleBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            selected: !prevState.selected,
        }));
    }

    render() {
        const { book } = this.props;
        const { selected } = this.state;

        const cardStyle = {

            border: selected ? '3px solid red' : `1px solid black`,
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        };

        return (

            <Col xs={12} md={4} key={book.asin} className="mb-4">
                <Card
                    style={cardStyle}
                    onClick={this.handleClick}
                    className="book-cover d-flex flex-column"
                >
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default SingleBook;
import Card from "react-bootstrap/Card"

export const SingleBook = (props) => {
    return <Card>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
    </Card>
}
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        {/* <Card.Title style={{ fontWeight: 'bolder', textAlign: 'center' }}>{props.projectTitle}</Card.Title>
        <Card.Text style={{ textAlign: 'center' }}>{props.financialYear}</Card.Text>
        <Card.Text style={{ textAlign: 'center' }}>{props.projectCategory}</Card.Text>
        <Card.Text style={{ textAlign: 'center' }}>{props.sector}</Card.Text>
        <Card.Text style={{ textAlign: 'center' }}>{props.projectStatus}</Card.Text>
        <Card.Text style={{ textAlign: 'center' }}>{props.pacAmt}</Card.Text>
        <Card.Text style={{ textAlign: 'center' }}>{props.yrApprovedAmt}</Card.Text>
        <Card.Text style={{ textAlign: 'center' }}>{props.fundReleasedToActivity}</Card.Text> */}
        <Card.Title style={{ fontWeight: 'bolder', textAlign: 'center' }}>{props.projectTitle}</Card.Title>
        <Card.Text style={{ fontWeight: 'bolder', textAlign: 'center', border: '2px solid green' }}>{props.financialYear}</Card.Text>
        <Card.Text>{props.projectCategory}</Card.Text>
        <Card.Text>{props.sector}</Card.Text>
        <Card.Text>{props.projectStatus}</Card.Text>
        <Card.Text>{props.pacAmt}</Card.Text>
        <Card.Text>{props.yrApprovedAmt}</Card.Text>
        <Card.Text>{props.fundReleasedToActivity}</Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

export default Cards;
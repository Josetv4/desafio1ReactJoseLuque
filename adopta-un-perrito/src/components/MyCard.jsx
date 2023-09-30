import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Boton from './Tags';

const MyCard = ({image, title, descriptionDog, colorButton, textButton}) =>  {
    return (
        <Col>
            <Card className='cards' border="info">
            <Card.Img style={{ height: '200px', width:'100%' }} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{minHeight: '12rem'}}>
                {descriptionDog}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Boton colorButton={colorButton} textButton={textButton} />
            </Card.Body>
            </Card>
        </Col>
    );
}

export default MyCard;

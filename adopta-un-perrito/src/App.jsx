import Header from './components/Header'; //Titulo principal de la app
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import MyCard from './components/MyCard';
import Row from 'react-bootstrap/Row';

function App() {
    return (
        <div>
            <div className="backgraund-dog"></div>
            <Header title='Adopta un perrito' />
            <Container fluid="md ">
                <Row xs={1} md={4}  className="justify-content-md-center g-4">
                    <MyCard
                        image ="https://static.guiaongs.org/wp-content/uploads/2016/07/Adopta.jpg" 
                        title ="Pablín"
                        descriptionDog ="Pablín, un encantador joven en busca de un hogar donde pueda desplegar todo su cariño y energía. 
                        Con su espíritu juguetón y vitalidad contagiosa, Pablín es un compañero perfecto para aquellos que buscan alegría constante en sus vidas."
                        textButton ="Mestizo"
                        colorButton="success"
                    />
                    <MyCard
                        image ="https://masquechuchos.org/imas/animales/_1113/a_11131691505637.jpg"
                        title ="Risto"
                        descriptionDog ="Tras sufrir una triste pérdida, Risto se encontró sin hogar y terminó en el albergue. 
                        Pero estamos decididos a encontrarle una nueva familia que le brinde el amor y la felicidad que se merece. 
                        "
                        textButton ="Pointer"
                        colorButton="warning"
                    />
                    <MyCard 
                        image ="https://masquechuchos.org/imas/animales/_1046/a_10461686990826.jpg"
                        title ="Gaspar"
                        descriptionDog ="Gaspar es un perro joven de tamaño mediano que ha llegado a nuestras vidas con un deseo inmenso de amor y compañía. Con su mirada tierna y su personalidad juguetona, es imposible resistirse a su encanto. 
                        Este pequeño peludo es la combinación perfecta de energía y ternura."
                        textButton ="Collin"
                        colorButton="secondary"
                    />
                    <MyCard 
                        image ="https://masquechuchos.org/imas/animales/_1109/a_11091691505053.jpg"
                        title ="Baloo"
                        descriptionDog ="Después de pasar días vagando solo y desamparado, Baloo se merece más que nunca una familia que lo cuide, mime y le brinde el amor que se merece. 
                        Su corazón es tierno y lleno de cariño."
                        textButton ="Mastín"
                        colorButton="light"
                    />
                </Row>
            </Container>
            <Footer information='Para consultas de adopciones, información general del centro de rescate y sus funciones, donaciones u otras consultas:  rmdlgn@hotmail.com
            POR ESTOS MEDIOS NO SE ACEPTAN PERRITOS' />
        </div>
    );
}

export default App;
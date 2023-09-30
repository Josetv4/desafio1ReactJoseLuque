import Button from "react-bootstrap/Button";

const Boton = ({colorButton, textButton}) => {
    return (
        <>
        <Button variant={colorButton}>{textButton}</Button>
        </>
    );
};

export default Boton;

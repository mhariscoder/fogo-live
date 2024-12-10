import { Offcanvas } from "react-bootstrap";

const ThemeOffcanvas = (props) => {
    const { show, header, onHide, body } = props
    return (
        <Offcanvas show={show} onHide={onHide} placement="bottom" className="theme-offcanvas">
            {header &&
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
            }
            <Offcanvas.Body className="offcanvas-body-full-height">
                {body}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ThemeOffcanvas
import React, {useState} from 'react'
import Offcanvas from 'react-bootstrap/offcanvas';
import Button from 'react-bootstrap/Button'

function OffcanvasExample()  {
    const [show,setShow] = useState(false);
    const handleShow = () => {setShow(true)};
    const handleClose = () => {setShow(false)};
  return (
    <div>
    <div>Canvas Example</div>
    <Button variant='primary' onClick={handleShow}>Launch</Button>
    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Title of our Application</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            
        </Offcanvas.Body>
    </Offcanvas>
    </div>
  )
}
export default OffcanvasExample

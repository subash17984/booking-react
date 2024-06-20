import { useState } from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Incdeccounter from '../roomdetails/incdeccounter';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Roomavailability = (props) => {
    const [show, setShow] = useState(props.booking);

    const handleClose = () => setShow(props.booking);
    const handleShow = () => setShow(false);
    const [firstday, setcustomday] = useState(0)
    const [customerno, setcustomerno] = useState(0);
    const [durationdate,setdurationdate]=useState('')
    function validateForm() {
        if (firstday== 0) {
            alert('enter day')
            return
          }
          if (customerno == 0) {
            alert('enter guests staying in room')
            return
          }
          if (durationdate =='') {
            alert('select date from to stay in room')
            return
          }
         
          let dataObject = {
            startDate: durationdate,
            guestsNo: customerno,
           days:firstday
          }

    }
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Room Availability Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col" style={{ height: "200px" }}>
              <div className="row" style={{ height: "60px" }}>
                <div className="col-6">Date Coming</div>
                <div className="col-6">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["MobileDatePicker"]}>
                      <MobileDatePicker
                        onChange={(e) => setdurationdate(e.target.value)}
                        defaultValue={dayjs(new Date())}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div
                className="row"
                style={{ height: "48px", marginTop: "10px" }}
              >
                <div className="col-6">Duration</div>
                <div className="col-6">
                  <input
                    placeholder="day of staying"
                    onChange={(e) => setcustomday(e.target.value)}
                  />
                </div>
              </div>
              <div className="row" style={{ height: "48px" }}>
                <div className="col-6">Guests</div>
                <div className="col-6">
                  <Incdeccounter
                    onChange={(e) => setcustomerno(e.target.value)}
                  ></Incdeccounter>
                </div>
              </div>
              <div className="row" style={{ height: "48px" }}></div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Close
            </Button>
            <Button
              variant="success"
              onClick={() => {
                validateForm();
                handleShow();
              }}
            >
              Booking
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Roomavailability


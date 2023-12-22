import { Toast } from "react-bootstrap";

const Notification = ({ show, message }) => {
    return (
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      
        <Toast show={show} delay={3000} autohide>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    );
  };

export default Notification;
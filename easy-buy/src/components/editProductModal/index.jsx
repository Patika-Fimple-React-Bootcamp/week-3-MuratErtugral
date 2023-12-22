import React from "react";
import { Button, Modal } from "react-bootstrap";

class EditProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedProduct: { ...props.product },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editedProduct: {
        ...prevState.editedProduct,
        [name]: value,
      },
    }));
  };

  handleSave = () => {
    // Burada API'ye güncelleme isteği atılabilir
    this.props.onSave(this.state.editedProduct);
    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;
    const { editedProduct } = this.state;

    return (
      <Modal show={this.props.show} onHide={onClose}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedProduct.title}
            onChange={this.handleInputChange}
          />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={editedProduct.price}
            onChange={this.handleInputChange}
          />
          {/* Diğer özellikleri de ekleyebilirsiniz */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditProductModal;

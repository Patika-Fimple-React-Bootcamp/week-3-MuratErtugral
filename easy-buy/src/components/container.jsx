// Container.js

import React, { useState, useEffect } from "react";
import "../App.css";
import "../Reset.css";
import ProductList from "./productList";
import EditProductModal from "./editProductModal";
import Notification from "./notification";
import Loader from "./loader";

const Container = () => {
  const [products, setProducts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Ekledik

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false); // Loader'ın görünürlüğünü kapat
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setIsLoading(false); // Hata durumunda da loader'ı kapat
      });
  }, []);

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    showNotificationWithMessage("Product deleted successfully");
  };

  const handleEdit = (product) => {
    setEditedProduct(product);
    setShowEditModal(true);
  };

  const handleEditSave = (editedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );
    showNotificationWithMessage("Product updated successfully");
  };

  const showNotificationWithMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="container">
      {isLoading && <Loader />}
      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {showEditModal && (
        <EditProductModal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditSave}
          product={editedProduct}
        />
      )}
      <Notification show={showNotification} message={notificationMessage} />
    </div>
  );
};

export default Container;

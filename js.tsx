
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ExemploModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Abrir Modal
      </Button>
      <Modal
        title="Título do Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Conteúdo do corpo do modal.</p>
      </Modal>
    </>
  );
};

export default ExemploModal;
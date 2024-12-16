import React from "react";
import { Modal } from "antd";
const Modals = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        title="Narxni tasdiqlash"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Narxni tanladingiz: 50,000 so‘m</p>
      </Modal>
    </>
  );
};
export default Modals;

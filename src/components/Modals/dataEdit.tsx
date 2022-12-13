import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

export default function dataEdit({ products, isOpen, onClose }) {
  //   const [inProgress, setInProgress] = useState(false);
  //   const SubmitForm = async (value) => {
  //     try {
  //       const config = {
  //         headers: {
  //           Authorization: cookie.get("adminToken"),
  //         },
  //       };
  //       const data = {
  //         product_id: products?.id,
  //         is_belibersama: value.is_belibersama === "true" ? true : false,
  //         belibersama_price: value.belibersama_price,
  //       };
  //       setInProgress(true);

  //       await apiClient
  //         .patch("/api/v0/admin/products/is-belibersama", data, config)
  //         .then(() => {
  //           window.location.reload();
  //         });
  //     } catch (error) {
  //       setInProgress(true);
  //       console.log(error.message);
  //     }
  //   };

  return (
    <div>
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gambar Produk</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={products?.image} alt="" className="w-full h-full" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

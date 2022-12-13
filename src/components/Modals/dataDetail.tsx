import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";

interface Products {
  id: number;
  productID: string;
  productName: string;
  amount: string;
  customerName: string;
  status: number;
  transactionDate: string;
  createBy: string;
  createOn: string;
}
export default function dataDetail({
  itemsData,
  isOpen,
  onClose,
}: {
  itemsData: Products;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div>
      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex-auto px-6 py-10 pt-0">
              <div className="block xl:flex xl:mb-6">
                <div className="w-full xl:max-w-2xl px-0 py-8 md:px-10 xl:py-0">
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      Id
                    </h4>
                    <p>{itemsData?.id}</p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      ProductId
                    </h4>
                    <p>{itemsData?.productID} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      ProductName
                    </h4>
                    <p>{itemsData?.productName} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      Amount
                    </h4>
                    <p>{itemsData?.amount} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      Customername
                    </h4>
                    <p>{itemsData?.customerName} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      Status
                    </h4>
                    <p>{itemsData?.status === 0 ? "SUCCESS" : "FAILED"} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      TransactionDate
                    </h4>
                    <p>{itemsData?.transactionDate} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      CreateBy
                    </h4>
                    <p>{itemsData?.createBy} </p>
                  </div>
                  <div className="mb-5">
                    <h4 className=" text-gray-400 text-xs font-bold mb-1.5">
                      CreateOn
                    </h4>
                    <p>{itemsData?.createOn} </p>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

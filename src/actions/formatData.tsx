import { Flex } from "@chakra-ui/react";
import { _ } from "gridjs-react";
import Router from "next/router";

export const formatData = (
  itemsData: any,
  onOpen: any,
  setItem: any,
  setWhichModal: any
) => {
  return itemsData.map((itemsData: any) => [
    itemsData.id,
    itemsData.productID,
    itemsData.productName,
    itemsData.amount,
    itemsData.customerName,
    itemsData.status === 0 ? "SUCCESS" : "FAILED",

    _(
      <Flex>
        <button
          className={`p-2 text-xs border rounded-md text-white
              bg-blue-600 hover:bg-blue-700
           outline-none focus:outline-none block md:inline-block`}
          title="Detail"
          onClick={async (e) => {
            await setWhichModal("detail");
            await setItem(itemsData);
            console.log(itemsData);

            onOpen(e);
          }}
        >
          <p>Detail</p>
        </button>
        <button
          className={`p-2 text-xs border rounded-md text-white bg-green-600 hover:bg-green-700  outline-none focus:outline-none`}
          title="edit"
          onClick={() => {
            Router.push(`/editItem/${itemsData.id}`);
            // let value = localStorage.getItem("Items");
            // console.log(value);
          }}
        >
          <p>Edit</p>
        </button>
      </Flex>
    ),
  ]);
};

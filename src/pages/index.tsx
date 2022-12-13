import React, { useEffect, useState } from "react";
import { formatData } from "../actions/formatData";
import { Grid, _ } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { useDisclosure } from "@chakra-ui/react";
import DataDetail from "../components/Modals/dataDetail";
import DataEdit from "../components/Modals/dataEdit";
// components
import { Progress } from "@chakra-ui/react";
import Router from "next/router";

function Home() {
  const [itemsData, setItemsData] = useState<any>(null);
  useEffect(() => {
    async function getData() {
      try {
        await fetch("./viewData.json")
          .then(function (resp) {
            return resp.json();
          })
          .then(function (items) {
            localStorage.setItem("Items", JSON.stringify(items.data));
            setItemsData(items.data);
          });
      } catch (error) {}
    }

    if (localStorage.getItem("Items")) {
      let value = localStorage.getItem("Items");
      let items = JSON.parse(value || "{}");
      setItemsData(items);
    } else {
      getData();
    }
  }, []);
  console.log(itemsData);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [item, setItem] = useState<any>();
  const [whichModal, setWhichModal] = useState();

  return (
    <>
      {whichModal === "detail" ? (
        <DataDetail itemsData={item} isOpen={isOpen} onClose={onClose} />
      ) : (
        ""
      )}
      {whichModal === "edit" ? (
        <DataEdit products={item} isOpen={isOpen} onClose={onClose} />
      ) : (
        ""
      )}
      <div className="flex flex-wrap">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blue-800 text-xl font-bold">DAFTAR DATA</h6>
              <button
                onClick={() => Router.push("/addItem")}
                className="bg-indigo-600 shadow-lg hover:shadow text-white cursor-pointer text-sm font-bold uppercase px-16 py-3 rounded outline-none focus:outline-none ease-in-out transition-all duration-150"
              >
                Tambah Data
              </button>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {itemsData ? (
              <Grid
                columns={[
                  {
                    name: "id",
                    width: "10%",
                  },
                  {
                    name: "productID",
                    width: "10%",
                  },
                  {
                    name: "productName",
                    width: "10%",
                  },
                  {
                    name: "amount",
                    width: "10%",
                  },
                  {
                    name: "customerName",
                    width: "10%",
                  },
                  {
                    name: "status",
                    width: "10%",
                  },
                  {
                    name: "Action",
                    width: "10%",
                  },
                ]}
                data={formatData(itemsData, onOpen, setItem, setWhichModal)}
                search={true}
                pagination={{
                  enabled: true,
                  limit: 5,
                }}
                sort={true}
              />
            ) : (
              <div className="mt-24 mb-14">
                <Progress size="xs" colorScheme="blue" isIndeterminate />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

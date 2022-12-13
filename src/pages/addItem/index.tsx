import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function EditItem() {
  const router = useRouter();
  const [dataItems, setDataItems] = useState<any>([]);
  const newId = () => {
    let value = localStorage.getItem("Items");
    let parse = JSON.parse(value || "{}");

    return parse[parse.length - 1].id + 1;
  };
  //   const getCurrentItems = async (string: string) => {
  //     let item = localStorage.getItem(string);
  //     if (item) {
  //       return JSON.parse(item);
  //     } else {
  //       return [];
  //     }
  //   };
  useEffect(() => {
    let value = localStorage.getItem("Items");
    let parse = JSON.parse(value || "{}");
    setDataItems(parse);
  }, []);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    let data = {
      id: newId(),
      productID: event.target.productID.value,
      productName: event.target.productName.value,
      amount: event.target.amount.value,
      customerName: event.target.customerName.value,
      status: parseInt(event.target.status.value),
      transactionDate: event.target.transactionDate.value,
      createBy: event.target.createBy.value,
      createOn: event.target.createOn.value,
    };
    // let existingItems = getCurrentItems("Items")
    // const added = [{ ...existingItems, data }];

    dataItems.push(data);
    localStorage.setItem("Items", JSON.stringify(dataItems));

    router.push("/");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2 py-10 lg:py-32">
        <div className="flex flex-col py-5 md:px-8 w-full shadow-2xl bg-white rounded-lg">
          <div className="text-darkBlue text-3xl text-center my-4">
            Tambah Data
          </div>

          <form className="pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="productID"
                >
                  ProductId
                </label>
                <input
                  type="number"
                  name="productID"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="productName"
                >
                  ProductName
                </label>
                <input
                  type="text"
                  name="productName"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>

              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="customerName"
                >
                  CustomerName
                </label>
                <input
                  type="text"
                  name="customerName"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  name="status"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                >
                  <option value={0}>SUCCESS</option>
                  <option value={1}>FAILED</option>
                </select>
              </div>
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="transactionDate"
                >
                  TransactionDate
                </label>
                <input
                  type="text"
                  name="transactionDate"
                  placeholder="Ex. 2022-08-15 13:14:52"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="createBy"
                >
                  CreateBy
                </label>
                <input
                  type="text"
                  name="createBy"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>
              <div className="w-full lg:w-6/12 mb-3 px-4">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="createOn"
                >
                  createOn
                </label>
                <input
                  type="text"
                  name="createOn"
                  placeholder="Ex. 2022-08-15 13:14:52"
                  className="border border-gray-300 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-indigo-600 shadow-lg hover:shadow text-white cursor-pointer text-sm font-bold uppercase px-16 py-3 rounded outline-none focus:outline-none ease-in-out transition-all duration-150"
                type="submit"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

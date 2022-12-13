import { useRouter } from "next/router";
export default function EditItem() {
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      productName: event.target.productName.value,
      amount: event.target.amount.value,
      customerName: event.target.customerName.value,
      status: parseInt(event.target.status.value),
    };

    let value = localStorage.getItem("Items");
    let parse = JSON.parse(value || "{}");
    for (var i = 0; i < parse.length; i++) {
      if (parse[i].id == router.query.slug) {
        parse[i].customerName = data.customerName;
        parse[i].amount = data.amount;
        parse[i].status = data.status;
        parse[i].productName = data.productName;
      }
    }
    localStorage.setItem("Items", JSON.stringify(parse));
    router.push("/");
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2 py-10 lg:py-32">
        <div className="flex flex-col py-5 md:px-8 w-full shadow-2xl bg-white rounded-lg">
          <div className="text-darkBlue text-3xl text-center my-4">
            Edit Data
          </div>

          <form className="pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
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
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-indigo-600 shadow-lg hover:shadow text-white cursor-pointer text-sm font-bold uppercase px-16 py-3 rounded outline-none focus:outline-none ease-in-out transition-all duration-150"
                type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { CheckCircle, XCircle, MapPin, Receipt } from "lucide-react";

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

      {/* Top Header */}
      <div className="flex justify-between items-center px-5 py-2 bg-gray-50">
        <div className="flex items-center gap-2 text-gray-700 font-semibold">
          {/* <Receipt size={18} className="text-green-600" /> */}
          Order #{order.id}
        </div>

        <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          {order.time}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 gap-5">

        {/* Left Section */}
        <div className="flex gap-4">

          {/* Product Image */}
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-green-100">
            <img
              src={order.image}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              ₹{order.amount.toFixed(2)}
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              {order.items} Items ·{" "}
              <span className="text-green-600 font-medium">
                {order.customer}
              </span>
            </p>

            <div className="flex items-start gap-1 text-gray-500 text-sm mt-2">
              <MapPin size={14} className="mt-1" />
              <p className="italic">
                "{order.address}"
              </p>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-3 w-full md:w-auto">

          <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-2 rounded-xl font-medium hover:bg-green-700 transition w-full">
            <CheckCircle size={18} />
            Accept
          </button>

          <button className="flex items-center justify-center gap-2 bg-red-100 text-red-600 px-8 py-2 rounded-xl font-medium hover:bg-red-200 transition w-full">
            <XCircle size={18} />
            Reject
          </button>

        </div>
      </div>
    </div>
  );
};

export default OrderCard;
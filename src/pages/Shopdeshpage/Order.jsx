import { Store } from "lucide-react"; 
import { useState } from "react";
import OrderCard from "../../components/Shopkeeper/Ordercart";
import ordersData from "../../Data/Orderdata";
import DashboardHeader from "../../components/Shopkeeper/Header";
import DashboardStats from "../../components/Shopkeeper/DashboardStats";

const Order = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (

        <div className="px-2 md:p-6 space-y-6 bg-gray-50 ">

            <DashboardHeader />


            <div className="bg-white rounded-2xl shadow-sm p-4 sm:px-5 flex justify-between items-center">

                <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                        <Store className="text-green-600" size={22} />
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Shop Status / दुकान की स्थिति
                        </h3>
                        <p className={`text-sm ${isOpen ? "text-green-600" : "text-red-500"}`}>
                            ● Currently: {isOpen ? "Open" : "Closed"}
                        </p>
                    </div>
                </div>

                {/* Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-7 flex items-center rounded-full p-1 transition duration-300 ${isOpen ? "bg-green-500" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition duration-300 ${isOpen ? "translate-x-7" : ""
                            }`}
                    />
                </button>

            </div>

            <DashboardStats />

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                    <h1 className="text-2xl font-bold">
                        New Orders
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Manage and process incoming orders
                    </p>
                </div>

                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
                    {ordersData.length} Pending
                </span>
            </div>

            {/* ORDER LIST */}
            <div className="space-y-4 pb-7 sm:pb-1">
                {ordersData.map((order) => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>

        </div>
    );
};

export default Order;
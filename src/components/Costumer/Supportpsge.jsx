import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  MessageSquare,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Package,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

// --- MOCK DATA ---
const faqs = [
  {
    q: "Where is my order?",
    a: "You can track your active orders in real-time from the 'Your Orders' section in your profile.",
  },
  {
    q: "How do I claim a refund?",
    a: "If an item is missing or damaged, select the order from 'Past Orders' and click 'Help with this order' to initiate a refund.",
  },
  {
    q: "Can I change my delivery address?",
    a: "Address can only be changed before the store accepts the order. Please contact support immediately.",
  },
];

const SUPPORT_NUMBER = "919664034435"; // whatsapp requires country code

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // WhatsApp Chat
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I need help with my order."
    );

    window.open(
      `https://wa.me/${SUPPORT_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  // Call Request
  const makeCall = () => {
    window.location.href = "tel:9664034435";
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f6f8] font-sans pb-10">

      {/* Header */}

      <div className="bg-white sticky top-0 z-30 border-b border-gray-100 shadow-sm px-4 py-4 flex items-center gap-4">

        <Link
          to="/UserProfile"
          className="p-2 bg-gray-50 rounded-full active:scale-95 transition-all"
        >
          <ChevronLeft size={20} className="text-gray-800" />
        </Link>

        <h1 className="text-lg font-extrabold text-[#2d3132]">
          Support & Help
        </h1>

      </div>

      <div className="max-w-2xl mx-auto px-4 mt-6">

        {/* Recent Order */}

        <h2 className="text-[15px] font-extrabold text-[#2d3132] mb-3 px-1">
          Help with recent order
        </h2>

        <div className="bg-white rounded-[1.2rem] p-4 shadow-sm border border-gray-100 mb-8 cursor-pointer hover:border-[#0f5c46]/30 transition-colors">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
              <Package size={24} />
            </div>

            <div className="flex-1">

              <h3 className="font-extrabold text-[#2d3132] text-[14px]">
                Gupta General Store
              </h3>

              <p className="text-[11px] font-bold text-gray-500">
                Delivered on 12 Oct • ₹245
              </p>

            </div>

            <ChevronRight size={18} className="text-gray-400" />

          </div>

        </div>

        {/* Contact Options */}

        <h2 className="text-[15px] font-extrabold text-[#2d3132] mb-3 px-1">
          Contact Us
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-8">

          {/* WhatsApp Chat */}

          <button
            onClick={openWhatsApp}
            className="bg-white rounded-[1.2rem] p-4 shadow-sm border border-gray-100 hover:shadow-md flex flex-col items-center justify-center gap-2 transition-all active:scale-95"
          >

            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#0f5c46]">
              <MessageSquare size={20} />
            </div>

            <span className="text-[12px] font-extrabold text-gray-700">
              Chat with us
            </span>

          </button>

          {/* Phone Call */}

          <button
            onClick={makeCall}
            className="bg-white rounded-[1.2rem] p-4 shadow-sm border border-gray-100 hover:shadow-md flex flex-col items-center justify-center gap-2 transition-all active:scale-95"
          >

            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <PhoneCall size={20} />
            </div>

            <span className="text-[12px] font-extrabold text-gray-700">
              Request a call
            </span>

          </button>

        </div>

        {/* FAQ Section */}

        <h2 className="text-[15px] font-extrabold text-[#2d3132] mb-3 px-1 flex items-center gap-2">
          <HelpCircle size={16} className="text-gray-400" />
          FAQs
        </h2>

        <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">

          {faqs.map((faq, idx) => (

            <div
              key={idx}
              className="p-4 cursor-pointer"
              onClick={() =>
                setOpenFaq(openFaq === idx ? null : idx)
              }
            >

              <div className="flex justify-between items-center">

                <h3 className="text-[13px] font-extrabold text-[#2d3132] pr-4">
                  {faq.q}
                </h3>

                {openFaq === idx ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}

              </div>

              {openFaq === idx && (

                <p className="text-[12px] font-medium text-gray-500 mt-2 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {faq.a}
                </p>

              )}

            </div>

          ))}

        </div>

      </div>
    </div>
  );
};

export default SupportPage;
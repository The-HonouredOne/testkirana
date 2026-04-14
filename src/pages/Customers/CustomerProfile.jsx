import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ChevronLeft, ShoppingBag, Wallet, MessageSquare, 
  Sun, EyeOff, BookOpen, Heart, FileText, Gift, 
  Pill, CreditCard, Award, Share2, Info, Lock, 
  Bell, LogOut, ChevronRight, Phone, Mail, ChevronDown,
  User
} from "lucide-react";

const UserProfile = () => {
  // --- STATE ---
  const [theme, setTheme] = useState("LIGHT");
  const [hideSensitive, setHideSensitive] = useState(true);

  // In a real app, you would use useNavigate from react-router-dom for the back button
  // const navigate = useNavigate();

  // --- MOCK DATA FOR SECTIONS ---
  const infoLinks = [
    { icon: BookOpen, label: "Address book", path: "/addresses" },
    { icon: FileText, label: "Bookmarked recipes", path: "/recipes" }, // Reusing FileText as a placeholder for recipe book
    { icon: Heart, label: "Your wishlist", path: "/wishlist" },
    { icon: FileText, label: "GST details", path: "/gst" },
    { icon: Gift, label: "E-gift cards", path: "/gift-cards" },
    { icon: Pill, label: "Your prescriptions", path: "/prescriptions" },
  ];

  const paymentLinks = [
    { icon: Wallet, label: "Kinetic Money", path: "/wallet" },
    { icon: CreditCard, label: "Payment settings", path: "/payment-methods" },
    { icon: Gift, label: "Claim Gift card", path: "/claim-gift" },
    { icon: Award, label: "Your collected rewards", path: "/rewards" },
  ];

  // const charityLinks = [
  //   { icon: Heart, label: "Your Impact", path: "/impact", iconColor: "text-rose-500" },
  //   { icon: FileText, label: "Get Feeding India receipt", path: "/charity-receipt" },
  // ];

  const otherLinks = [
    { icon: Share2, label: "Share the app", path: "/share" },
    { icon: Info, label: "About us", path: "/about" },
    { icon: Lock, label: "Account privacy", path: "/privacy" },
    { icon: Bell, label: "Notification preferences", path: "/notifications" },
    { icon: LogOut, label: "Log out", path: "/logout", isLogout: true },
  ];

  // --- REUSABLE COMPONENTS ---
  // Custom Toggle Switch
  const ToggleSwitch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
      <div className={`w-11 h-6 rounded-full peer transition-colors ${checked ? 'bg-[#0f5c46]' : 'bg-gray-200'} peer-focus:outline-none`}>
        <div className={`absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform ${checked ? 'translate-x-full border-white shadow-sm' : ''}`}></div>
      </div>
    </label>
  );

  // Reusable Link Row
  const ProfileLinkRow = ({ icon: Icon, label, path, isLogout, iconColor = "text-gray-500" }) => (
    <Link 
      to={path} 
      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors active:bg-gray-100 group"
    >
      <div className="flex items-center gap-4">
        <Icon size={20} className={`${isLogout ? "text-red-500" : iconColor} group-hover:scale-110 transition-transform`} strokeWidth={2} />
        <span className={`text-[14px] font-bold ${isLogout ? "text-red-500" : "text-[#2d3132]"}`}>
          {label}
        </span>
      </div>
      <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
    </Link>
  );

const Navigate =useNavigate()

  return (
    <div className="w-full min-h-screen bg-[#f4f6f8] font-sans pb-24 md:pb-12">
      
      {/* ======================================================== */}
      {/* 1. TOP GRADIENT HEADER & PROFILE INFO                    */}
      {/* ======================================================== */}
      <div className="bg-gradient-to-b from-[#68e489] via-[#b6ecd2] to-[#f4f6f8] pt-4 md:pt-8 pb-16 px-4 md:px-8 relative">
        
        <div className="max-w-2xl mx-auto relative">
          {/* Back Button */}
          <button 
            onClick={() => Navigate("/")} 
            className="absolute left-0 top-0 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <ChevronLeft size={22} className="text-gray-800" />
          </button>

          {/* Profile Details */}
          <div className="flex flex-col items-center justify-center pt-2">
            {/* Avatar */}
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-white mb-3 shadow-md border-4 border-white/50">
              <User size={40} strokeWidth={2.5} />
            </div>
            
            <h1 className="text-2xl font-bold text-[#2d3132] tracking-tight">
              Sachin Marmat
            </h1>
            
            <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-gray-600 tracking-wider">
              <span className="flex items-center gap-1"><Phone size={12} /> 9664034435</span>
              <span className="flex items-center gap-1"><Mail size={12} /> sb6583425@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 2. OVERLAPPING QUICK ACTION CARDS                        */}
      {/* ======================================================== */}
      <div className="max-w-2xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-3 gap-3">
          
          <Link to="/cart" className="bg-white rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all active:scale-95">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700">
              <ShoppingBag size={20} strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-extrabold text-gray-700 text-center leading-tight">Your orders</span>
          </Link>

          <Link to="/WalletPage" className="bg-white rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all active:scale-95">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700">
              <Wallet size={20} strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-extrabold text-gray-700 text-center leading-tight">Kinetic Money</span>
          </Link>

          <Link to="/SupportPage" className="bg-white rounded-[1rem] p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all active:scale-95">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-700">
              <MessageSquare size={20} strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-extrabold text-gray-700 text-center leading-tight">Need help?</span>
          </Link>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. MAIN CONTENT SECTIONS                                 */}
      {/* ======================================================== */}
      <div className="lg:max-w-4xl max-w-2xl mx-auto px-4 mt-6 space-y-6">
        
        {/* Settings Card: Appearance & Sensitive Items */}
        {/* <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sun size={20} className="text-gray-500" strokeWidth={2} />
              <span className="text-[14px] font-bold text-[#2d3132]">Appearance</span>
            </div>
            <div className="relative">
              <select 
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="appearance-none bg-gray-50 border border-gray-200 text-[#0f5c46] text-[11px] font-extrabold px-3 py-1.5 pr-8 rounded-lg outline-none focus:ring-2 focus:ring-[#0f5c46]/20 cursor-pointer"
              >
                <option value="LIGHT">LIGHT</option>
                <option value="DARK">DARK</option>
                <option value="SYSTEM">SYSTEM</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0f5c46] pointer-events-none" />
            </div>
          </div>

          <div className="p-4 flex items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <EyeOff size={20} className="text-[#0f5c46] mt-1 shrink-0" strokeWidth={2} />
              <div>
                <span className="text-[14px] font-bold text-[#2d3132] block mb-0.5">Hide sensitive items</span>
                <p className="text-[11px] font-medium text-gray-500 leading-snug">
                  Sexual wellness, nicotine products and other sensitive items will be hidden
                </p>
                <button className="text-[11px] font-extrabold text-[#0f5c46] mt-1 hover:underline">
                  Know more
                </button>
              </div>
            </div>
            <ToggleSwitch checked={hideSensitive} onChange={() => setHideSensitive(!hideSensitive)} />
          </div>
        </div> */}

        {/* Section: Your Information */}
        <div>
          <h2 className="text-[16px] font-bold text-[#2d3132] mb-3 px-2">Your information</h2>
          <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {infoLinks.map((link, idx) => (
              <ProfileLinkRow key={idx} {...link} />
            ))}
          </div>
        </div>

        {/* Section: Payment and coupons */}
        <div>
          <h2 className="text-[16px] font-bold text-[#2d3132] mb-3 px-2">Payment and coupons</h2>
          <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {paymentLinks.map((link, idx) => (
              <ProfileLinkRow key={idx} {...link} />
            ))}
          </div>
        </div>

        {/* Section: Feeding India (Charity) */}
        {/* <div>
          <h2 className="text-[15px] font-extrabold text-[#2d3132] mb-3 px-2">Feeding India</h2>
          <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {charityLinks.map((link, idx) => (
              <ProfileLinkRow key={idx} {...link} />
            ))}
          </div>
        </div> */}

        {/* Section: Other Information */}
        <div>
          <h2 className="text-[16px] font-bold text-[#2d3132] mb-3 px-2">Other Information</h2>
          <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {otherLinks.map((link, idx) => (
              <ProfileLinkRow key={idx} {...link} />
            ))}
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <div className="mt-12 flex flex-col items-center justify-center pb-8 opacity-40">
        <h1 className="text-2xl font-extrabold tracking-tighter text-gray-500">Kinaticz</h1>
        <p className="text-[10px] font-bold text-gray-500 tracking-widest mt-1">v1.0.0</p>
      </div>

    </div>
  );
};

export default UserProfile;
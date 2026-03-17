import { useState, useRef } from "react";

const PREP_OPTIONS = ["5 - 10 mins", "10 - 15 mins", "15 - 30 mins", "30 - 45 mins", "45 - 60 mins", "60+ mins"];
const CATEGORIES = ["Grocery", "Fresh Produce", "Dairy & Eggs", "Bakery", "Meat & Seafood", "Beverages", "Snacks", "Personal Care", "Household", "Pharmacy"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Toggle = ({ value, onChange }) => (
  <button onClick={() => onChange(!value)}
    className={`relative w-11 h-6 rounded-full border-none cursor-pointer transition-colors duration-200 flex-shrink-0 ${value ? "bg-emerald-500" : "bg-slate-300"}`}>
    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200 ${value ? "left-5" : "left-0.5"}`} />
  </button>
);

const Section = ({ icon, title, children }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-base">{icon}</div>
      <h3 className="m-0 text-base font-bold text-slate-800">{title}</h3>
    </div>
    <div className="p-5">{children}</div>
  </div>
);

const Label = ({ children }) => (
  <label className="block text-xs font-semibold text-slate-500 mb-1.5 tracking-wide">{children}</label>
);

const Input = ({ className = "", ...props }) => (
  <input className={`w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 outline-none focus:border-emerald-400 focus:bg-white transition-colors ${className}`} {...props} />
);

const Textarea = ({ ...props }) => (
  <textarea className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 outline-none focus:border-emerald-400 focus:bg-white transition-colors resize-y min-h-20" {...props} />
);

const Select = ({ children, ...props }) => (
  <select className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 outline-none focus:border-emerald-400 focus:bg-white transition-colors cursor-pointer" {...props}>{children}</select>
);

export default function StoreProfileSettings() {
  const fileRef = useRef();
  const [banner, setBanner] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [saved, setSaved] = useState(false);

  const [form, setForm] = useState({
    storeName: "FreshBasket Local",
    tagline: "Fresh produce delivered to your door",
    contact: "9876543210",
    email: "freshbasket@email.com",
    whatsapp: "9876543210",
    address: "42, Central Market, Green Valley Road, Sector 12, New Delhi - 110001",
    city: "New Delhi",
    pincode: "110001",
    gstin: "",
    fssai: "",
    categories: ["Grocery", "Fresh Produce"],
    deliveryRadius: 5,
    minOrder: 100,
    deliveryFee: 30,
    freeDeliveryAbove: 500,
    prepTime: "15 - 30 mins",
    autoAccept: true,
    cod: true,
    onlinePayment: true,
    openDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    openTime: "08:00",
    closeTime: "22:00",
    instagram: "",
    description: "",
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggle = (k, v) => set(k, form[k].includes(v) ? form[k].filter(x => x !== v) : [...form[k], v]);

  const pct = ((form.deliveryRadius - 1) / 14) * 100;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto px-4  pb-30 space-y-4">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Store Profile Settings</h1>
            <p className="text-xs text-slate-400 mt-0.5">Manage your shop details and operational settings.</p>
          </div>
          <button onClick={() => setIsOpen(o => !o)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${isOpen ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-red-50 border-red-200 text-red-600"}`}>
            <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-500" : "bg-red-500"}`} />
            {isOpen ? "Open / अभी खुले हैं" : "Closed / बंद है"}
          </button>
        </div>

        {/* Banner */}
        <Section icon="🖼️" title="Shop Banner Image">
          <div onClick={() => fileRef.current.click()}
            className="relative h-40 rounded-xl overflow-hidden bg-slate-100 cursor-pointer group border-2 border-dashed border-slate-200 hover:border-emerald-400 transition-colors">
            {banner
              ? <img src={banner} className="w-full h-full object-cover" alt="banner" />
              : <div className="flex flex-col items-center justify-center h-full gap-2">
                  <span className="text-3xl">🏪</span>
                  <span className="text-xs text-slate-400 font-medium">Click to upload banner</span>
                </div>}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg">📷 Change Banner</span>
            </div>
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => e.target.files[0] && setBanner(URL.createObjectURL(e.target.files[0]))} />
          <p className="text-xs text-slate-400 mt-2">Recommended: 1200×480px · Max 2MB</p>
        </Section>

        {/* Store Info */}
        <Section icon="ℹ️" title="Store Information">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Store Name</Label>
              <Input value={form.storeName} onChange={e => set("storeName", e.target.value)} />
            </div>
            <div>
              <Label>Tagline / Slogan</Label>
              <Input value={form.tagline} onChange={e => set("tagline", e.target.value)} placeholder="e.g. Fresh daily!" />
            </div>
            <div>
              <Label>Contact Number</Label>
              <div className="flex gap-2">
                <span className="px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-xs text-slate-500 font-semibold">+91</span>
                <Input value={form.contact} onChange={e => set("contact", e.target.value)} className="flex-1" />
              </div>
            </div>
            <div>
              <Label>WhatsApp Number</Label>
              <Input value={form.whatsapp} onChange={e => set("whatsapp", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <Label>Email Address</Label>
              <Input type="email" value={form.email} onChange={e => set("email", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <Label>Store Address</Label>
              <Textarea value={form.address} onChange={e => set("address", e.target.value)} />
            </div>
            <div>
              <Label>City</Label>
              <Input value={form.city} onChange={e => set("city", e.target.value)} />
            </div>
            <div>
              <Label>PIN Code</Label>
              <Input value={form.pincode} onChange={e => set("pincode", e.target.value)} />
            </div>
            <div>
              <Label>GSTIN (optional)</Label>
              <Input value={form.gstin} onChange={e => set("gstin", e.target.value)} placeholder="22AAAAA0000A1Z5" />
            </div>
            <div>
              <Label>FSSAI License (optional)</Label>
              <Input value={form.fssai} onChange={e => set("fssai", e.target.value)} placeholder="12345678901234" />
            </div>
            <div className="sm:col-span-2">
              <Label>Store Description</Label>
              <Textarea value={form.description} onChange={e => set("description", e.target.value)} placeholder="Tell customers about your store..." />
            </div>
          </div>
        </Section>

        {/* Categories */}
        <Section icon="🏷️" title="Store Categories">
          <p className="text-xs text-slate-400 mb-3">Select all that apply</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => {
              const on = form.categories.includes(cat);
              return (
                <button key={cat} onClick={() => toggle("categories", cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${on ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300"}`}>
                  {cat}
                </button>
              );
            })}
          </div>
        </Section>

        {/* Delivery & Operations */}
        <Section icon="🚚" title="Delivery & Operations">
          {/* Radius Slider */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <Label>Delivery Radius</Label>
              <span className="text-sm font-bold text-emerald-600">{form.deliveryRadius}.0 km</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-slate-200">
              <div className="absolute top-0 left-0 h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
              <input type="range" min={1} max={15} value={form.deliveryRadius}
                onChange={e => set("deliveryRadius", Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
              <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-md pointer-events-none transition-all"
                style={{ left: `calc(${pct}% - 10px)` }} />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-slate-400">1km</span>
              <span className="text-xs text-slate-400">15km</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <Label>Min. Order Amount (₹)</Label>
              <Input type="number" value={form.minOrder} onChange={e => set("minOrder", e.target.value)} />
            </div>
            <div>
              <Label>Delivery Fee (₹)</Label>
              <Input type="number" value={form.deliveryFee} onChange={e => set("deliveryFee", e.target.value)} />
            </div>
            <div>
              <Label>Free Delivery Above (₹)</Label>
              <Input type="number" value={form.freeDeliveryAbove} onChange={e => set("freeDeliveryAbove", e.target.value)} />
            </div>
            <div>
              <Label>Avg. Preparation Time</Label>
              <Select value={form.prepTime} onChange={e => set("prepTime", e.target.value)}>
                {PREP_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </Select>
            </div>
          </div>

          <div className="space-y-0 divide-y divide-slate-100">
            {[
              { k: "autoAccept", label: "Auto-accept Orders", sub: "Automatically accept orders within prep time limit" },
              { k: "cod", label: "Cash on Delivery", sub: "Accept cash payments at delivery" },
              { k: "onlinePayment", label: "Online Payment", sub: "Accept UPI, cards & net banking" },
            ].map(({ k, label, sub }) => (
              <div key={k} className="flex items-center justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-700">{label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
                <Toggle value={form[k]} onChange={v => set(k, v)} />
              </div>
            ))}
          </div>
        </Section>

        {/* Opening Hours */}
        <Section icon="🕐" title="Opening Hours">
          <Label>Open Days</Label>
          <div className="flex flex-wrap gap-2 mb-4">
            {DAYS.map(d => {
              const on = form.openDays.includes(d);
              return (
                <button key={d} onClick={() => toggle("openDays", d)}
                  className={`w-11 h-9 rounded-xl text-xs font-bold border transition-all cursor-pointer ${on ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-slate-50 border-slate-200 text-slate-400"}`}>
                  {d}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Opening Time</Label>
              <Input type="time" value={form.openTime} onChange={e => set("openTime", e.target.value)} />
            </div>
            <div>
              <Label>Closing Time</Label>
              <Input type="time" value={form.closeTime} onChange={e => set("closeTime", e.target.value)} />
            </div>
          </div>
        </Section>

        {/* Social */}
        <Section icon="📱" title="Social & Web">
          <Label>Instagram URL</Label>
          <Input value={form.instagram} onChange={e => set("instagram", e.target.value)} placeholder="https://instagram.com/yourstore" />
        </Section>

      </div>

      {/* Sticky Footer */}
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl bg-emerald-50/95 backdrop-blur-sm rounded-2xl border border-emerald-200 shadow-2xl p-3 z-50 transition-all animate-fade-in-up">
  <div className="flex items-center gap-3">
    
    <button 
      onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2500); }}
      className={`flex-1 py-2 rounded-xl px-4 text-white text-sm font-bold transition-all cursor-pointer border-none shadow-md flex justify-center items-center ${
        saved ? "bg-emerald-700 shadow-emerald-700/30" : "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30"
      }`}
    >
      {saved ? "✓ Saved Successfully!" : "💾 Save Changes / बदलाव सुरक्षित करें"}
    </button>

    <button className="px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-bold cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
      Cancel
    </button>
    
  </div>
</div>
    </div>
  );
} 
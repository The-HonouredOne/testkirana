import React, { useState, useRef, useEffect } from "react";
import { Search, X, ChevronLeft, Target, Plus, ChevronRight, MessageCircle, MapPin, Home, Briefcase, Trash2, CheckCircle, Loader2, Clock, Star } from "lucide-react";
import LocationMap from "./Locationmap";

const LocationSelector = ({ onClose }) => {

    // ── State ────────────────────────────────────────────────
    const [query, setQuery] = useState("");
    const [view, setView] = useState("main"); // "main" | "add"
    const [isLocating, setIsLocating] = useState(false);
    const [locateError, setLocateError] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [mapLocation, setMapLocation] = useState(null);
    // ── Add address form state ────────────────────────────────
    const [form, setForm] = useState({ label: "", address: "", type: "home" });
    const [saving, setSaving] = useState(false);

    // ── Past / saved addresses (localStorage store) ──────────
    const [pastAddresses, setPastAddresses] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("saved_addresses") || "[]");
        } catch { return []; }
    });

    const saveToStore = (list) => {
        setPastAddresses(list);
        localStorage.setItem("saved_addresses", JSON.stringify(list));
    };

    const searchTimer = useRef(null);

    // ── Mock search (replace with your API call) ─────────────
    // TO CONNECT API: replace this block with:
    // const res = await fetch(`/api/search?q=${query}`);
    // setSearchResults(await res.json());
    useEffect(() => {
        if (!query.trim()) {
            setSearchResults([]);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        clearTimeout(searchTimer.current);

        searchTimer.current = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
                );

                const data = await res.json();

                const results = data.map((place) => ({
                    id: String(place.place_id),   // convert to string
                    label: place.display_name.split(",")[0],
                    sub: place.display_name,
                    lat: place.lat,
                    lon: place.lon
                }));

                setSearchResults(results);
            } catch (err) {
                console.error("Search error", err);
                setSearchResults([]);
            }

            setIsSearching(false);
        }, 500);

        return () => clearTimeout(searchTimer.current);
    }, [query]);


    // useEffect(() => {
    //     if (!query.trim()) { setSearchResults([]); setIsSearching(false); return; }
    //     setIsSearching(true);
    //     clearTimeout(searchTimer.current);
    //     searchTimer.current = setTimeout(() => {
    //         const results = MOCK_PLACES.filter(p =>
    //             p.label.toLowerCase().includes(query.toLowerCase()) ||
    //             p.sub.toLowerCase().includes(query.toLowerCase())
    //         );
    //         setSearchResults(results);
    //         setIsSearching(false);
    //     }, 400);
    //     return () => clearTimeout(searchTimer.current);
    // }, [query]);

    // ── GPS location ─────────────────────────────────────────
    const handleCurrentLocation = () => {
        setIsLocating(true);
        setLocateError("");
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const addr = {
                    id: "gps-" + Date.now(),
                    label: "Current Location",
                    sub: `${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`,
                    type: "gps",
                };
                setSelectedId(addr.id);
                const updated = [addr, ...pastAddresses.filter(a => a.type !== "gps")].slice(0, 10);
                saveToStore(updated);
                setIsLocating(false);
            },
            (err) => {
                setLocateError(err.code === 1 ? "Location access denied." : "Could not get location.");
                setIsLocating(false);
            },
            { enableHighAccuracy: true, timeout: 8000 }
        );
    };

    // ── Select an address from search results ─────────────────
    const handleSelectResult = (place) => {
        const addr = {
            id: place.id,
            label: place.label,
            sub: place.sub,
            lat: place.lat,
            lng: place.lon,
            type: "recent",
        };
        setMapLocation(addr); // open map page

        setSelectedId(String(place.id));;

        const updated = [addr, ...pastAddresses.filter(a => a.id !== addr.id)].slice(0, 10);
        saveToStore(updated);

        setQuery("");
    };

    // ── Select a past address ─────────────────────────────────
    const handleSelectPast = (addr) => {
        setSelectedId(addr.id);
        // Bubble selected address up — connect to your parent:
        // onLocationSelected?.(addr);
    };

    // ── Delete a past address ─────────────────────────────────
    const handleDelete = (e, id) => {
        e.stopPropagation();
        saveToStore(pastAddresses.filter(a => a.id !== id));
        if (selectedId === id) setSelectedId(null);
    };

    // ── Save new address from form ────────────────────────────
    const handleSave = () => {
        if (!form.address.trim()) return;
        setSaving(true);
        setTimeout(() => {
            const addr = {
                id: "addr-" + Date.now(),
                label: form.label.trim() || (form.type === "home" ? "Home" : form.type === "work" ? "Work" : "Other"),
                sub: form.address.trim(),
                type: form.type,
            };
            const updated = [addr, ...pastAddresses].slice(0, 10);
            saveToStore(updated);
            setForm({ label: "", address: "", type: "home" });
            setSaving(false);
            setView("main");
        }, 400);
    };

    // ── Icon helper ───────────────────────────────────────────
    const AddrIcon = ({ type }) => {
        const map = {
            home: { Icon: Home, bg: "bg-rose-50", color: "text-rose-500" },
            work: { Icon: Briefcase, bg: "bg-blue-50", color: "text-blue-500" },
            other: { Icon: Star, bg: "bg-amber-50", color: "text-amber-500" },
            gps: { Icon: Target, bg: "bg-green-50", color: "text-green-500" },
            recent: { Icon: Clock, bg: "bg-gray-100", color: "text-gray-400" },
        };
        const cfg = map[type] ?? map.recent;
        return (
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.bg}`}>
                <cfg.Icon size={16} className={cfg.color} />
            </div>
        );
    };
    
    // ─────────────────────────────────────────────────────────
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center md:bg-black/50 md:backdrop-blur-sm transition-opacity">
            <div className="bg-[#f4f6f8] md:bg-white w-full h-full md:h-[600px] md:max-w-[520px] md:rounded-[1.5rem] md:shadow-2xl flex flex-col animate-in fade-in slide-in-from-right-8 md:slide-in-from-bottom-4 duration-300">

                {/* ══ HEADER ══ */}
                {/* Mobile */}
                <div className="md:hidden flex items-center gap-4 px-4 py-4 bg-white border-b border-gray-100">
                    <button onClick={view === "add" ? () => setView("main") : onClose}
                        className="p-2 bg-white border border-gray-200 rounded-full shadow-sm active:scale-95 transition-all">
                        <ChevronLeft size={20} className="text-gray-800" />
                    </button>
                    <h2 className="text-lg font-extrabold text-[#2d3132]">
                        {view === "add" ? "Add New Address" : "Select Location"}
                    </h2>
                </div>
                {/* Desktop */}
                <div className="hidden md:flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white rounded-t-[1.5rem]">
                    <h2 className="text-xl font-extrabold text-[#2d3132]">
                        {view === "add" ? "Add New Address" : "Your Location"}
                    </h2>
                    <button onClick={view === "add" ? () => setView("main") : onClose}
                        className="text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors">
                        <X size={18} strokeWidth={2.5} />
                    </button>
                </div>
{mapLocation && (
  <LocationMap
    location={mapLocation}
    onClose={() => setMapLocation(null)}
    onConfirm={(addr) => {

      setSelectedId(addr.id);

      const exists = pastAddresses.find(a => a.id === addr.id);

      let updated;

      if (exists) {
        updated = pastAddresses;
      } else {
        updated = [addr, ...pastAddresses].slice(0, 10);
      }

      saveToStore(updated);

      setMapLocation(null);
      onClose();
    }}
  />
)}
                {/* ══ SCROLLABLE BODY ══ */}
                <div className="flex-1 overflow-y-auto">

                    {/* ── MAIN VIEW ── */}
                    {view === "main" && (
                        <>
                            {/* Search */}
                            <div className="px-4 py-4 md:px-6 md:py-5 bg-white md:bg-transparent">
                                <div className={`flex items-center w-full bg-white md:bg-[#f4f6f8] px-4 py-3 md:py-2.5 rounded-xl border transition-all shadow-sm md:shadow-none ${query ? "border-[#e11d48] bg-white" : "border-gray-200 md:border-transparent"
                                    } focus-within:border-[#e11d48] md:focus-within:bg-white md:focus-within:border-gray-300`}>
                                    {isSearching
                                        ? <Loader2 size={18} className="text-[#e11d48] animate-spin flex-shrink-0" />
                                        : <Search size={18} className="text-gray-400 flex-shrink-0" />
                                    }
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}
                                        placeholder="Search Address"
                                        className="bg-transparent outline-none text-[14px] font-medium w-full text-gray-800 placeholder-gray-400 ml-3"
                                        autoFocus
                                    />
                                    {query && (
                                        <button onClick={() => setQuery("")}
                                            className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition flex-shrink-0 ml-2">
                                            <X size={10} className="text-white" strokeWidth={3} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* ── SEARCH RESULTS ── */}
                            {query.trim() && (
                                <div className="px-4 md:px-6 pb-4">
                                    <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                                        {searchResults.length === 0 && !isSearching ? (
                                            <div className="py-8 text-center text-sm text-gray-400">
                                                No results for "{query}"
                                            </div>
                                        ) : (
                                            searchResults.map(place => (
                                                <div key={place.id} onClick={() => handleSelectResult(place)}
                                                    className={`p-4 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group ${selectedId === place.id ? "bg-rose-50" : ""
                                                        }`}>
                                                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                                                        <MapPin size={16} className="text-gray-400" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[13px] font-bold text-gray-800 truncate">{place.label}</p>
                                                        <p className="text-[11px] text-gray-400 truncate mt-0.5">{place.sub}</p>
                                                    </div>
                                                    {selectedId === place.id
                                                        ? <CheckCircle size={18} className="text-[#e11d48] flex-shrink-0" />
                                                        : <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 transition flex-shrink-0" />
                                                    }
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* ── DEFAULT OPTIONS (when not searching) ── */}
                            {!query.trim() && (
                                <div className="px-4 md:px-6 pb-4 pt-2 md:pt-0">
                                    <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col divide-y divide-gray-100">

                                        {/* Current Location */}
                                        <div onClick={handleCurrentLocation}
                                            className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${String(selectedId)?.startsWith("gps") ? "bg-[#e11d48]" : "bg-rose-50"
                                                    }`}>
                                                    {isLocating
                                                        ? <Loader2 size={18} className="text-[#e11d48] animate-spin" />
                                                        : <Target size={18} className={selectedId?.startsWith("gps") ? "text-white" : "text-[#e11d48]"} />
                                                    }
                                                </div>
                                                <div>
                                                    <h3 className="text-[14px] font-extrabold text-[#e11d48] mb-0.5">
                                                        {isLocating ? "Getting location..." : "Use my Current Location"}
                                                    </h3>
                                                    <p className="text-[11px] text-gray-500 font-medium leading-tight max-w-[200px]">
                                                        {locateError || "Enable your current location for better services"}
                                                    </p>
                                                </div>
                                            </div>
                                            {selectedId?.startsWith("gps")
                                                ? <CheckCircle size={18} className="text-[#e11d48] flex-shrink-0" />
                                                : <button className="text-[#e11d48] border border-[#e11d48] px-4 py-1.5 rounded-lg text-[12px] font-extrabold hover:bg-rose-50 transition-colors active:scale-95 shrink-0">
                                                    Enable
                                                </button>
                                            }
                                        </div>

                                        {/* Add New Address */}
                                        <div onClick={() => setView("add")}
                                            className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                                                    <Plus size={18} className="text-[#e11d48] group-hover:rotate-90 transition-transform duration-300" />
                                                </div>
                                                <h3 className="text-[14px] font-extrabold text-[#e11d48]">Add New Address</h3>
                                            </div>
                                            <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
                                        </div>

                                        {/* Request from Friend */}
                                        <div className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                                                    <MessageCircle size={18} className="text-green-600 group-hover:scale-110 transition-transform" />
                                                </div>
                                                <h3 className="text-[14px] font-extrabold text-[#2d3132]">Request address from friend</h3>
                                            </div>
                                            <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-700 transition-colors" />
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* ── PAST / SAVED ADDRESSES ── */}
                            {!query.trim() && pastAddresses.length > 0 && (
                                <div className="px-4 md:px-6 pb-6">
                                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                                        Saved Addresses
                                    </p>
                                    <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                                        {pastAddresses.map(addr => (
                                            <div key={addr.id} onClick={() => handleSelectPast(addr)}
                                                className={`p-4 flex items-center gap-3 hover:bg-gray-50 cursor-pointer transition-colors group ${selectedId === addr.id ? "bg-rose-50" : ""
                                                    }`}>
                                                <AddrIcon type={addr.type} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[13px] font-bold text-gray-800 truncate">{addr.label}</p>
                                                    <p className="text-[11px] text-gray-400 truncate mt-0.5">{addr.sub}</p>
                                                </div>
                                                <div className="flex items-center gap-1 flex-shrink-0">
                                                    {selectedId === addr.id ? (
                                                        <CheckCircle size={18} className="text-[#e11d48]" />
                                                    ) : (
                                                        <>
                                                            <button onClick={e => handleDelete(e, addr.id)}
                                                                className="w-7 h-7 rounded-lg hover:bg-red-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                                <Trash2 size={13} className="text-red-400" />
                                                            </button>
                                                            <ChevronRight size={16} className="text-gray-300 group-hover:text-gray-500 transition" />
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* ── ADD ADDRESS VIEW ── */}
                    {view === "add" && (
                        <div className="px-4 md:px-6 py-5">

                            {/* Type selector */}
                            <div className="flex gap-2 mb-4">
                                {[
                                    { value: "home", label: "Home", Icon: Home },
                                    { value: "work", label: "Work", Icon: Briefcase },
                                    { value: "other", label: "Other", Icon: Star },
                                ].map(({ value, label, Icon }) => (
                                    <button key={value} onClick={() => setForm(f => ({ ...f, type: value }))}
                                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border-2 transition-all ${form.type === value
                                            ? "border-[#e11d48] bg-rose-50 text-[#e11d48]"
                                            : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
                                            }`}>
                                        <Icon size={14} />
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* Label */}
                            <div className="mb-3">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 block">
                                    Label (optional)
                                </label>
                                <input
                                    value={form.label}
                                    onChange={e => setForm(f => ({ ...f, label: e.target.value }))}
                                    placeholder="e.g. Mom's place, Gym..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f4f6f8] text-[14px] font-medium text-gray-800 placeholder-gray-400 outline-none focus:border-[#e11d48] focus:bg-white transition-all"
                                />
                            </div>

                            {/* Full address */}
                            <div className="mb-5">
                                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-1.5 block">
                                    Full Address *
                                </label>
                                <textarea
                                    value={form.address}
                                    onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                                    placeholder="Street, block, city, landmark..."
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f4f6f8] text-[14px] font-medium text-gray-800 placeholder-gray-400 outline-none focus:border-[#e11d48] focus:bg-white transition-all resize-none"
                                />
                            </div>

                            <button onClick={handleSave} disabled={!form.address.trim() || saving}
                                className="w-full py-3.5 rounded-xl bg-[#e11d48] text-white text-[14px] font-extrabold flex items-center justify-center gap-2 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]">
                                {saving ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                                {saving ? "Saving..." : "Save Address"}
                            </button>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default LocationSelector;
import React from "react";
import { MapPin, X } from "lucide-react";

const LocationMap = ({ location, onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      {/* Modal */}
      <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <MapPin size={18} className="text-pink-600" />
            Confirm Location
          </h2>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition"    
          >
            <X size={20} />
          </button>   
        </div>

        {/* Map */}
        <div className="relative h-[320px]"> 
          <iframe
            title="map"
            width="100%"
            height="100%"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=16&output=embed`}
          />

          {/* Center Pin */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-pink-600 p-2 rounded-full shadow-lg">
              <MapPin size={20} className="text-white" />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="p-5 space-y-3">

          <div>
            <p className="font-semibold text-gray-900 text-lg">
              {location.label}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              {location.sub}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">

            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2.5 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              onClick={() => onConfirm(location)}
              className="flex-1 bg-pink-600 text-white py-2.5 rounded-xl font-semibold hover:bg-pink-700 transition shadow-md"
            >
              Confirm & Continue
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LocationMap;
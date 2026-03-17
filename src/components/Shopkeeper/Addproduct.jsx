import React, { useState } from 'react';

// 1. ADDED onClose PROP HERE
const AddProduct = ({ onClose }) => {
  // State maps directly to what your MongoDB schema will look like
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: 'vegetables',
    price: '',
    originalPrice: '',
    stock: '',
    unit: '1 kg',
    imageUrl: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Universal handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to your Express backend
    setTimeout(() => {
      console.log("Data ready for MongoDB:", formData);
      alert(`Success! ${formData.name} has been added to the store.`);
      
      // Reset form
      setFormData({
        name: '', brand: '', category: 'vegetables', price: '', 
        originalPrice: '', stock: '', unit: '1 kg', imageUrl: '', description: ''
      });
      setIsSubmitting(false);
      
      // 2. CALL onClose AFTER SAVING TO GO BACK AUTOMATICALLY
      if (onClose) onClose();
    }, 1000);
  };

  return (
    <div className="sm:px-6 mb-12 ">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-8">
        
        {/* 3. ADDED THE BACK BUTTON ROW HERE */}
        <div className="mb-8 flex items-start sm:items-center gap-4">
          <button 
            type="button"
            onClick={onClose}
            className="mt-1 sm:mt-0 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            title="Go Back"
          >
            {/* Left Arrow SVG Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button> 
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Add New Grocery Product</h2>
            <p className="text-gray-500 text-sm mt-1">Fill in the details below to add a new item to your inventory.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
              <input 
                type="text" name="name" required
                value={formData.name} onChange={handleChange}
                placeholder="e.g. Organic Tomatoes"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <input 
                type="text" name="brand"
                value={formData.brand} onChange={handleChange}
                placeholder="e.g. Nature's Harvest"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 2: Category, Unit, Stock */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select 
                name="category" required
                value={formData.category} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
              >
                <option value="vegetables">Fresh Vegetables</option>
                <option value="fruits">Fresh Fruits</option>
                <option value="dairy">Dairy & Eggs</option>
                <option value="pantry">Pantry Staples</option>
                <option value="snacks">Snacks & Beverages</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Selling Unit *</label>
              <select 
                name="unit" required
                value={formData.unit} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white"
              >
                <option value="1 kg">1 kg</option>
                <option value="500 g">500 g</option>
                <option value="250 g">250 g</option>
                <option value="1 Liter">1 Liter</option>
                <option value="1 Piece">1 Piece</option>
                <option value="1 Dozen">1 Dozen</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Qty *</label>
              <input 
                type="number" name="stock" required min="0"
                value={formData.stock} onChange={handleChange}
                placeholder="e.g. 50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 3: Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price (₹) *</label>
              <input 
                type="number" name="price" required min="0"
                value={formData.price} onChange={handleChange}
                placeholder="0.00"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Original Price (₹) (Optional)</label>
              <input 
                type="number" name="originalPrice" min="0"
                value={formData.originalPrice} onChange={handleChange}
                placeholder="For strike-through discount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 4: Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Image URL *</label>
            <input 
              type="url" name="imageUrl" required
              value={formData.imageUrl} onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
            />
            {/* Quick Image Preview */}
            {formData.imageUrl && (
              <div className="mt-3 w-24 h-24 rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" 
                     onError={(e) => e.target.style.display = 'none'} />
              </div>
            )}
          </div>

          {/* Row 5: Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea 
              name="description" rows="4"
              value={formData.description} onChange={handleChange}
              placeholder="Describe the product, origin, freshness..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-y"
            ></textarea>
          </div>

          {/* <hr className="border-gray-100" /> */}

          {/* Submit & Cancel Buttons */}
          <div className="flex justify-end gap-4">
            {/* 4. ADDED CANCEL BUTTON AT THE BOTTOM TOO */}
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 font-medium rounded-xl transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all flex items-center justify-center min-w-[180px]"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Saving...</span>
              ) : (
                "Save Product"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;
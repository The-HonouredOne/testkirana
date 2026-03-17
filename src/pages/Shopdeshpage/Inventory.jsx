import React, { useState } from 'react'; // Added useState
import InventoryHeader from '../../components/Shopkeeper/Inventeryheader';
import InventoryStats from '../../components/Shopkeeper/Inventerystats';
import InventoryTable from '../../components/Shopkeeper/Inventeryteble';
import AddProduct from '../../components/Shopkeeper/Addproduct';

export const Inventory = () => {
    // 1. State to track which view to show (false = list view, true = form view)
    const [showAddForm, setShowAddForm] = useState(false);

    const handleSearch = (value) => {
        console.log("Searching:", value);
        // filter products here
    };

    const handleAddProduct = () => {
        console.log("Add button clicked");
        // 2. Change state to show the Add Product form
        setShowAddForm(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* 3. Conditional Rendering Logic */}
            {showAddForm ? (
                // IF TRUE: Show ONLY the Add Product Form
                <div className="p-2 sm:p-4 animate-fade-in">
                    {/* Pass onClose to AddProduct so it can close itself */}
                    <AddProduct onClose={() => setShowAddForm(false)} />
                </div>
            ) : (
                // IF FALSE: Show the Header, Stats, and Table
                <div className="animate-fade-in">
                    <div className="">
                        <InventoryHeader
                            onSearch={handleSearch}
                            onAdd={handleAddProduct}
                        />
                    </div>
                    
                    <div className="p-2 sm:p-4 space-y-6">
                        <InventoryStats
                            totalProducts={200}
                            inStock={170}
                            outOfStock={30}
                            inventoryValue={125000}
                        />
                    </div>
                    
                    <div className="p-2 sm:p-4 mb-15">
                        <InventoryTable />
                    </div>
                </div>
            )}
        </div>
    );
};
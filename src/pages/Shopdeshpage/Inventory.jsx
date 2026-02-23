import React from 'react'
import InventoryHeader from '../../components/Shopkeeper/Inventeryheader';
import InventoryStats from '../../components/Shopkeeper/Inventerystats';
import InventoryTable from '../../components/Shopkeeper/Inventeryteble';

export const Inventory = () => {

    const handleSearch = (value) => {
        console.log("Searching:", value);
        // filter products here
    };

    const handleAddProduct = () => {
        console.log("Add button clicked");
        // open modal or navigate
    };

    return (
        <>

            <div className="p-2">
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
            <div className="">
                <InventoryTable />
            </div>
        </>
    );
}

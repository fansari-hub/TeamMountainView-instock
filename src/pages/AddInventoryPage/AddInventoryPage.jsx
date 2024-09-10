import { useEffect, useRef, useState } from "react";
import axios from "axios";
import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import { Link } from "react-router-dom";
import "./AddInventoryPage.scss";

const AddInventoryPage = () => {
    const inventoryFormRef = useRef();
    const itemAvailabilityFormRef = useRef();

    const [warehousesNames, setWarehousesNames] = useState([]); 
                 
        useEffect(() => {
            const getWarehouses = async () => {
                try{
                    const response = await axios.get("http://localhost:8080/api/warehouses");
                    const warehouseDataName = response.data.map(warehouse => warehouse.warehouse_name);
                    setWarehousesNames(warehouseDataName);
                } catch (error) {
                    console.error(error);
                }
            };
            getWarehouses();
        }, [])
    //placeholder object that matches the properties of the inventory item so that styles can be streamlined

    const placeholderText = {
      item_name: "Item Name",
      description: "Please enter a brief item description...",
      category: "Please Select",
      status: "In Stock?",
      quantity: "0",
      warehouse: "Please Select"
    };

    const handleSave = async () => {
      const inventoryFormData = new FormData(inventoryFormRef.current);
      const itemAvailabilityFormData = new FormData(itemAvailabilityFormRef.current)
      const newInventoryItem = {
        item_name: inventoryFormData.get("item_name"),
        description: inventoryFormData.get("description"),
        category: inventoryFormData.get("category"),
        status: itemAvailabilityFormData.get("status"),
        quantity: itemAvailabilityFormData.get("quanity"),
        warehouse: itemAvailabilityFormData.get("warehouse"),
      };
        console.log(newInventoryItem);
        try {
          const response = await axios.post('http://localhost:8080/api/inventory', newInventoryItem);
        console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }

  return (
    <main className="main-container">
    <div className="main-container__header">
     <Link to="/inventory"><img
        src="/src/assets/images/Icons/arrow_back-24px.svg"
        alt="search icon"
      /></Link> 
      <h1 className="font-H1-PageHeader main-container__header-title">
        Add New Inventory Item
      </h1>
    </div>
    <hr className="main-container__divider" />

    <div className="two-forms">
      <InventoryAdd
        className="two-forms__first"
        inventoryToEdit={placeholderText}
        formType="inventory"
        ref={inventoryFormRef}
      />
      <hr className="two-forms__divider" />
      <InventoryAdd
        className="two-forms__second"
        inventoryToEdit={placeholderText}
        formType="item availability"
        ref={itemAvailabilityFormRef}
        warehouses={warehousesNames}
      />
    </div>
    <div className="whitespace"></div>

    <div className="main-container__footer">
    <button 
      className="font-H3-label main-container__footer-cancel cancelBtn--holder"
      ><Link className="cancelBtn" to="/inventory">Cancel</Link>
      </button>
      <button
        className="font-H3-label main-container__footer-save submitBtn"
        onClick={handleSave}
      >
        + Add Item
      </button>
    </div>
  </main>
);
};

export default AddInventoryPage;

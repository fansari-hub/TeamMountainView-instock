import { useEffect, useRef, useState } from "react";
import axios from "axios";
import InventoryAdd from "../../components/InventoryAdd/InventoryAdd";
import { Link, useNavigate } from "react-router-dom";
import "./AddInventoryPage.scss";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const AddInventoryPage = ({apiURL}) => {
    const inventoryFormRef = useRef();
    const itemAvailabilityFormRef = useRef();
    const Navigate = useNavigate();

    const [warehouses, setWarehouses] = useState([]);

                 
        useEffect(() => {
            const getWarehouses = async () => {
                try{
                    const response = await axios.get(`${apiURL}/warehouses`);
                    setWarehouses(response.data);
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
      // status: "In Stock?",
      quantity: "0",
      warehouse_id: "Please Select"
    };

    const handleSave = async () => {
      const inventoryFormData = new FormData(inventoryFormRef.current);
      const itemAvailabilityFormData = new FormData(itemAvailabilityFormRef.current)
      
      const newInventoryItem = {
        item_name: inventoryFormData.get("item_name"),
        description: inventoryFormData.get("description"),
        category: inventoryFormData.get("category"),
        // status: itemAvailabilityFormData.get("status"),
        quantity: Number(itemAvailabilityFormData.get("quantity")),
        warehouse_id: itemAvailabilityFormData.get("warehouse"),
      };
        try {
          const response = await axios.post(`${apiURL}/inventory`, newInventoryItem, {
          });
          Navigate('/inventory');
        } catch (error) {
          alert(
            `
            Error: ${error.response.data.message}
            `
          ) 
        }
    }

  return (
    <>
    <HeaderComponent />
    <div className="AddInventoryPage">
        <div className="AddInventoryPage__left">
          <div className="AddInventoryPage--spacer"></div>
        </div>
        <main className="AddInventoryPage__container">
    <div className="AddInventoryPage__container__header">
     <Link to=".." onClick={(e) => {
      e.preventDefault();
      Navigate(-1);
    }}><img
        src="/src/assets/images/Icons/arrow_back-24px.svg"
        alt="search icon"
      /></Link> 
      <h1 className="font-H1-PageHeader AddInventoryPage__container__header-title">
        Add New Inventory Item
      </h1>
    </div>
    <hr className="AddInventoryPage__container__divider" />

    <div className="AddInventoryPage__two-forms">
      <InventoryAdd
        className="AddInventoryPage__two-forms__first"
        inventoryToEdit={placeholderText}
        formType="inventory"
        ref={inventoryFormRef}
      />
      <hr className="AddInventoryPage__two-forms__divider" />
      <InventoryAdd
        className="AddInventoryPage__two-forms__second"
        inventoryToEdit={placeholderText}
        formType="item availability"
        ref={itemAvailabilityFormRef}
        warehouses={warehouses}
      />
    </div>
    <div className="AddInventoryPage--whitespace"></div>

    <div className="AddInventoryPage__container__footer">
      <div className="AddInventoryPage__container__footerHolder">
      <button 
      className="font-H3-label AddInventoryPage__container__footer-cancel AddInventoryPage__cancelBtn--holder"
      ><Link className="AddInventoryPage__cancelBtn" to="/inventory">Cancel</Link>
      </button>
      <button
        className="font-H3-label AddInventoryPage__container__footer-save AddInventoryPage__submitBtn"
        onClick={handleSave}
      >
        + Add Item
      </button>
      </div>
    </div>
  </main>
        <div className="AddInventoryPage__right">
          <div className="AddInventoryPage--spacer"></div>
        </div>
        </div>

  <FooterComponent />
  </>
);
};

export default AddInventoryPage;

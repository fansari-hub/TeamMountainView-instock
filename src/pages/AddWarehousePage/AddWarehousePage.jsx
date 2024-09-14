import "./AddWarehousePage.scss";

import NewWarehouseForm from "../../components/NewWarehouseForm/NewWarehouseForm";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const AddWarehousePage = ({ apiURL }) => {
  const warehouseFormRef = useRef();
  const contactFormRef = useRef();
  const navigate = useNavigate();

  //crate placeholder object matching the properties of a warehouse project so that the styles can be streamlined

  const placeholderText = {
    warehouse_name: "Warehouse Name",
    address: "Street Address",
    city: "City",
    country: "Country",
    contact_name: "Contact Name",
    contact_position: "Position",
    contact_phone: "Phone Number",
    contact_email: "Email",
  };
  const handleCancel = () => {
    navigate(`/warehouses`);
  };
  const handleSave = async () => {
    const warehouseFormData = new FormData(warehouseFormRef.current);
    const contactFormData = new FormData(contactFormRef.current);

    const newWarehouse = {
      warehouse_name: warehouseFormData.get("warehouse_name"),
      address: warehouseFormData.get("address"),
      city: warehouseFormData.get("city"),
      country: warehouseFormData.get("country"),
      contact_name: contactFormData.get("contact_name"),
      contact_position: contactFormData.get("contact_position"),
      contact_phone: contactFormData.get("contact_phone"),
      contact_email: contactFormData.get("contact_email"),
    };

    //backend integration
    try {
      const response = await axios.post(`${apiURL}/warehouses`, newWarehouse, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate(`/warehouses`);
    } catch (error) {
      alert(
        `Error: ${error.response.data.message} (Code: ${error.response.status})`
      );
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="InventoryListPage">
        <div className="InventoryListPage__left">
          <div className="AddInventoryPage-spacer"></div>
        </div>
        <main className="main-container">
          <div className="main-container__header">
            <img
              src="/src/assets/images/Icons/arrow_back-24px.svg"
              alt="search icon"
            />
            <h1 className="font-H1-PageHeader main-container__header-title">
              Add New Warehouse
            </h1>
          </div>
          <hr className="main-container__divider" />

          <div className="two-forms">
            <NewWarehouseForm
              className="two-forms__first"
              warehouesToEdit={placeholderText}
              formType="warehouse"
              ref={warehouseFormRef}
            />
            <hr className="two-forms__divider" />
            <NewWarehouseForm
              className="two-forms__second"
              warehouesToEdit={placeholderText}
              formType="contact"
              ref={contactFormRef}
            />
          </div>
          <div className="whitespace"></div>

          <div className="main-container__footer">
            <button
              className="font-H3-label main-container__footer-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="font-H3-label main-container__footer-save"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </main>
        <div className="InventoryListPage__right">
          <div className="AddInventoryPage-spacer"></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AddWarehousePage;

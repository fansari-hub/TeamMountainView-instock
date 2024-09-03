import "./EditWarehousePage.scss";
import { useParams } from "react-router";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import { useRef } from "react";
import axios from "axios";

const EditWarehousePage = ({ warehouseData }) => {
  const { id } = useParams();
  const warehouseToEdit = warehouseData.find((warehouse) => warehouse.id == id);
  if (!warehouseToEdit) {
    return <div>warehouse with set id not found</div>;
  }

  const warehouseFormRef = useRef();
  const contactFormRef = useRef();

  const handleSave = async () => {
    const warehouseFormData = new FormData(warehouseFormRef.current);
    const contactFormData = new FormData(contactFormRef.current);

    const updatedData = {
      id: warehouseToEdit.id,
      warehouse_name: warehouseFormData.get("warehouse_name"),
      address: warehouseFormData.get("address"),
      city: warehouseFormData.get("city"),
      country: warehouseFormData.get("country"),
      contact_name: contactFormData.get("contact_name"),
      contact_position: contactFormData.get("contact_position"),
      contact_phone: contactFormData.get("contact_phone"),
      contact_email: contactFormData.get("contact_email"),
    };
    console.log(updatedData);

    try {
      const response = await axios.put(`/warehouses/${id}/edit`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main-container">
      <div className="main-container__header">
        <img
          src="/src/assets/images/Icons/arrow_back-24px.svg"
          alt="search icon"
        />
        <h1 className="font-H1-PageHeader main-container__header-title">
          Edit Warehouse
        </h1>
      </div>
      <hr className="main-container__divider" />

      <div className="two-forms">
        <DetailsForm
          className="two-forms__first"
          warehouesToEdit={warehouseToEdit}
          formType="warehouse"
          ref={warehouseFormRef}
        />
        <hr className="two-forms__divider" />
        <DetailsForm
          className="two-forms__second"
          warehouesToEdit={warehouseToEdit}
          formType="contact"
          ref={contactFormRef}
        />
      </div>
      <div className="whitespace"></div>

      <div className="main-container__footer">
        <button className="font-H3-label main-container__footer-cancel">
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
  );
};

export default EditWarehousePage;

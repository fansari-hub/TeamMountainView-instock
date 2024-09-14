import "./EditWarehousePage.scss";
import { useParams } from "react-router";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditWarehousePage = ({ apiURL }) => {
  const { id } = useParams();
  // here grab the warehouse data specifc to an id and set it to warehouseToEdit
  const [warehouseToEdit, setWarehouseToEdit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleWarehouse = async () => {
      try {
        const response = await axios.get(`${apiURL}/warehouses/${id}`);
        setWarehouseToEdit(response.data);
      } catch (error) {
        alert(
          `Error: ${error.response.data.message} (Code: ${error.response.status})`
        );
      }
    };
    getSingleWarehouse();
  }, [id]);

  const warehouseFormRef = useRef();
  const contactFormRef = useRef();

  const handleCancel = () => {
    navigate(`/warehouses`);
  };
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

    try {
      const response = await axios.put(
        `${apiURL}/warehouses/${id}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate(`/warehouses`);
    } catch (error) {
      alert(
        `Error: ${error.response.data.message} (Code: ${error.response.status})`
      );
    }
  };

  if (!warehouseToEdit) {
    //this should work the same as if{!nextVideos || !selectedVideo} bc selectedVideo is always set after nextVideos
    return <div>Loading...</div>;
  }

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

export default EditWarehousePage;

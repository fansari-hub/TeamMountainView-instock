import "./EditWarehousePage.scss";
import { useParams } from "react-router";
import DetailsForm from "../../components/DetailsForm/DetailsForm";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
        alert(`Error: ${error.response.data.message} (Code: ${error.response.status})`);
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
      const response = await axios.put(`${apiURL}/warehouses/${id}`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate(`/warehouses`);
    } catch (error) {
      alert(`Error: ${error.response.data.message} (Code: ${error.response.status})`);
    }
  };

  if (!warehouseToEdit) {
    //this should work the same as if{!nextVideos || !selectedVideo} bc selectedVideo is always set after nextVideos
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderComponent />
      <div className="EditWarehousePage">
        <div className="EditWarehousePage__left">
          <div className="EditWarehousePage--spacer"></div>
        </div>
        <main className="EditWarehousePage__container">
          <div className="EditWarehousePage__container__header">
            <Link to="/warehouses">
              <img src="/src/assets/images/Icons/arrow_back-24px.svg" alt="back arrow" />
            </Link>
            <h1 className="font-H1-PageHeader EditWarehousePage__container__header-title">Edit Warehouse</h1>
          </div>
          <hr className="EditWarehousePage__container__divider" />

          <div className="EditWarehousePage__two-forms">
            <DetailsForm className="EditWarehousePage__two-forms__first" warehouesToEdit={warehouseToEdit} formType="warehouse" ref={warehouseFormRef} />
            <hr className="EditWarehousePage__two-forms__divider" />
            <DetailsForm className="EditWarehousePage__two-forms__second" warehouesToEdit={warehouseToEdit} formType="contact" ref={contactFormRef} />
          </div>
          <div className="EditWarehousePage__whitespace"></div>

          <div className="EditWarehousePage__container__footer">
            <button className="font-H3-label EditWarehousePage__container__footer-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="font-H3-label EditWarehousePage__container__footer-save" onClick={handleSave}>
              Save
            </button>
          </div>
        </main>
        <div className="EditWarehousePage__right">
          <div className="EditWarehousePage--spacer"></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default EditWarehousePage;

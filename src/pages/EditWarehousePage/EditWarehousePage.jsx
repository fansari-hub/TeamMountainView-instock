import "./EditWarehousePage.scss";
import { useParams } from "react-router";
import DetailsForm from "../../components/DetailsForm/DetailsForm";

const EditWarehousePage = ({ warehouseData }) => {
  const { id } = useParams();
  const warehouseToEdit = warehouseData.find((warehouse) => warehouse.id == id);
  if (!warehouseToEdit) {
    return <div>warehouse with set id not found</div>;
  }
  const onSubmit = () => {};
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
      <DetailsForm warehouesToEdit={warehouseToEdit} formType="warehouse" />
      <hr className="main-container__divider" />
      <DetailsForm warehouesToEdit={warehouseToEdit} formType="contact" />
      <div className="whitespace"></div>

      <div className="main-container__footer">
        <button className="font-H3-label main-container__footer-cancel">
          Cancel
        </button>
        <button className="font-H3-label main-container__footer-save">
          Save
        </button>
      </div>
    </main>
  );
};

export default EditWarehousePage;

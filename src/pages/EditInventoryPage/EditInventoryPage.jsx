import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import axios from "axios";


const EditInventoryPage = ({apiURL}) => {
  const { id } = useParams();

  //Grab the inventory data specific to an id
  //Set the id to inventoryToEdit
  const [inventoryToEdit, setInventoryToEdit] = useState(null);
  const [warehouses, setWarehouses] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getSingleInventory = async () => {
      try{
        const response = await axios.get(`${apiURL}/inventory/${id}`);
        setInventoryToEdit(response.data);
      }catch (error) {
        console.error(error);
      }
    };
    const getWarehouses = async () => {
      try{
        const response = await axios.get(`${apiURL}/warehouses`);
        setWarehouses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleInventory();
    getWarehouses();
  }, [id]);

  const inventoryFormRef = useRef();
  const itemAvailabilityFormRef = useRef();

  const handleCancel = () => {
    navigate("/inventory");
  }
 
  const handleSave = async () => {
    const inventoryFormData = new FormData(inventoryFormRef.current);
    const itemAvailabilityFormData = new FormData(itemAvailabilityFormRef.current);

    const updatedData = {
      id: inventoryToEdit.id,
      item_name: inventoryFormData.get("item_name"),
      description: inventoryFormData.get("description"),
      category: inventoryFormData.get("category"),
      quantity: Number(itemAvailabilityFormData.get("quantity")),
      warehouse_id: Number(itemAvailabilityFormData.get("warehouse"))
    };

    try{
      const response = await axios.put(
        `${apiURL}/inventory/${id}`,
        updatedData,
      );
      navigate('/inventory');
    }catch (error) {
      console.error(error);
    }
  };

  if (!inventoryToEdit){
    return <div>Loading....</div>;
  }
  return (
    <>
    <HeaderComponent />
  <main className="main-container">
    <div className="main-container__header">
      <img
        src="/src/assets/images/Icons/arrow_back-24px.svg"
        alt="search icon"
      />
      <h1 className="font-H1-PageHeader main-container__header-title">
        Edit Inventory
      </h1>
    </div>
    <hr className="main-container__divider" />

    <div className="two-forms">
      <InventoryEdit
        className="two-forms__first"
        inventoryToEdit={inventoryToEdit}
        formType="inventory"
        ref={inventoryFormRef}
      />
      <hr className="two-forms__divider" />
      <InventoryEdit
        className="two-forms__second"
        inventoryToEdit={inventoryToEdit}
        formType="item availability"
        ref={itemAvailabilityFormRef}
        warehouses={warehouses}
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
  <FooterComponent />
  </>
  );
};

export default EditInventoryPage;

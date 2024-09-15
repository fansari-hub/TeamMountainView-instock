import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import InventoryEdit from "../../components/InventoryEdit/InventoryEdit";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import axios from "axios";
import "./EditInventoryPage.scss";


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
      alert(
        `
        Error: ${error.response.data.message}
        `
      )
    }
  };

  if (!inventoryToEdit){
    return <div>Loading....</div>;
  }

  return (
    <>
    <HeaderComponent />
    <div className="editInventoryPage">
        <div className="editInventoryPage__left">
          <div className="editInventoryPage--spacer"></div>
        </div>
  <div className="editInventoryPage__container">
    <div className="editInventoryPage__container__header">
    <Link to=".." onClick={(e) => {
      e.preventDefault();
      navigate(-1);
    }}><img
        src="/src/assets/images/Icons/arrow_back-24px.svg"
        alt="search icon"
      /></Link> 
      <h1 className="font-H1-PageHeader editInventoryPage__container__header-title">
        Edit Inventory Item
      </h1>
    </div>
    <hr className="editInventoryPage__container__divider" />

    <div className="editInventoryPage__two-forms">
      <InventoryEdit
        className="editInventoryPage__two-forms__first"
        inventoryToEdit={inventoryToEdit}
        formType="inventory"
        ref={inventoryFormRef}
      />
      <hr className="editInventoryPage__two-forms__divider" />
      <InventoryEdit
        className="editInventoryPage__two-forms__second"
        inventoryToEdit={inventoryToEdit}
        formType="item availability"
        ref={itemAvailabilityFormRef}
        warehouses={warehouses}
      />        
    </div>
    <div className="editInventoryPage__whitespace"></div>

    <div className="editInventoryPage__container__footer">
      <div className="editInventoryPage__container__footerHolder">
      <button
        className="font-H3-label editInventoryPage__container__footer-cancel"
      >
       <Link className="AddInventoryPage__cancelBtn" to="/inventory">Cancel</Link>
      </button>
      <button
        className="font-H3-label editInventoryPage__container__footer-save editInventoryPage__submitBtn"
        onClick={handleSave}
      >
        Save
      </button>
      </div>
    </div>
  </div>
  <div className="editInventoryPage__right">
          <div className="editInventoryPage--spacer"></div>
        </div>
        </div>
  <FooterComponent />
  </>
  );
};

export default EditInventoryPage;

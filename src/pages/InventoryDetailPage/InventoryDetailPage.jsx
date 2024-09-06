import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./InventoryDetailPage.scss";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import InfoInventoryItem from "../../components/InfoInventoryItem/InfoInventoryItem";

const InventoryDetailPage = ({inventoryData, warehouseData}) => {

  const { id } = useParams();
  const inventoryItemIndex = inventoryData.findIndex((o) => o.id == id);
  const singleInventoryItemDetails = inventoryData[inventoryItemIndex];
  const warehouseIndex = warehouseData.findIndex((o) => o.id == singleInventoryItemDetails.warehouse_id)

  return (
    <>
      <HeaderComponent />
      <main className="InventoryDetailPage__main">
        <div className="InventoryDetailPage__main__header">
          <div className="InventoryDetailPage__main__header__titlegroup">
            <NavLink to={"/inventory"}>
              <img className="InventoryDetailPage__main__header__titlegroup__backarrow" src="/src/assets/images/Icons/arrow_back-24px.svg" alt="back arrow" />
            </NavLink>
            <h2 className="InventoryDetailPage__main__header__titlegroup__title font-H1-PageHeader">{singleInventoryItemDetails.item_name}</h2>
          </div>
          <NavLink to={"/inventory/" + id + "/edit"}>
            <button className="InventoryDetailPage__main__header__button">
              <img className="InventoryDetailPage__main__header__button__icon" src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
              <div className="InventoryDetailPage__main__header__button__label">Edit</div>
            </button>
          </NavLink>
        </div>
        <div>
          <InfoInventoryItem SingleInventoryDetails={singleInventoryItemDetails} warehouseName={warehouseData[warehouseIndex].warehouse_name} />
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default InventoryDetailPage;

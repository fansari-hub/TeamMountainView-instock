import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryDetailPage.scss";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import InfoInventoryItem from "../../components/InfoInventoryItem/InfoInventoryItem";

const InventoryDetailPage = ({ apiURL }) => {
  const { id } = useParams();

  let [inventoryData, setInventoryData] = useState({});

  useEffect(() => {
    const fetchDataInventory = async () => {
      let response;
      try {
        response = await axios.get(apiURL + "/inventory/" + id);
        setInventoryData(response.data);
      } catch (error) {
        alert(`InventoryWarehousePage.useEffect().fetchDataWarehose() requested failed with error: ${error}`);
        return -1;
      }
    };
    fetchDataInventory();
  }, [apiURL]);

  const navigateBack = (() =>{
    history.back();
  })

  return (
    <>
      <HeaderComponent />
      <div className="InventoryListPage">
        <div className="InventoryListPage__left">
          <div className="InventoryListPage-spacer"></div>
        </div>
        <main className="InventoryDetailPage__main">
          <div className="InventoryDetailPage__main__header">
            <div className="InventoryDetailPage__main__header__titlegroup">
              <NavLink onClick={navigateBack}>
                <img className="InventoryDetailPage__main__header__titlegroup__backarrow" src="/src/assets/images/Icons/arrow_back-24px.svg" alt="back arrow" />
              </NavLink>
              <h2 className="InventoryDetailPage__main__header__titlegroup__title font-H1-PageHeader">{inventoryData.item_name}</h2>
            </div>
            <NavLink to={"/inventory/" + id + "/edit"}>
              <button className="InventoryDetailPage__main__header__button">
                <img className="InventoryDetailPage__main__header__button__icon" src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
                <div className="InventoryDetailPage__main__header__button__label font-H3-label">Edit</div>
              </button>
            </NavLink>
          </div>
          <div>
            <InfoInventoryItem SingleInventoryDetails={inventoryData} />
          </div>
        </main>
        <div className="InventoryListPage__right">
          <div className="InventoryListPage-spacer"></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default InventoryDetailPage;

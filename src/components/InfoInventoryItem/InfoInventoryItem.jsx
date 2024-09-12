import "./InfoInventoryItem.scss";

const InfoInventoryItem = ({ SingleInventoryDetails }) => {
  return (
    <>
      <hr className="InfoInventoryItem__ruler" />
      <div className="InfoInventoryItem">
        <div className="InfoInventoryItem__col">
          <div className="InfoInventoryItem__col__group">
            <div className="InfoInventoryItem__col__group__label font-H4-TableHeader">ITEM DESCRIPTION:</div>
            <p className="InfoInventoryItem__col__group__value font-P2-BodyMedium">{SingleInventoryDetails.description}</p>
          </div>
          <div className="InfoInventoryItem__col__group">
            <div className="InfoInventoryItem__col__group__label font-H4-TableHeader">CATEGORY:</div>
            <p className="InfoInventoryItem__col__group__value  font-P2-BodyMedium">{SingleInventoryDetails.category}</p>
          </div>
        </div>
        <div className="InfoInventoryItem__col">
          <div className="InfoInventoryItem__col__group InfoInventoryItem__col__group--double">
            <div>
            <div className="InfoInventoryItem__col__group__label font-H4-TableHeader">STATUS:</div>
            <p className="InfoInventoryItem__col__group__value font-P2-BodyMedium">{SingleInventoryDetails.status}</p>
            </div>
            <div>
            <div className="InfoInventoryItem__col__group__label font-H4-TableHeader">QUANTITY:</div>
            <p className="InfoInventoryItem__col__group__value  font-P2-BodyMedium">{SingleInventoryDetails.quantity}</p>
            </div>
          </div>
          <div className="InfoInventoryItem__col__group">
            <div className="InfoInventoryItem__col__group__label font-H4-TableHeader">WAREHOUSE:</div>
            <p className="InfoInventoryItem__col__group__value font-P2-BodyMedium">{SingleInventoryDetails.warehouse_name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoInventoryItem;

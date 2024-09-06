import "./InfoWarehouse.scss";

const InfoWarehouse = ({ SingleWarehouseDetails }) => {

  return (
    <>
    <hr className="InfoWarehouse__ruler" />
      <div className="InfoWarehouse">
        <div className="InfoWarehouse__section InfoWarehouse__section--top">
          <div className="InfoWarehouse__section__label font-H4-TableHeader">WAREHOUSE ADDRESS:</div>
          <div className="InfoWarehouse__section__group InfoWarehouse__section__group--top">
            <p className="InfoWarehouse__section__group__value font-P2-BodyMedium">{SingleWarehouseDetails.address},&nbsp;</p>
            <p className="InfoWarehouse__section__group__value font-P2-BodyMedium">
              {SingleWarehouseDetails.city}, {SingleWarehouseDetails.country}
            </p>
          </div>
        </div>
        <div className="InfoWarehouse__section">
          <div className="InfoWarehouse__section__label font-H4-TableHeader">CONTACT NAME:</div>
          <div className="InfoWarehouse__section__group">
            <p className="InfoWarehouse__section__group__value font-P2-BodyMedium">{SingleWarehouseDetails.contact_name}</p>
            <p className="InfoWarehouse__section__group__value font-P2-BodyMedium">{SingleWarehouseDetails.contact_position}</p>
          </div>
        </div>

        <div className="InfoWarehouse__section">
          <div className="InfoWarehouse__section__label font-H4-TableHeader">CONTACT INFORMATION</div>
          <div className="InfoWarehouse__section__group">
            <p className="InfoWarehouse__section__group__value font-P2-BodyMedium">{SingleWarehouseDetails.contact_phone}</p>
            <p className="InfoWarehouse__section__group__value font-P2-BodyMedium">{SingleWarehouseDetails.contact_email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoWarehouse;

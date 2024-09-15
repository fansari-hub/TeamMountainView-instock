import { forwardRef, useState } from "react";
import "./InventoryAdd.scss";
import errorImage from "../../assets/images/Icons/error-24px.svg";

const InventoryAdd = forwardRef(({ inventoryToEdit, formType, className, warehouses }, ref) => {
  const initialStatus = inventoryToEdit.quantity > 0 ? "in_stock" : "out_of_stock";

  const [formData, setFormData] = useState({
    ...inventoryToEdit,
    status: initialStatus,
    warehouse: inventoryToEdit.warehouse ? inventoryToEdit.warehouse.id : "",
  });
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === "status" && value === "out_of_stock") || value < 0) {
      setFormData({ ...formData, status: value, quantity: 0 });
      setSelectedStatus(value);
    } else {
      setFormData({ ...formData, [name]: value });
      //Updates the selected status if the status radio button is changed
      if (name === "status") {
        setSelectedStatus(value);
      }
    }
  };

  //the name property of this object is like an id of the input field later
  const inventoryFields = [
    {
      title: "Item Name",
      name: "item_name",
      value: formData.item_name,
    },
    {
      title: "Description",
      name: "description",
      value: formData.description,
    },
    {
      title: "Category",
      name: "category",
      value: formData.category,
    },
  ];

  const itemAvailabilityFields = [
    {
      title: "Status",
      name: "status",
      value: formData.status,
    },
    {
      title: "Quantity",
      name: "quantity",
      value: formData.quantity,
    },
    {
      title: "Warehouse",
      name: "warehouse",
      value: formData.warehouse,
    },
  ];

  const fieldsToRender = formType === "inventory" ? inventoryFields : itemAvailabilityFields;

  const formTitle = formType === "inventory" ? "Item Details" : "Item Availability";

  return (
    <form ref={ref} className={`inventoryAddForm ${className}`}>
      <h2 className="font-H2-SubHeader inventoryAddForm__title">{formTitle}</h2>
      {fieldsToRender.map((field, index) => {
        const hasError = !formData[field.name] || (field.name === "quantity" && selectedStatus === "in_stock" && formData.quantity <= 0);
        const errorMessage = hasError ? "This field is required" : "";
        if (field.name === "status") {
          return (
            <div key={index}>
              <h3 className="font-H3-label inventoryAddForm__field-title">{field.title}</h3>
              <div className="inventoryAddForm__labelHolder inventoryAddForm__labelHolde--shrink">
                <label className={`font-P2-BodyMedium inventoryAddForm--fontSize ${selectedStatus === "in_stock" ? "addActiveSelect" : ""}`}>
                  <input type="radio" name="status" value="in_stock" checked={selectedStatus === "in_stock"} onChange={handleChange} className="font-H3-label" />
                  In stock
                </label>
                <label className={`font-P2-BodyMedium inventoryAddForm--fontSize ${selectedStatus === "out_of_stock" ? "addActiveSelect" : ""}`}>
                  <input type="radio" name="status" value="out_of_stock" checked={selectedStatus === "out_of_stock"} onChange={handleChange} />
                  Out of stock
                </label>
              </div>
            </div>
          );
        }
        if (field.name === "quantity") {
          return (
            <div key={index} className={`${selectedStatus === "out_of_stock" ? "hide-quantity" : ""}`}>
              <h3 className="font-H3-label inventoryAddForm__field-title">{field.title}</h3>
              <input className={`${field.value === "" ? "addNoData" : ""} inventoryAddForm__input-placeholder inventoryAddForm__input-placeholder--shrink`} name={field.name} placeholder="0" value={formData.quantity} onChange={handleChange} />
              {hasError && (
                <div className="editError__container">
                  <img src={errorImage} alt="error" className="error-image" />
                  <p className="editError__message font-P2-BodyMedium">{errorMessage}</p>
                </div>
              )}
            </div>
          );
        }
        if (field.name === "category") {
          return (
            <div key={index}>
              <h3 className="font-H3-label inventoryAddForm__field-title">{field.title}</h3>
              <select name="category" value={formData.category || ""} onChange={handleChange} className={`${field.value === "" ? "addNoData" : ""} inventoryAddForm__input-placeholder inventoryAddForm__input-placeholder--dropDown`}>
                <option value="">Please select</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
                <option value="Electronics">Electronics</option>
              </select>
              {hasError && (
                <div className="editError__container">
                  <img src={errorImage} alt="error" className="error-image" />
                  <p className="editError__message font-P2-BodyMedium">{errorMessage}</p>
                </div>
              )}
            </div>
          );
        }
        if (field.name === "warehouse") {
          return (
            <div key={index}>
              <h3 className="font-H3-label inventoryAddForm__field-title">{field.title}</h3>
              <select name="warehouse" value={formData.warehouse || ""} onChange={handleChange} className={`${field.value === "" ? "addNoData" : ""} inventoryAddForm__input-placeholder inventoryAddForm__input-placeholder--dropDown`}>
                <option value="">Please select</option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id} value={warehouse.id}>
                    {warehouse.warehouse_name}
                  </option>
                ))}
              </select>
              {hasError && (
                <div className="editError__container">
                  <img src={errorImage} alt="error" className="error-image" />
                  <p className="editError__message font-P2-BodyMedium">{errorMessage}</p>
                </div>
              )}
            </div>
          );
        }
        if (field.name === "description") {
          return (
            <div key={index}>
              <h3 className="font-H3-label inventoryAddForm__field-title ">{field.title}</h3>
              <textarea className={`${field.value === "" ? "addNoData" : ""} font-P2-BodyMedium inventoryAddForm__input-placeholder inventoryAddForm__description`} name={field.name} placeholder={field.value} onChange={handleChange}></textarea>
              {hasError && (
                <div className="editError__container">
                  <img src={errorImage} alt="error" className="error-image" />
                  <p className="editError__message font-P2-BodyMedium">{errorMessage}</p>
                </div>
              )}
            </div>
          );
        }
        return (
          <div key={index}>
            <h3 className="font-H3-label inventoryAddForm__field-title">{field.title}</h3>
            <input className={`${field.value === "" ? "addNoData" : ""} inventoryAddForm__input-placeholder`} name={field.name} placeholder={field.value} onChange={handleChange} />
            {hasError && (
              <div className="editError__container">
                <img src={errorImage} alt="error" className="error-image" />
                <p className="editError__message font-P2-BodyMedium">{errorMessage}</p>
              </div>
            )}
          </div>
        );
      })}
    </form>
  );
});
export default InventoryAdd;

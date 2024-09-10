import { forwardRef, useState } from "react";
import "./InventoryAdd.scss";

const InventoryAdd = forwardRef(
    ({ inventoryToEdit, formType, className, warehouses}, ref) => {

      const [formData, setFormData] = useState({ ...inventoryToEdit });
      const [selectedStatus, setSelectedStatus] = useState(formData.status || "");  
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        //below we're updating formData with the latest value for each field (identified by name)
        setFormData({ ...formData, [name]: value });

        // Updates the selected status if the status radio button is changed
        if (name === "status"){
            setSelectedStatus(value);
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
            value: formData.category
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
        }
      ];
  
      const fieldsToRender =
        formType === "inventory" ? inventoryFields : itemAvailabilityFields;
  
      const formTitle =
        formType === "inventory" ? "Item Details" : "Item Availability";
  
      return (
        <form ref={ref} className={`form ${className}`}>
          <h2 className="font-H2-SubHeader form__title">{formTitle}</h2>
          {fieldsToRender.map((field, index) => { 
                          if (field.name ==="status") {
                            return (
                               <div key={index}>
                                    <h3 className="font-H3-label form__field-title">{field.title}</h3>
                                    <div className="form__labelHolder">
                                        <label className={`font-P2-BodyMedium form--fontSize ${selectedStatus === "in_stock" ? "activeSelect" : ""}`}>
                                            <input
                                                type="radio"
                                                name="status"
                                                value="in_stock"
                                                checked={formData.status === "in_stock"}
                                                onChange={handleChange}
                                                className="font-H3-label"
                                            />
                                            In stock
                                        </label>
                                        <label className={`font-P2-BodyMedium form--fontSize ${selectedStatus === "out_of_stock" ? "activeSelect" : ""}`}>
                                            <input
                                                type="radio"
                                                name="status"
                                                value="out_of_stock"
                                                checked={formData.status === "out_of_stock"}
                                                onChange={handleChange}
                                                
                                            />
                                            Out of stock
                                        </label>
                                    </div>
                               </div>
                            )
                          }
                          if (field.name ==="category") {
                            return (
                                <div key={index}>
                                     <h3 className="font-H3-label form__field-title">{field.title}</h3>
                                     <select
                                        name="category"
                                        value={formData.category || ""}
                                        onChange={handleChange}
                                        className="form__input-placeholder"
                                     >
                                        <option value="">Please select</option>
                                        <option value="gear">Gear</option>
                                        <option value="apparel">Apparel</option>
                                        <option value="accessories">Accessories</option>
                                        <option value="health">Health</option>
                                        <option value="electronics">Electronics</option>
                                     </select>
                                </div>
                             )
                          }
                          if (field.name ==="warehouse") {
                            return (
                                <div key={index}>
                                     <h3 className="font-H3-label form__field-title">{field.title}</h3>
                                     <select
                                        name="warehouse"
                                        value={formData.warehouse || ""}
                                        onChange={handleChange}
                                        className="form__input-placeholder"
                                     >
                                        <option value="">Please select</option>
                                        {warehouses.map((warehouse, id) => (
                                            <option key={id} value={warehouse.warehouse_name}>
                                                {warehouse}
                                            </option>
                                        ))}
                                     </select>
                                </div>
                             )
                          }
            return (<div key={index}>
              <h3 className="font-H3-label form__field-title">{field.title}</h3>
             <input
                className="form__input-placeholder"
                name={field.name}
                defaultValue={field.value}
                onChange={handleChange}
              />
            </div>)
          }
          )}
        </form>
      );
    }
  );
export default InventoryAdd;
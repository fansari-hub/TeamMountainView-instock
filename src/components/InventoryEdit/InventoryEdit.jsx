import { forwardRef, useState } from "react";
import "./inventoryEdit.scss";
import errorImage from "../../assets/images/Icons/error-24px.svg";

const InventoryEdit = forwardRef(
    ({inventoryToEdit, formType, className, warehouses}, ref) => {
      //Determines the initial status based on the quantity
      const initialStatus = inventoryToEdit.quantity > 0 ? "in_stock" : "out_of_stock";
      
      const [formData, setFormData] = useState({
            ...inventoryToEdit,
            status: initialStatus,
        });
        const [selectedStatus, setSelectedStatus] = useState(initialStatus);

        const handleChange = (e) => {
            const {name, value} = e.target;
            if(name === "status" && value === "out_of_stock" || value < 0){
              setFormData({...formData, status: value, quantity: 0 });
              setSelectedStatus(value);
            }else{
            setFormData({...formData, [name]: value});
                        //Updates the selected status if the status radio button is changed
            if (name==="status"){
                setSelectedStatus(value);
            }}

        };

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
              value: formData.warehouse_id,             
            }
          ];
          const fieldsToRender =
        formType === "inventory" ? inventoryFields : itemAvailabilityFields;
  
      const formTitle =
        formType === "inventory" ? "Item Details" : "Item Availability";

        return (
            <form ref={ref} 
            className={`inventoryEditForm ${className}`}>
              <h2 className="font-H2-SubHeader inventoryEditForm__title">{formTitle}</h2>
              {fieldsToRender.map((field, index) => { 
                   const hasError = (!formData[field.name] || (field.name === "quantity" && selectedStatus === "in_stock" && formData.quantity <= 0));
                   const errorMessage = hasError ? "This field is required" : "";

                              if (field.name ==="status") {
                                return (
                                   <div key={index}>
                                        <h3 className="font-H3-label inventoryEditForm__field-title">{field.title}</h3>
                                        <div className="inventoryEditForm__labelHolder inventoryEditForm__labelHolder--shrink">
                                            <label className={`font-P2-BodyMedium inventoryEditForm--fontSize ${selectedStatus === "in_stock" ? "activeSelect" : ""}`}>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value="in_stock"
                                                    checked={selectedStatus === "in_stock"}
                                                    onChange={handleChange}
                                                    className="font-H3-label"
                                                />
                                                In stock
                                            </label>
                                            <label className={`font-P2-BodyMedium inventoryEditForm--fontSize ${selectedStatus === "out_of_stock" ? "activeSelect" : ""}`}>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value="out_of_stock"
                                                    checked={selectedStatus === "out_of_stock"}
                                                    onChange={handleChange}
                                                />
                                                Out of stock
                                            </label>
                                        </div>
                                   </div>
                                )
                              }
                              if (field.name === "quantity") {
                                return(
                                  <div key={index} className={`${selectedStatus === "out_of_stock" ? "hide-quantity" : ""}`}>
                                  <h3 className="font-H3-label inventoryEditForm__field-title">{field.title}</h3>
                                  <input
                                  className={`${field.value === "" ? "editNoData" : ""} inventoryEditForm__input-placeholder inventoryEditForm__input-placeholder--shrink`}
                                     name={field.name}
                                    value={formData.quantity}
                                     onChange={handleChange}
                                               />
                                     {hasError && (
                    <div className="editError__container">
                      <img src={errorImage} alt="error" className="editError-image" />
                    <p className="editError__message font-P2-BodyMedium" >{errorMessage}</p>
                    </div>)}
                                     </div>
                                )
                              }
                              if (field.name ==="category") {
                                return (
                                    <div key={index}>
                                         <h3 className="font-H3-label inventoryEditForm__field-title">{field.title}</h3>
                                         <select
                                            name="category"
                                            value={field.value}
                                            onChange={handleChange}
                                            className={`inventoryEditForm__input-placeholder inventoryEditForm__input-placeholder--dropDown ${field.value === "" ? "editNoData" : ""}`}
                                         >
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
                    <p className="editError__message font-P2-BodyMedium" >{errorMessage}</p>
                    </div>)}
                                    </div>
                                 )
                              }
                              if (field.name ==="warehouse") {
                                return (
                                    <div key={index}>
                                         <h3 className="font-H3-label inventoryEditForm__field-title">{field.title}</h3>
                                         <select
                                            name="warehouse"
                                            onChange={handleChange}
                                            className="inventoryEditForm__input-placeholder inventoryEditForm__input-placeholder--dropDown"
                                         >
                                            <option value={inventoryToEdit.warehouse_id}>{inventoryToEdit.warehouse_name}</option>
                                            {warehouses.filter((warehouse) => {
                                              return warehouse.warehouse_name !== inventoryToEdit.warehouse_name;
                                                }).map((warehouse) => (
                                                <option key={warehouse.id} value={warehouse.id}>
                                                    {warehouse.warehouse_name}
                                                </option>
                                            ))};
                                         </select>
                                    </div>
                                 )
                              }
                              if (field.name ==="description"){
                                return (<div key={index}>
                                
                                  <h3 className="font-H3-label inventoryEditForm__field-title ">{field.title}</h3>
                                              <textarea
                                    className={`font-P2-BodyMedium inventoryEditForm__input-placeholder inventoryEditForm__description ${field.value === "" ? "editNoData" : ""}`}
                                    name={field.name}
                                    defaultValue={field.value}
                                    onChange={handleChange}
                                    required
                                  ></textarea>
                                  {hasError && (
                    <div className="editError__container">
                      <img src={errorImage} alt="error" className="error-image" />
                    <p className="editError__message font-P2-BodyMedium" >{errorMessage}</p>
                    </div>)}
                                </div>)
                              }
                return (<div key={index}>
                  <h3 className="font-H3-label inventoryEditForm__field-title">{field.title}</h3>
                              <input
                    className={`inventoryEditForm__input-placeholder ${field.value === "" ? "editNoData" : ""} ${hasError ? "error" : ""}`}
                    name={field.name}
                    defaultValue={field.value}
                    onChange={handleChange}
                    required
                  />
                  {hasError && (
                    <div className="error__container">
                      <img src={errorImage} alt="error" className="error-image" />
                    <p className="editError__message font-P2-BodyMedium" >{errorMessage}</p>
                    </div>)}
                    </div>)
              }
              )}
            </form>
          );
    }
);
 
export default InventoryEdit;
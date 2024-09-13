import { forwardRef, useState } from "react";

const InventoryEdit = forwardRef(
    ({inventoryToEdit, formType, className, warehouses}, ref) => {
      console.log(warehouses);
        const [formData, setFormData] = useState({
            ...inventoryToEdit
        });
        const [selectedStatus, setSelectedStatus] = useState(
            formData.status || "out_of_stock"
        )

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({...formData, [name]: value});
                        //Updates the selected status if the status radio button is changed
            if (name==="status"){
                setSelectedStatus(value);
            }
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
            className={`form ${className}`}>
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
                                  <h3 className="font-H3-label form__field-title">{field.title}</h3>
                                  <input
                                  className="form__input-placeholder"
                                     name={field.name}
                                    defaultValue={field.value}
                                     onChange={handleChange}
                                               />
                                     </div>
                                )
                              }
                              if (field.name ==="category") {
                                return (
                                    <div key={index}>
                                         <h3 className="font-H3-label form__field-title">{field.title}</h3>
                                         <select
                                            name="category"
                                            defaultValue={field.value}
                                            onChange={handleChange}
                                            className="form__input-placeholder"
                                         >
                                            <option value="">Please select</option>
                                            <option value="Gear">Gear</option>
                                            <option value="Apparel">Apparel</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Health">Health</option>
                                            <option value="Electronics">Electronics</option>
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
                                          
                                            onChange={handleChange}
                                            className="form__input-placeholder"
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
                                  <h3 className="font-H3-label form__field-title ">{field.title}</h3>
                                              <textarea
                                    className="font-P2-BodyMedium form__input-placeholder form__description"
                                    name={field.name}
                                    defaultValue={field.value}
                                    onChange={handleChange}
                                  ></textarea>
                                </div>)
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
 
export default InventoryEdit;
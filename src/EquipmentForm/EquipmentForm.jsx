
const EquipmentForm = ({ onSave, disabled = false, equipment, onCancel }) => {
    
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const entries = [...formData.entries()];
        const equipment = Object.fromEntries(entries);
        onSave(equipment);
        console.log("onSave prop:", onSave);
   
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label" htmlFor="name">Name:</label>
                <input
                    className="form-control"
                    defaultValue={equipment ? equipment.name : null}
                    name="name"
                    id="name"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="level">Type:</label>
                <input
                    className="form-control"
                    defaultValue={equipment ? equipment.type : null}
                    name="type"
                    id="type"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="position">Amount:</label>
                <input
                    className="form-control"
                    defaultValue={equipment ? equipment.amount : null}
                    name="amount"
                    id="amount"

                />
            </div>

            <div className="d-flex justify-content-start gap-3">
                <button type="submit" className="btn btn-primary" disabled={disabled}>
                    {equipment ? "Update Equipment" : "Create Equipment"}
                </button>

                <button className="btn btn-danger" type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EquipmentForm;




import React from 'react'

const AddModal = () => {
  return (
    <form className="modalBackground" onSubmit={handleAddDrugSubmit}>
      <div className="modalContainer">
        <div className="title">
          <h4 className="modalTitle">ADD DRUG</h4>
        </div>

        <div className="modalBody">
          <div>
            <label className="modalLabel">Name of Drug:</label>
            <input
              type="text"
              placeholder="Eg: Paracetamol"
              className="modalActionName"
              name="drugName"
              value={drugName}
            //   onChange={(e) => setDrugName(e.target.value)}
              required
            />

            <label className="modalLabel">Price:</label>
            <input
              type="number"
              className="modalActionName"
              placeholder="Eg: GHC 20"
              name="drugPrice"
              value={drugPrice}
            //   onChange={(e) => setDrugPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="footer">
          <button type="submit" className="acceptModalButton">
            Save
          </button>
          <button
            // onClick={() => props.onClose?.()}
            className="declineModalButton"
          >
            Close
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddModal
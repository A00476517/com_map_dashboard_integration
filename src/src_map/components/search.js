import React, { Component } from "react";
import InputRange from "react-input-range";

class Sreach extends Component {
  state = {};
  render() {
    let {
      types,
      rooms,
      areas,
      rents,
      deposits,
      slideOpen,
      onChangeSlide,
      onChangeType,
      onChangeRoom,
      onChangeArea,
      onChangeRent,
      onChangeDeposit,
      onChangeTour,
      getPlacesCount,
      disableTour
    } = this.props;

    const fileUploadLabelStyle = {
      cursor: 'pointer',
      display: 'inline-block',
      padding: '10px 15px',
      border: '2px solid #ddd',
      borderRadius: '5px', // Making it square
      color: '#555',
      transition: 'background-color 0.3s ease',
      ':hover': {
        backgroundColor: '#f0f0f0'
      },
      'i': {
        marginRight: '5px'
      },
      width: '95%', // Set width to match height
      height: '100px', // Set height
      textAlign: 'center',
      lineHeight: '100px' // Center content vertically
    };
    

    const fileUploadInputStyle = {
      display: 'none'
    };

    return (
      <React.Fragment>
        <header className="sc-slide-header">
          <h5>Comparision</h5>

          <i
            className="sc-icon-menu sc-slide-toggle"
            onClick={() => {
              onChangeSlide(!slideOpen);
            }}
          ></i>
        </header>

        <div className="sc-slide-body">
          <form className="sc-form">
          

<div style={{ marginBottom: '20px' }}> {/* Applying inline style */}
          <h6>Select Southwest property</h6>
          <label htmlFor="file-upload" style={fileUploadLabelStyle}>
            <i className="fas fa-cloud-upload-alt"></i>
            Choose a file2
          </label>
          
          {/* <input id="file-upload" type="file" style={fileUploadInputStyle} /> */}
        </div>

        <div style={{ marginBottom: '20px' }}> {/* Applying inline style */}
          <h6>Select any other propety</h6>
          <label htmlFor="file-upload" style={fileUploadLabelStyle}>
            <i className="fas fa-cloud-upload-alt"></i>
            Choose a file2
          </label>
        
          {/* <input id="file-upload" type="file" style={fileUploadInputStyle} /> */}
        </div>

        <header className="sc-slide-header">
          <h5>Filters</h5>

         
        </header>

            <h6>Type</h6>

            <div className="sc-form-group sc-grid-2">
              {types.map((type, index) => {
                return (
                  <div className="sc-form-checkbox" key={index}>
                    <input
                      type="checkbox"
                      name="types"
                      id={type.slug}
                      data-type={type.slug}
                      checked={type.checked}
                      onChange={event => {
                        onChangeType(event);
                      }}
                    />

                    <label htmlFor={type.slug}>
                      <i className="sc-icon-checkbox"></i>

                      <span>{type.name}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            <h6>Rooms</h6>

            <div className="sc-form-group sc-grid-2">
              {rooms.map((room, index) => {
                return (
                  <div className="sc-form-radio" key={index}>
                    <input
                      type="radio"
                      name="rooms"
                      id={room.slug}
                      data-room={room.slug}
                      checked={room.checked}
                      onChange={event => {
                        onChangeRoom(event);
                      }}
                    />

                    <label htmlFor={room.slug}>
                      <i className="sc-icon-radio"></i>

                      <span>{room.name}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            <h6>Area</h6>

            <div className="sc-form-group sc-grid-1">
              <InputRange
                maxValue={200}
                minValue={20}
                step={5}
                value={{ min: areas.from, max: areas.to }}
                onChange={value => {
                  onChangeArea(value);
                }}
              />
            </div>

            <h6>Rent</h6>

            <div className="sc-form-group sc-grid-1">
              <InputRange
                maxValue={50000}
                minValue={3000}
                step={1000}
                value={{ min: rents.from, max: rents.to }}
                onChange={value => {
                  onChangeRent(value);
                }}
              />
            </div>

            <h6>Deposit</h6>

            <div className="sc-form-group sc-grid-1">
              <InputRange
                maxValue={200000}
                minValue={10000}
                step={1000}
                value={{ min: deposits.from, max: deposits.to }}
                onChange={value => {
                  onChangeDeposit(value);
                }}
              />
            </div>
          </form>
        </div>

        <footer className="sc-slide-footer">
          <h6>{getPlacesCount()} results found.</h6>

          <div className="sc-form-group sc-grid-1">
            <div className="sc-form-button sc-stretched">
              <button
                disabled={disableTour}
                onClick={() => {
                  onChangeTour("start-tour");
                }}
              >
                <i className="sc-icon-route"></i>

                <span>Tour through the results</span>
              </button>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Sreach;

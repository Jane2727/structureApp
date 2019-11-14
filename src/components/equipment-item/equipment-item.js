import React, { Component } from 'react';

import '@fortawesome/fontawesome-free/css/all.css';
import './equipment-item.css';

class EquipmentItem extends Component {
  render() {
    const { equipment, roomName } = this.props;
    const { name, count } = equipment;

    return (
      <div className="equipment-item">
        <div className="equipment-room">{roomName}</div>
        <div className="equipment-name">{name}</div>
        <div className="equipment-count">{count}</div>
        <div className="buttons">
          <div className="button button-edit">
            <i className="fas fa-edit"></i>
          </div>
          <div className="button button-delete">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default EquipmentItem;

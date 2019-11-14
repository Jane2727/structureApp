import React, { Component } from 'react';
import { findEquipmentForAllChildren } from '../../helpers/Calculate';
import EquipmentItem from '../equipment-item';

import '@fortawesome/fontawesome-free/css/all.css';
import './equipment-screen.css';

class EquipmentScreen extends Component {
  state = {
    currentEquipments: [],
  };

  componentDidUpdate(prevProps) {
    const { equipments, selectedItem } = this.props;
    if (
      selectedItem &&
      (selectedItem !== prevProps.selectedItem ||
        equipments !== prevProps.equipments)
    ) {
      const currentEquipments = findEquipmentForAllChildren(
        selectedItem,
        equipments
      );
      this.setState({ currentEquipments });
    }
  }

  render() {
    const { selectedItem } = this.props;

    let addButton;

    if (selectedItem && !selectedItem.children) {
      addButton = (
        <div className="plus">
          <i className="fas fa-plus-circle"></i>
        </div>
      );
    }

    return (
      <div className="equipments">
        {addButton}
        {this.state.currentEquipments.map(({ equipInfo, roomName }) =>
          equipInfo.map(el => (
            <EquipmentItem equipment={el} key={el.id} roomName={roomName} />
          ))
        )}
      </div>
    );
  }
}

export default EquipmentScreen;

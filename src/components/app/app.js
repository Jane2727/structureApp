import React, { Component } from "react";

import { getBuildings, getEquipment } from "../../helpers/Scorocode";
import List from "../list";
import EquipmentScreen from "../equipment-screen";

import "./app.css";

class App extends Component {
  state = {
    buildings: [],
    equipments: [],
    selectedItem: 0
  };

  itemSelect = item => {
    console.info("selectedItem", item);
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const buildings = await getBuildings();
    const equipments = await getEquipment();
    this.setState({ buildings, equipments });
  }

  render() {
    const { buildings, equipments, selectedItem } = this.state;
    return (
      <div className="container">
        <List
          buildings={buildings}
          equipments={equipments}
          itemSelect={this.itemSelect}
          selectedItem={selectedItem}
        />
        <EquipmentScreen
          buildings={buildings}
          equipments={equipments}
          selectedItem={selectedItem}
        />
      </div>
    );
  }
}

export default App;

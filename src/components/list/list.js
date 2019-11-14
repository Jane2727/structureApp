import React, { Component } from 'react';
import ListItem from '../list-item';
import {
  findEquipmentForAllChildren,
  countEquipment,
} from '../../helpers/Calculate';

import './list.css';

class List extends Component {
  handleClickOnItem = item => {
    this.props.itemSelect(item);
  };

  renderElem = child => {
    const { equipments, selectedItem } = this.props;
    const roomInfo = findEquipmentForAllChildren(child, equipments);
    const totalCount = countEquipment(roomInfo);

    if (!child.children) {
      return (
        <div key={child.id} name={child.name} className={'list-elem'}>
          <ListItem
            child={child}
            count={totalCount}
            onClick={this.handleClickOnItem}
            selected={child.id === selectedItem.id}
          />
        </div>
      );
    }
    const { children } = child;
    const childElems = children.map(el => this.renderElem(el));

    return (
      <div key={child.id} name={child.name} className={'list'}>
        <ListItem
          child={child}
          count={totalCount}
          onClick={this.handleClickOnItem}
          selected={child.id === selectedItem.id}
        />
        <div className={'list-elems'}>{childElems}</div>
      </div>
    );
  };

  render() {
    const { buildings } = this.props;
    const buildingsStructure = buildings.map(building =>
      this.renderElem(building)
    );
    return <div className="buildings">{buildingsStructure}</div>;
  }
}

export default List;

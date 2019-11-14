import React, { Component } from 'react';

import './list-item.css';

class ListItem extends Component {
  render() {
    const { child, count, selected } = this.props;
    const qty = `(${count})`;

    let classNames = 'item';
    if (selected) {
      classNames += ' selected';
    }

    return (
      <div className={classNames} onClick={() => this.props.onClick(child)}>
        <span className={'item-symbol'}></span>
        <span className={'item-name'}>{child.name}</span>
        <span className={'item-count'}>{qty}</span>
      </div>
    );
  }
}

export default ListItem;

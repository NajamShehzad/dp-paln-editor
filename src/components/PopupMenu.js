import React, { Component } from "react";
import Popup from 'reactjs-popup';
import BLOCK_TYPE from './BlockType'

class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  handleMouseEnter() {
    this.setState({isHovering: true});
    styles.addButton.opacity = 100;
  }

  handleMouseLeave() {
    this.setState({isHovering: false});
    styles.addButton.opacity = 0;
  }

  handleClickMenu = type => event => {
    this.setState({isHovering: false});
    styles.addButton.opacity = 0;
    this.props.onClickMenu(this.props.index, type);
  }

  render() {
    return (
    <div
      style={{...styles.menu, ...styles.addButton}}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
    >
      {this.state.isHovering &&
        <Popup 
          trigger={<button style={{...styles.menuItem, ...styles.addButton}}> + </button>}
          position="right top"
          on="click"
          closeOnDocumentClick
          contentStyle={{ padding: '0px', border: 'none' }}
        >
          <div style={styles.menu}>
            <div style={styles.menuItem} onClick={this.handleClickMenu(BLOCK_TYPE.HEADING)}> Heading</div>
            <div style={styles.menuItem} onClick={this.handleClickMenu(BLOCK_TYPE.HTML)}> HTML</div>
            <div style={styles.menuItem} onClick={this.handleClickMenu(BLOCK_TYPE.IMAGE)}> Image</div>
          </div>
        </Popup>
      }
    </div>
    )
  }
}

const styles = {
  root: {
    fontFamily: '\'Georgia\' serif',
    padding: 20,
    width: 600,
  },
  
  menu: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    margin: 'auto',
    marginRight: 'auto',
  },
  menuItem: {
    cursor: 'pointer',
    padding: 5,
    height: 15,
    borderBottom: '1px solid rgb(187, 187, 187)',
  },
  menuItemhover: {color: '#2980b9'},
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    opacity: 0,
  },
};

export default PopupMenu;
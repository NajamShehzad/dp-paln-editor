import React, { Component } from "react";
import BLOCK_TYPE from './BlockType'
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/lib/button/style/index.css';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/dropdown/style/index.css';

class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({isHovering: true});
    styles.addButton.opacity = 100;
  }

  handleMouseLeave = () => {
    this.setState({isHovering: false});
    styles.addButton.opacity = 0;
  }

  handleClickMenu = type => event => {
    this.setState({isHovering: false});
    styles.addButton.opacity = 0;
    this.props.onClickMenu(this.props.index, type);
  }

  render() {

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <span onClick={this.handleClickMenu(BLOCK_TYPE.HEADING)}>Heading</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <span onClick={this.handleClickMenu(BLOCK_TYPE.HTML)}>HTML</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <span onClick={this.handleClickMenu(BLOCK_TYPE.IMAGE)}>Image</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div
        style={{...styles.menu, ...styles.addButton}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div style={{width:"40px", height:"40px", margin: 'auto'}}>
          {this.state.isHovering &&
            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <Icon type="plus-circle" theme="twoTone" style={{fontSize: '40px'}} />
            </Dropdown>
          }
        </div>
      </div>
    )
  }
}

const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    width: '100%',
    height: 40,
  },
  addButton: {
    borderRadius: 30,
    opacity: 0,
    transition: '0.5s ease',
    paddingTop: 10,
    paddingBottom: 10,
    clear: 'both',
  },
};

export default PopupMenu;
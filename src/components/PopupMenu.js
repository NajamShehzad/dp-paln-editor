import React, { Component } from "react";
import BLOCK_TYPE from './BlockType'
import { Button, Menu, Dropdown, Icon } from 'antd';
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
          <div onClick={this.handleClickMenu(BLOCK_TYPE.HEADING)}>Heading</div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <div onClick={this.handleClickMenu(BLOCK_TYPE.HTML)}>HTML</div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <div onClick={this.handleClickMenu(BLOCK_TYPE.IMAGE)}>Image</div>
        </Menu.Item>
      </Menu>
    );

    return (
      <div
        style={{...styles.menu, ...styles.addButton}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.isHovering &&
          <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
              <Button type="primary" shape="circle" size="large" >
                {/* <Icon type="plus-circle" size="large" /> */}
              </Button>
          </Dropdown>
        }
      </div>
    )
  }
}

const styles = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff',
    margin: 'auto',
    marginRight: 'auto',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    opacity: 0,
    clear: 'both'
  },
};

export default PopupMenu;
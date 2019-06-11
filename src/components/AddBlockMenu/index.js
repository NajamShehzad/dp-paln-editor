import React, { Component } from "react";
import BLOCK_TYPE from '../BlockType';
import { Menu, Dropdown, Button } from 'antd';
import 'antd/lib/button/style/index.css';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/dropdown/style/index.css';

class AddBlockMenu extends Component {
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
        <Menu  style={{ backgroundColor: 'rgb(242, 242, 242)', fontColor: 'rgb(127, 127, 127)', marginLeft: '100px'}}>
          <Menu.Item key="0" onClick={this.handleClickMenu(BLOCK_TYPE.HEADING)} > Heading </Menu.Item>
          <Menu.Item key="1" onClick={this.handleClickMenu(BLOCK_TYPE.HTML)}> HTML </Menu.Item>
          <Menu.Item key="2" onClick={this.handleClickMenu(BLOCK_TYPE.IMAGE)}> Image </Menu.Item>
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
                <Button type="link" shape="circle" icon="plus" size="large" style={{background: 'rgb(242, 242, 242)', fontSize: '34px', color: 'rgb(191, 191, 191)'}} />
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

export default AddBlockMenu;
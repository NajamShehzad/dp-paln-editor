import React from "react"
import { sortableHandle } from "react-sortable-hoc"
import { Menu, Dropdown, Icon } from 'antd'
import 'antd/lib/divider/style/index.css'
import 'antd/lib/menu/style/index.css';
import 'antd/lib/dropdown/style/index.css';
import BLOCK_TYPE from '../BlockType'
import IMAGE_WIDTH from '../ImageWidth'

const DragHandle = sortableHandle(() => <Icon type="menu"  style={{display: 'block'}} />);

class BlockHandler extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
			width: '100%'
		}
	}

  handleMouseEnter = () => {
    this.setState({isHovering: true});
  }

  handleMouseLeave = () => {
    this.setState({isHovering: false});
	}

	handleClickMenu = width => event => {
		this.props.handleWidth(this.props.index, width);
		this.setState({width: width});
  }

  render() {

		const menu = (
			<Menu  style={{ backgroundColor: 'rgb(242, 242, 242)', fontColor: 'rgb(127, 127, 127)', marginLeft: '100px'}}>
				<Menu.Item key="0" onClick={this.handleClickMenu(IMAGE_WIDTH.ONE_FOURTH)} > 25% </Menu.Item>
				<Menu.Item key="1" onClick={this.handleClickMenu(IMAGE_WIDTH.TWO_FOURTH)} > 50% </Menu.Item>
				<Menu.Item key="2" onClick={this.handleClickMenu(IMAGE_WIDTH.THREE_FOURTH)} > 75% </Menu.Item>
				<Menu.Item key="3" onClick={this.handleClickMenu(IMAGE_WIDTH.ONE)} > 100% </Menu.Item>
			</Menu>
		);

    return (
			<div
				style={{
					float: 'right',
					fontSize: '16px',
					width: '5%',
					height: '70px',
					borderLeft: '2px solid rgb(191, 191, 191)',
					paddingLeft: '2%',
					marginLeft: 'calc(3% - 2px)',
				}}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.state.isHovering &&
					<div style={{color:'rgb(191, 191, 191)'}}
						>
						<DragHandle />
						<Icon
							type="close"
							index={this.props.index}
							onClick={() => this.props.handleDelete(this.props.index)}
						/>
						{this.props.type === BLOCK_TYPE.IMAGE && this.props.content !== '' ? 
						<Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
							<div 
								style={{fontSize: '7px', width: '17px'}}
								type="line"
								index={this.props.index}
							>
								{this.state.width}
								<div style={{width: '17px', height:'1px', borderBottom: '1px solid', position: 'absolute'}} />
							</div>
						</Dropdown> :
						<div/>
						}
					</div>
				}
			</div>
    );
  }
}

export default BlockHandler;
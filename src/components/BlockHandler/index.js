import React from "react"
import { sortableHandle } from "react-sortable-hoc"
import { Icon } from 'antd'
import 'antd/lib/divider/style/index.css'

const DragHandle = sortableHandle(() => <Icon type="menu"  style={{display: 'block'}} />);

class BlockHandler extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
		}
	}

  handleMouseEnter = () => {
    this.setState({isHovering: true});
  }

  handleMouseLeave = () => {
    this.setState({isHovering: false});
  }

  render() {
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
					</div>
				}
			</div>
    );
  }
}

export default BlockHandler;
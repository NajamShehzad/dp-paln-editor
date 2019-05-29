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
					width: '16px',
					height: '70px',
					borderLeft: '1px solid gray',
					paddingLeft: '8px',
				}}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.state.isHovering &&
					<div
						>
						<DragHandle />
						<Icon
							type="close"
							style={{}}
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
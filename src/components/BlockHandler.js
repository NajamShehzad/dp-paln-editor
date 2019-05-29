import React from "react"
import { sortableHandle } from "react-sortable-hoc"
import { Icon } from 'antd'

const DragHandle = sortableHandle(() => <Icon type="drag" />);

class BlockHandler extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			isHovering: true,
		}
	}

  handleMouseEnter = () => {
    this.setState({isHovering: true});
  }

  handleMouseLeave = () => {
    this.setState({isHovering: true});
  }

  render() {
    return (
			<div
				style={{
					float:'right',
					width:'20px',
					height:'40px'
				}}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{this.state.isHovering &&
					<div>
						<DragHandle />
						<Icon
							type="delete"	
							theme="twoTone"
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
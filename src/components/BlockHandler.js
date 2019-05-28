import React from "react"
import { sortableHandle } from "react-sortable-hoc"

const DragHandle = sortableHandle(() => <span>:</span>);

class BlockHandler extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			isHovering: true,
		}
	}

  handleMouseEnter() {
    this.setState({isHovering: true});
  }

  handleMouseLeave() {
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
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
			>
				{this.state.isHovering &&
					<div>
						<DragHandle />
						<button
							index={this.props.index}
							onClick={() => this.props.handleDeleteBlock(this.props.index)}
						>
							*
						</button>
					</div>
				}
			</div>
    );
  }
}

export default BlockHandler;
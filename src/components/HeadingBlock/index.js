import React from "react";
import './index.css'

class HeadingBlock extends React.Component {
	handleChange = (event) => {
    const {index, type} = this.props;
		const value = event.target.value;
		
		this.props.handleContentChange(index, type, value);
	};

  render() {
		const { content } = this.props;
    return (
      <textarea
        autosize={{ minRows: 1, maxRows: 4 }}
        value={content}
        placeholder={'Heading text'}
        onChange={this.handleChange}
      />
    );
  }
}

export default HeadingBlock;
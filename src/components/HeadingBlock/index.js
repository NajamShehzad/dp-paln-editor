import React from "react";
import { Input } from 'antd';
import './index.css'

const { TextArea } = Input;

class HeadingBlock extends React.Component {
	handleChange = (event) => {
    const index = this.props.index;
		const value = event.target.value;
		
		this.props.handleContentChange(index, this.props.type, value);
	};

  render() {
		const { content } = this.props;
    return (
      <TextArea
				autosize={{ minRows: 1, maxRows: 4 }}
        value={content}
        placeholder={'Heading text'}
        onChange={this.handleChange}
      />
    );
  }
}

export default HeadingBlock;
import React from "react";

class HeadingBlock extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			rows: 5,
			minRows: 5,
			maxRows: 10,
		};
	}
	
	handleChange = (event) => {
		const textareaLineHeight = 24;
		const { minRows, maxRows } = this.state;
		
		const previousRows = event.target.rows;
  	event.target.rows = minRows; // reset number of rows in textarea 
		
		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
    if (currentRows === previousRows) {
    	event.target.rows = currentRows;
    }
		
		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
      
    }

    const index = this.props.index;
		const value = event.target.value;
  	this.setState({
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
		this.props.handleContentChange(index, this.props.type, value);
	};

  render() {
		const { content } = this.props;
    return (
      <textarea
				rows={this.state.rows}
				value={content}
        placeholder={'Heading text'}
        className={'textarea'}
        onChange={this.handleChange}
      />
    );
  }
}

export default HeadingBlock;
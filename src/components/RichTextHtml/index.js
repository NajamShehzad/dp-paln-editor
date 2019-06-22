import React, { Component } from 'react';
import RichTextEditor from 'react-rte'

class RichTextHtml extends Component {
    constructor(props) {
        super(props);
        const { index, type, content } = this.props;
        console.log("Constructor Call ===>> Here", this.props);
        this.state = {
            content: content ? content : RichTextEditor.createEmptyValue()
        }
    }

    componentWillReceiveProps(nextProps) {
        const { content } = nextProps;
        this.setState({ content: content ? content : RichTextEditor.createEmptyValue() });
    }

    onChange = (content) => {
        const { index, type, handleContentChange } = this.props
        // this.setState({ content })
        handleContentChange(index, type, content)
    }

    render() {
        const { content } = this.state
        return (
            <div className="RichEditor-root" >
                <RichTextEditor
                    value={content}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default RichTextHtml;
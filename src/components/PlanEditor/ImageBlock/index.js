import React from 'react'
import ImageUpload from './ImageUpload'

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
    const { content } = props;
    console.log("Content from Image Block comstructor ====>", content);
    this.state = { file: content ? content : "" };
  }

  componentWillReceiveProps = (props) => {
    const { content } = props;
    console.log("Content from Image Block  will recived====>", content);
    this.setState({ file: content ? content : "" });
    console.log('content----------------->',content)
  }

  addFile = file => {
    console.log("These are all files  ==>",this.state.files)
    console.log("This is file",file)
    this.setState({
      file: file
    });
    const { index, type } = this.props;
    // this.props.handleContentChange(index, type, this.state.file);
  };

  render() {
    console.log("This is from main Component ===>",this.state.file)
    return (
      <div style={{ width: "90%", float: "left", paddingTop: "5px", paddingBottom: "5px" }}>
        <ImageUpload addFile={this.addFile} file={this.state.file} width={this.props.width} />
      </div>
    );
  }
}

export default ImageBlock;
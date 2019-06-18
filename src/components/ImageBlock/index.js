import React from 'react'
import ImageUpload from './ImageUpload'

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
    const { content } = props;
    console.log("Content from Image Block ====>", content);
    this.state = { files: content.length ? content : [] };
  }

  componentWillReceiveProps = (props) => {
    const { content } = props;
    console.log("Content from Image Block ====>", content);
    this.setState({ files: content.length ? content : [] });
  }

  addFile = file => {
    console.log("These are all files  ==>",this.state.files)
    console.log("This is file",file)
    this.setState({
      files: file.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
    const { index, type } = this.props;
    this.props.handleContentChange(index, type, this.state.files);
  };

  render() {
    return (
      <div style={{ width: "90%", float: "left", paddingTop: "5px", paddingBottom: "5px" }}>
        <ImageUpload addFile={this.addFile} files={this.state.files} width={this.props.width} />
        {/*<FileUpload addFile={this.addFile} files={this.state.files} /> */}
      </div>
    );
  }
}

export default ImageBlock;
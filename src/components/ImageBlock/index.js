import React from 'react'
import ImageUpload from './ImageUpload'

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);

    const { content } = props;
    this.state = {files: content.length !== 0 ? content : []};
    console.log("files content", this.state.files, content);
  }
  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  componentWillReceiveProps = (props) => {
    // const { content } = props;
    // this.setState({files: content.length !== 0 ? content : []});
  }

  addFile = file => {
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
      <div style={{width:"90%", float:"left"}}>
        <ImageUpload addFile={this.addFile} files={this.state.files} />
        {/*<FileUpload addFile={this.addFile} files={this.state.files} /> */}
      </div>
    );
  }
}

export default ImageBlock;
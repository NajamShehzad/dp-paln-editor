import React from 'react'
import ImageUpload from './ImageUpload'

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
    const { content } = props;
    this.state = {files: content.length ? content : []};
  }

  componentWillReceiveProps = (props) => {
    const { content } = props;
    this.setState({files: content.length ? content : [] });
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
      <div style={{width:"90%", float:"left", paddingTop:"5px", paddingBottom:"5px"}}>
        <ImageUpload addFile={this.addFile} files={this.state.files} />
        {/*<FileUpload addFile={this.addFile} files={this.state.files} /> */}
      </div>
    );
  }
}

export default ImageBlock;
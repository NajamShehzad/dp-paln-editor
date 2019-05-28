import React from 'react'
import ImageUpload from './ImageUpload'

class ImageBlock extends React.Component {
  state = {
    files: []
  };

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  addFile = file => {
    console.log(file);
    this.setState({
      files: file.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    });
  };

  render() {
    return (
      <div>
        <ImageUpload addFile={this.addFile} files={this.state.files} />
        {/*<FileUpload addFile={this.addFile} files={this.state.files} /> */}
      </div>
    );
  }
}

export default ImageBlock;
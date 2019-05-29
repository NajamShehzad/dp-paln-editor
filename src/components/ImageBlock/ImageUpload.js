import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from 'antd'

// for profile picture
class ImageUpload extends React.Component {
  state = { warningMsg: "" };

  onDrop = (accepted, rejected) => {
    if (Object.keys(rejected).length !== 0) {
      const message = "Please submit valid file type";
      this.setState({ warningMsg: message });
    } else {
      this.props.addFile(accepted);
      this.setState({ warningMsg: "" });

      var blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(accepted[0]);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
      blobPromise.then(value => {
      });
    }
  };

  render() {
    const { files } = this.props;
    const thumbsContainer = {
      width: "100%",
      objectPosition: "center",
      alignItem: "center",
    };

    const thumbs = files.map((file, key) => (
      <img key={key} style={thumbsContainer} src={file.preview} alt="profile" />
    ));

    return (
      <div>
        <p>{this.state.warningMsg}</p>

        <Dropzone
          style={{
            width: "150px",
            height: "150px",
            objectPosition: "center",
            border: " 1px dashed",
          }}
          multiple={false}
          accept="image/*"
          onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
        >
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                {Object.keys(files).length !== 0 ? (
                  files.map((file, key) => <aside key={key}>{thumbs}</aside>)
                  ) : (
                  <div>
                    <Icon type="file-image" />
                    <p className="hello"> image here to prompt users to click</p>
                  </div>)
                }
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default ImageUpload;

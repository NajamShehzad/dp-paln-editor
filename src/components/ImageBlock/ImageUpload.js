import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from 'antd'

// for profile picture
class ImageUpload extends React.Component {
  // state = { warningMsg: "" };

  onDrop = (accepted, rejected) => {
    if (Object.keys(rejected).length !== 0) {
      // const message = "Please submit valid file type";
      // this.setState({ warningMsg: message });
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

    const { files, width } = this.props;
    const thumbsContainer = {
      width: width == null ? '100%' : width,
      objectPosition: "center",
      alignItem: "center",
    };

    const thumbs = files.map((file, key) => {
      console.log(file,key);
      
      return (
        <img key={key} style={thumbsContainer} src={file.preview} alt="profile" />
      )
    });

    return (
      <div>
        {/* <p>{this.state.warningMsg}</p> */}

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
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                {Object.keys(files).length !== 0 ? (
                  files.map((file, key) => <aside key={key}>{thumbs}</aside>)
                ) : (
                    <div style={{ textAlign: 'center', backgroundColor: 'rgb(243, 243, 243)', outlineColor: 'rgb(166, 166, 166)', outlineStyle: 'dashed' }}>
                      <Icon type="cloud-upload" style={{ fontSize: '50px', color: 'rgb(218, 218, 218)' }} />
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

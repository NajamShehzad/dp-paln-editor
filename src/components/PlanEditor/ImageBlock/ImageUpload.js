import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from 'antd'

// for profile picture
class ImageUpload extends React.Component {
  // state = { warningMsg: "" };

  onDrop = (accepted, rejected) => {
    // console.log("File Here ===>",accepted[0]);
    if (Object.keys(rejected).length !== 0) {
    } else {
      this.props.addFile(accepted[0]);
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
        // console.log("This is  value of Blob ===>", value)
      });
    }
  };

  render() {

    const { file, width } = this.props;
    // console.log("File from image Component===>", file);
    const thumbsContainer = {
      width: width == null ? '100%' : width,
      objectPosition: "center",
      alignItem: "center",
    };

    // const thumbs = files.map((file, key) => {
    //   console.log("From File Content her ===>>>", file, key);

    //   return (
    //     <img key={key} style={thumbsContainer} src={URL.createObjectURL(file)} alt="profile" />
    //   )
    // });

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
                {(file && file.name) || (typeof file == 'string' && file.length > 0)  ? (
                  // files.map((file, key) => 
                  <aside><img style={thumbsContainer} src={file && file.name ? URL.createObjectURL(file) : file} alt="profile" /></aside>
                  // )
                ) : (
                    <div style={{ textAlign: 'center', backgroundColor: 'rgb(243, 243, 243)', outlineColor: 'rgb(166, 166, 166)', outlineStyle: 'dashed' }}>
                      <Icon type="cloud-upload" style={{ fontSize: '50px', color: 'rgb(218, 218, 218)' }} />
                    </div>
                    )
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

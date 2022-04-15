import React, { Component } from 'react';
import { Storage } from 'aws-amplify';

class Curriculum extends Component {
  state = { fileUrl: '', file: '', filename: '' }
  handleChange = e => {
    const file = e.target.files[0]
    this.setState({
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    })
  }
  saveFile = () => {
    Storage.put(this.state.filename, this.state.file)
    .then(() => {
      console.log('File uploaded')
      .this.setState({ fileUrl: '', file: '', filename: '' })
    })
    .catch(err => {
      console.log('Error uploading', err)
    })
  }
  render() {
    return (
      <><header>
        Curriculum
      </header><div>
          <input type='file' accept='.pdf, .doc' onChange={this.handleChange} />
        </div><button onClick={this.saveFile}>Save File</button></>
    );
  }

}

export default Curriculum;
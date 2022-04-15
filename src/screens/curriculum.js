import React, { Component } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';



class Curriculum extends Component {
  state = { fileUrl: '', file: '', filename:'' }
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
      console.log('successfully saved file!')
      this.setState({ fileUrl: '', file: '', filename: '' })
    })
    .catch(err => {
      console.log('error uploading file', err)
    })
  }
  render () {
    return(
      <div className="Curr">
        <header className="Curr-header">
          <h1>
            Curriculum
          </h1>
        </header>
        <input type='file' onChange={this.handleChange} />
        <img src={this.state.fileUrl} alt="your file" />
        <p></p>
        <button onClick={this.saveFile}>Save File</button>
      </div>
    );
  }
}
export default withAuthenticator(Curriculum, {includeGreetings: true})
//export default Curriculum;
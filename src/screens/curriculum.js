import { useRef, useEffect, useState } from "react";
import React, { Component } from "react";
import ReactS3 from 'react-s3';
import Amplify from "@aws-amplify/core";
import { Storage } from 'aws-amplify';



function Curriculum() {
  const ref = useRef(null);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState();

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "us-east-2:c3dd0838-ad1b-4337-af6f-cf48f4f1a7a4",
        region: "us-east-2",
      },

      Storage: {
        AWSS3: {
          bucket: "www.teachertoolbox.net",
          region: "us-east-2",
        },
      },
    });
  }, []);

  const loadFiles = () => {
    Storage.list("")
      .then((files) => {
        console.log(files);
        setFiles(files);
      })
      .catch((err) => {
        console.log(err);
      });    
  }

  useEffect(() => {
    loadFiles();
   }, []);

  const handleFileLoad = () => {
    const filename = ref.current.files[0].name;
    Storage.put(filename, ref.current.files[0], {
      progressCallback: (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100) + "%");
        setTimeout(() => { setProgress() }, 1000);
      }
    })
      .then(resp => {
      console.log(resp);
      loadFiles();
    }).catch(err => {console.log(err);});
  }

  const handleShow = (file) => {
    Storage.get(file).then(resp => {
      console.log(resp);
      setImage(resp)
    }).catch(err => { console.log(err); });
  }

  const handleDelete = (file) => {
    Storage.remove(file).then(resp => {
      console.log(resp);
      loadFiles();
     }).catch(err => { console.log(err); });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Curriculum</h1>
        <input ref={ref} type="file" onChange={handleFileLoad} />
        { progress}
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {files.map((file,i) => (
              <tr key={file.key}>
                <td>{i}</td>
                <td>{file.key}</td>
                <td>
                  <button onClick={() => handleShow(file.key)}>Show</button>
                  <button onClick={() => handleDelete(file.key)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <img src={image} width="600"/>
      </header>
    </div>
  );
}


export default Curriculum;
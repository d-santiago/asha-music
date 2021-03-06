import axios from 'axios';
import React , {useState, useEffect } from 'react';
import { uploadFile } from 'react-s3';

const S3_BUCKET ='myashamusic';
const REGION ='us-east-2';
const ACCESS_KEY ='AKIAVVDASVJEUQAOB4FZ';
const SECRET_ACCESS_KEY ='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';


const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
}


const Upload = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [data,setData] = useState(""); 
  const [songName,setSongName] = useState(""); 
  const [uploadVisible, setUploadVisible] = useState(true);
  const [genre,setGenre] = useState("");
  const [url,setUrl] = useState("");
  const [publisherName,setPublisherName] = useState("");
  const [insertId, setInsertId] = useState("");

  const handleFileInput = (e) => {
      setSelectedFile(e.target.files[0]);
  }

  const handleUpload = async (file) => {
      uploadFile(file, config)
          .then(data => setUrl(data))
          .catch(err => console.error(err))
          setUploadVisible(false);
  }

  useEffect(() => {
    if (insertId) {
      let v = {
      songURL : url.location,
      sid : insertId,
      }

      axios.put("artist/uploadSongData",v).then(response => {
        console.log(response.data);
      })
    }
    
  }, [insertId])
  
  const handleSubmission = async (e) => {
    /* put a try,catch block around every axios call and we should always async await results for axios calls */
    e.preventDefault()
    let values = {
        songName : songName,
        genre : genre,
        recordLabel:publisherName,
        isSignle:true,

    }
    await axios.post("artist/createSong",values).then(response => {
      setInsertId(response.data.insertedId);
      console.log("insertID = ", insertId)
    })
  } 
  
  const uploadButton = (
    <div>
      <h2>Upload song file</h2>
      <input className="form-control form-control-lg my-3" type="file" onChange={handleFileInput}/>
      <button className="btn btn-primary btn-lg" onClick={() => handleUpload(selectedFile)}> Upload </button>
    </div>
  )
  const songForm  =  (
    <form>
    <h1>Song Info</h1>
    <p>Title Track</p>
    <input
      type='text'
      name='name'
      value={songName}
      onChange={(e) => setSongName(e.target.value)}
    />
    
    <p>Record Label Name</p>
    <input
      type="text"
      name='name'
      value={publisherName}
      onChange={(e) => setPublisherName(e.target.value)}
    />
    <p>Genre</p>
    <input
      type="text"
      name='name'
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    />

    <button className="btn btn-primary btn-lg" onClick = {handleSubmission}>Submit</button>
    </form>
 );
  

  return (

    <div className="col-md-4 mx-auto mt-5">
      {uploadVisible ? uploadButton : null }
      {!uploadVisible ? songForm : null}
      <p>{url.location}</p>

   </div>
  ) 
}


export default Upload;
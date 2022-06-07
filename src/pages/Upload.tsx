import React from 'react';
import { IpfsService } from '../services';
import '../assets/css/pages.css'


interface File {
    file: Blob 

}
// Upload form
function Upload  () {
    // form state
    const [img, setImg] = React.useState<File>({
        file: new Blob(),
    });
    // response messages
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");


    // get file data
    const handleChange = (e: React.ChangeEvent) => {
    let target = e.target as HTMLInputElement;

    if(target.files && target.files[0]) {
        setImg({ 
            file: target.files[0] 
        })
    }  
   }
   // submit form
   const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    let { file } = img;
    setSuccess('');
    setError('');

    //upload file    
    IpfsService.createFile(file)
    .then((res) => {
        console.log(res.data);
        if(res.data) {
            setSuccess(`Sucess! the id of the file is ${res.data}`)
        }
    })
    .catch((error) => {
        console.log(error.response);
        if(error.response) {
            setError(error.response.data.message || 'An error occured')
        }
    })

    }
 
    return (
        <div className='container upload-content mt-5 d-flex align-items-center
        justify-content-center'>
            <div className='form-container text-center'>
            <h4>Upload Image</h4>
            <h5 className='text-center '>{success ? success : error }</h5>
            <div>  
      <form onSubmit={handleSubmit} >
      <input
       style={{ width: '400px' }}
       onChange={handleChange}
       required
       className="form-control mt-5 mb-4" id="formFileLg" type="file" />
      <button  className='btn form-control mt-4 btn-lg  btn-primary'>
             Save
      </button>
      </form>
      </div>
         </div>
        </div>
    )
}

export default Upload;
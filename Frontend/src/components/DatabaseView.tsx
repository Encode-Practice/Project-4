import React, { useState } from "react";
import { IpfsService } from "../services";

function  DatabaseView () {
    const[imgData, setData] = useState([]);

    const getImages = () => {
        let data:any
        IpfsService.getAllData()
        .then((res) => {
            if(res.data) {
                data = Object.values(res.data)
                setData(data);
            }
        })
        .catch((error) => {
            console.log(error.response);
        })
    }

    React.useEffect(() => {
        getImages();
    }, [])

    return (
        <div className='container mb-4 my-5 p-3'>
            <div className="row">
                
            {imgData && imgData.length > 0 ? imgData.map((pos:any, id) => {
              return ( <div className="col-md-4 mb-3" key={ + id}>
              <div className="card" key={id} style={{width: "21rem"}}>
                  {pos.ipfs && pos.ipfs.path.length > 0  ? 
                  <img src={`https://ipfs.infura.io/ipfs/${pos.ipfs.path }`} 
                  alt="team-G ipfs " className="card-img-top" />: ""}
               
    
               <div className="card-body">
                   <h5 className="card-title">{pos.file.fileName}</h5>
                   <p className="card-text">{`This file has a size of ${pos.file.size}`}</p>
                   {pos.ipfs && pos.ipfs.path.length > 0  ? 
                   <button className="btn btn-primary">{pos.file.mimetype}</button> : "" }
               </div>
               </div>
            </div>
              )
            }) : "No data yet. Please wait"}
        
     </div>    
    </div>
    )

}


export default  DatabaseView;
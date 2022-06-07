import React from 'react';
import {BlockchainService } from '../services';


//TG Wallet
function Wallet () {
    const [blockData, setBlockData] = React.useState<any[]>([]);
    

    const address =  () => {
        Promise.all([
        BlockchainService.address(),
        BlockchainService.etherBalance(),
        BlockchainService.tokenAddress(),
        BlockchainService.tokenName(),
        BlockchainService.symbol()

        ])
        .then((values) => {
            console.log(values);
            setBlockData(values)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }

    React.useEffect(() => {
       address();
    }, []);

    
    return (
        <div>
            <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="badge bg-primary rounded-pill fw-bold"> Address</div>
      <span className='text-center'>{  ` ${blockData[0] ||  ""}` }</span>
    </div>
    {/* <span className="">14</span> */}
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="badge bg-primary rounded-pill">Ether balance</div>
      {  `  ${blockData[1] ||  ""}`}
    </div>
  </li>
  
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="badge bg-primary rounded-pill fw-bold">Team G contract Address</div>
      {  `  ${blockData[2] ||  ""}`}
    </div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="badge bg-primary rounded-pill fw-bold">Token Name</div>
      {  `  ${blockData[3] ||  ""}`}
    </div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="badge bg-primary rounded-pill fw-bold">Token Symbol</div>
      {  `  ${blockData[4] ||  ""}`}
    </div>
  </li>
</ol>
        </div>
    )
}

export default Wallet
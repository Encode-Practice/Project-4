import ethers from 'ethers';
import TokenContract from '../assets/contracts/Token.json';


class BlockchainService {
    
    provider: ethers.providers.BaseProvider;
    userWallet: ethers.Wallet;
    tokenContractInstance: ethers.Contract;
    tokenContractAddress: string;
  
    constructor() {
   
        this.tokenContractAddress = process.env.REACT_APP_TOKEN_CONTRACT_ADDRESS || ""
        this.provider = this.getProvider();
        this.userWallet = ethers.Wallet.createRandom().connect(this.provider);
        this.tokenContractInstance = new ethers.Contract(
        this.tokenContractAddress,
        TokenContract.abi
        ).connect(this.userWallet);
      }
    
      getProvider() {
        return ethers.getDefaultProvider(process.env.REACT_APP_NETWORK);
      }
    
      async address() {
        const address = this.userWallet.address;
        return address;
      }
    
      async etherBalance() {
        const etherBalanceBN = await this.provider.getBalance(
          this.userWallet.address
        );
        const etherBalance = ethers.utils.formatEther(etherBalanceBN) + ' ETH';
        return etherBalance;
      }
    
      async networkName() {
        const networkName = process.env.REACT_APP_NETWORK;
        return networkName;
      }
    
      async number() {
        const number = await this.provider.getBlockNumber();
        return number.toFixed(0);
      }
    
      async tokenAddress() {
        const tokenAddress = this.tokenContractAddress;
        return tokenAddress;
      }
    
      async tokenName() {
        const tokenName = await this.tokenContractInstance.name();
        return tokenName;
      }
    
      async symbol() {
        const symbol = await this.tokenContractInstance.symbol();
        return symbol;
      }
    
      async supply() {
        const supplyBN = await this.tokenContractInstance.totalSupply();
        const supply = ethers.utils.formatEther(supplyBN);
        return supply + ' Tokens';
      }
    
      async tokenBalance() {
        const tokenBalanceBN = await this.tokenContractInstance.balanceOf(
          this.userWallet.address
        );
        const tokenBalance = ethers.utils.formatEther(tokenBalanceBN);
        return tokenBalance + ' Tokens';
      }
          
      async signTokenRequest(amount: number) {
        const signatureObject = {
          address: this.userWallet.address,
          amount: amount,
        };
        const signatureMessage = JSON.stringify(signatureObject);
        return await this.userWallet.signMessage(signatureMessage);
    }   
}

export default new BlockchainService;
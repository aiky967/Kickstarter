import web3 from './web3';
import CampaginFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaginFactory.interface),
  '0x9584EdAF52F346DeC72CA4559a51A6Dc76f091c4'
);

export default instance;

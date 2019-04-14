import Cache from './Cache';

const TTL = 60 * 60 * 1;
const cache = new Cache(TTL);

export default cache;
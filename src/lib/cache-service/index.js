import Cache from './Cache';

const TTL = 1 || 60 * 60 * 0.5;
const cache = new Cache(TTL);

export default cache;
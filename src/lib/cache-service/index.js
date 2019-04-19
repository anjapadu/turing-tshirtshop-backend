import Cache from './Cache';

const TTL = 60 * 60 * 0.5;
const cache = new Cache(1);

export default cache;
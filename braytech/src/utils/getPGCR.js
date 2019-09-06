import store from './reduxStore';
import * as bungie from './bungie';

export async function getPGCR(membershipId, id) {
  store.dispatch({ type: 'PGCR_LOADING' });

  try {
    let response = await bungie.PGCR(id);
    response.instanceId = id;
    
    store.dispatch({ type: 'PGCR_LOADED', payload: { membershipId, response } });
  } catch (e) {
    console.warn(`PGCR ${id}`, e)
  }

  return true;
}

export default getPGCR;

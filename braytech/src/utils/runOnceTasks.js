
import * as ls from './localStorage';

export default function runOnceTasks() {

  const history = ls.get('history.tasks') || [];

  if (!history.find(t => t.id === 'reauth_august152019')) {
    ls.del('setting.auth');
    ls.update('history.tasks', { id: 'reauth_august152019' });
  }

}
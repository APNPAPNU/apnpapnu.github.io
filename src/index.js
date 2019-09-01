import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './utils/reduxStore';

class AppEntry extends React.Component {
  constructor(props) {
    super();
    this.state = {
      updateAvailable: false
    };
  }

  config = {
    onUpdate: registration => {
      console.log('Update available');
      this.setState({
        updateAvailable: true
      });

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    },
    onSuccess: registration => {
      console.log('Service worker registered');
    }
  };

  componentDidMount() {
    serviceWorker.register(this.config);
  }

  render() {
    return (
      <Suspense fallback={()=>{}}>
        <Provider store={store}>
          <App {...this.state} />
        </Provider>
      </Suspense>
    );
  }
}

ReactDOM.render(<AppEntry />, document.getElementById('root'));

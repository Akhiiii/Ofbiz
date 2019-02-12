/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';
import 'sanitize.css/sanitize.css';

import dva from 'dva';

// Import all the third party stuff
import createHistory from 'history/createBrowserHistory';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved, import/extensions */
// Import CSS reset and Global Styles
import './global-styles';

const app = dva({
  history: createHistory(),
});

app.router(require('./router').default);

app.model(require('./pages/LoginPage/LoginPageModel').default);
app.model(require('./pages/Accounting(AR)/Invoice/invoiceARModel').default);
app.model(require('./pages/Accounting(AR)/Payment/paymentARModel').default);
app.model(require('./pages/Accounting(AR)/Payment_Groups/paymentGroupsARModel').default);
app.model(require('./pages/Accounting(AR)/Reports/ReportsARModel').default);



app.model(require('./pages/Masters/Department/departmentModel').default);
app.model(require('./pages/Masters/Country/CountryModel').default);
app.model(require('./pages/Masters/State/StateModel').default);
app.model(require('./pages/Masters/City/CityModel').default);

app.model(require('./pages/Masters/CommentType/CommentTypeModel').default);
app.model(require('./pages/Masters/PriorityLevel/PriorityLevelModel').default);


app.start('#app');

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

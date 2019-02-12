import { showNotification } from '../Dialogs/AppDialogs';

export function submitAction(
  actionType,
  dataForAction,
  nameSpace,
  props,
  notificationTitle,
  callback,
) {
  let urlString = ``;
  if (actionType === 'isExists') {
    urlString = `${nameSpace}/actionExists`;
  } else if (actionType === 'save') {
    urlString = `${nameSpace}/actionSave`;
  } else if (actionType === 'saveall') {
    urlString = `${nameSpace}/actionSaveall`;
  } else if (actionType === 'list') {
    urlString = `${nameSpace}/actionList`;
  } else if (actionType === 'lineItems') {
    urlString = `${nameSpace}/actionLineItems`;
  } else if (actionType === 'byId') {
    urlString = `${nameSpace}/actionById`;
  } else if (actionType === 'activate') {
    urlString = `${nameSpace}/actionActivate`;
  } else if (actionType === 'activateAll') {
    urlString = `${nameSpace}/actionActivateAll`;
  } else if (actionType === 'deactivate') {
    urlString = `${nameSpace}/actionDeactivate`;
  } else if (actionType === 'deactivateAll') {
    urlString = `${nameSpace}/actionDeactivateAll`;
  } else if (actionType === 'block') {
    urlString = `${nameSpace}/actionBlock`;
  } else if (actionType === 'blockAll') {
    urlString = `${nameSpace}/actionBlockAll`;
  } else if (actionType === 'unblock') {
    urlString = `${nameSpace}/actionUnblock`;
  } else if (actionType === 'unblockAll') {
    urlString = `${nameSpace}/actionUnblockAll`;
  } else if (actionType === 'delete') {
    urlString = `${nameSpace}/actionDelete`;
  } else if (actionType === 'deleteAll') {
    urlString = `${nameSpace}/actionDeleteAll`;
  } else if (actionType === 'statesByCountryList') {
    urlString = `${nameSpace}/action${actionType}`;
  }
  if (actionType === 'isExists') {
    triggerIsExistsAction(urlString, dataForAction, props, callback);
  } else if (
    actionType === 'byId' ||
    actionType === 'list' ||
    actionType === 'lineItems'
  ) {
    triggerListAndByIdAction(urlString, dataForAction, props);
  } else if (actionType === 'statesByCountryList') {
    triggerListAndByIdAction(urlString, dataForAction, props);
  } else {
    triggerAction(urlString, dataForAction, props, notificationTitle, callback);
  }
}

const triggerAction = (
  urlString,
  criteria,
  props,
  notificationTitle,
  callback,
) => {
  const { dispatch } = props;
  dispatch({
    type: urlString,
    payload: criteria,
  })
    .then(returnData => {
      if (returnData.status === 'success') {
        showNotification(
          returnData.status,
          notificationTitle,
          returnData.message,
        );
      } else {
        // need to implement the code on 'error' status.
        showNotification(
          returnData.status,
          notificationTitle,
          returnData.message,
        );
      }
    })
    .then(() => {
      callback('close');
    });
};

const triggerIsExistsAction = (urlString, criteria, props, callback) => {
  const { dispatch } = props;
  dispatch({
    type: urlString,
    payload: criteria,
  }).then(message => {
    if (message.status === 'error') {
      callback(message.message);
    } else {
      callback('');
    }
  });
};

const triggerListAndByIdAction = (urlString, criteria, props) => {
  const { dispatch } = props;
  dispatch({
    type: urlString,
    payload: criteria,
  });
};

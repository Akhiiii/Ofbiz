import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

import { submitAction } from '../TitlePane/submitAction';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class MmsUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mmsUsersList: [],
    };
  }

  componentDidMount() {
    submitAction(actionConsts.ACTION_TYPE_LIST, {}, 'mmsUser', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mmsUsersList.content !== undefined) {
      this.setState({
        mmsUsersList: nextProps.mmsUsersList.content,
      });
    }
  }

  render() {
    const mmsUsersOptions = this.state.mmsUsersList.map(k => (
      <Option key={k.id} value={k.id}>
        {k.name}
      </Option>
    ));

    return (
      <Fragment>
        <Select
          {...this.props}
          size="small"
          style={{ width: '100%' }}
          placeholder="Select MmsUser"
        >
          {mmsUsersOptions}
        </Select>
      </Fragment>
    );
  }
}

MmsUser.defaultProps = {};

MmsUser.propTypes = {
  mmsUsersList: PropTypes.any,
};

export default Form.create()(
  connect(({ mmsUser }) => ({
    mmsUsersList:
      mmsUser.reducerList.data !== undefined ? mmsUser.reducerList.data : [],
  }))(MmsUser),
);

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

import { submitAction } from '../TitlePane/submitAction';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class State extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stateList: [],
    };
  }

  componentDidMount() {
    submitAction(
      actionConsts.ACTION_TYPE_LIST,
      { isLazy: 'false' },
      'state',
      this.props,
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stateList.content !== undefined) {
      this.setState({
        stateList: nextProps.stateList.content,
      });
    }
  }

  render() {
    const stateOptions = this.state.stateList.map(k => (
      <Option key={k.id} value={k.id}>
        {k.name}
      </Option>
    ));

    return (
      <Fragment>
        <Select
          {...this.props}
          size="default"
          style={{ width: '100%' }}
          placeholder="Select state"
        >
          {stateOptions}
        </Select>
      </Fragment>
    );
  }
}

State.defaultProps = {};

State.propTypes = {
  stateList: PropTypes.any,
};

export default Form.create()(
  connect(({ state }) => ({
    stateList: state.reducerList.data || [],
  }))(State),
);

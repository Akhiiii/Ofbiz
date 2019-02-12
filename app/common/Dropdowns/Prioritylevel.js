import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

import { submitAction } from '../TitlePane/submitAction';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class PriorityLevel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      priorityLevelList: [],
    };
  }

  componentDidMount() {
    submitAction(
      actionConsts.ACTION_TYPE_LIST,
      {},
      'priorityLevel',
      this.props,
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.priorityLevelList.content !== undefined) {
      this.setState({
        priorityLevelList: nextProps.priorityLevelList.content,
      });
    }
  }

  render() {
    const priorityLevelOptions = this.state.priorityLevelList.map(k => (
      <Option key={k.id} value={k.level}>
        {k.level}
      </Option>
    ));

    return (
      <Fragment>
        <Select
          {...this.props}
          size="small"
          style={{ width: '100%' }}
          placeholder="Select Priority Level"
        >
          {priorityLevelOptions}
        </Select>
      </Fragment>
    );
  }
}

PriorityLevel.defaultProps = {};

PriorityLevel.propTypes = {
  priorityLevelList: PropTypes.any,
};

export default Form.create()(
  connect(({ priorityLevel }) => ({
    priorityLevelList:
      priorityLevel.reducerList.data !== undefined
        ? priorityLevel.reducerList.data
        : [],
  }))(PriorityLevel),
);

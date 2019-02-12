import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

import { submitAction } from '../TitlePane/submitAction';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class Department extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: [],
    };
  }

  componentDidMount() {
    submitAction(actionConsts.ACTION_TYPE_LIST, {}, 'department', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.departmentList.content !== undefined) {
      this.setState({
        departmentList: nextProps.departmentList.content,
      });
    }
  }

  render() {
    const departmentOptions = this.state.departmentList.map(k => (
      <Option key={k.id} value={k.id} style={{ paddingRight: '0px' }}>
        {k.name}
      </Option>
    ));
    return (
      <Fragment>
        <Select
          {...this.props}
          size="small"
          style={{ width: '100%' }}
          placeholder="Select department"
        >
          {departmentOptions}
        </Select>
      </Fragment>
    );
  }
}

Department.defaultProps = {};

Department.propTypes = {
  departmentList: PropTypes.any,
};

export default Form.create()(
  connect(({ department }) => ({
    departmentList:
      department.reducerList.data !== undefined
        ? department.reducerList.data
        : [],
  }))(Department),
);

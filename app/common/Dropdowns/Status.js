import React, { Fragment } from 'react';
import { Select } from 'antd';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class Status extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Select
          {...this.props}
          size="small"
          placeholder={actionConsts.SELECT_PLACEHOLDER}
          name="status"
          style={{ width: '100%' }}
        >
          <Option value="true">{actionConsts.LEGEND_ACTIVE}</Option>
          <Option value="false">{actionConsts.LEGEND_INACTIVE}</Option>
          <Option value="">{actionConsts.LEGEND_NONE}</Option>
        </Select>,
      </Fragment>
    );
  }
}
export default Status;

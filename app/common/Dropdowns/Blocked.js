import React, { Fragment } from 'react';
import { Select } from 'antd';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class Blocked extends React.PureComponent {
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
          placeholder={actionConsts.SELECT_BLOCKED}
          name="blocked"
          style={{ width: '100%' }}
        >
          <Option value="true">{actionConsts.LEGEND_BLOCKED}</Option>
          <Option value="false">{actionConsts.LEGEND_UNBLOCKED}</Option>
          <Option value="">{actionConsts.LEGEND_NONE}</Option>
        </Select>,
      </Fragment>
    );
  }
}
export default Blocked;

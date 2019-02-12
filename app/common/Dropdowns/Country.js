import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

import { submitAction } from '../TitlePane/submitAction';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class Country extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      countryList: [],
    };
  }

  componentDidMount() {
    submitAction(actionConsts.ACTION_TYPE_LIST, {}, 'country', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.countryList.content !== undefined) {
      this.setState({
        countryList: nextProps.countryList.content,
      });
    }
  }

  render() {
    const countryOptions = this.state.countryList.map(k => (
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
          placeholder="Select country"
        >
          {countryOptions}
        </Select>
      </Fragment>
    );
  }
}

Country.defaultProps = {};

Country.propTypes = {
  countryList: PropTypes.any,
};

export default Form.create()(
  connect(({ country }) => ({
    countryList:
      country.reducerList.data !== undefined ? country.reducerList.data : [],
  }))(Country),
);

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

import { submitAction } from '../TitlePane/submitAction';
import * as actionConsts from '../TitlePane/ActionConsts';

const { Option } = Select;

class CommentType extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentTypeList: [],
    };
  }

  componentDidMount() {
    submitAction(actionConsts.ACTION_TYPE_LIST, {}, 'commentType', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.commentTypeList.content !== undefined) {
      this.setState({
        commentTypeList: nextProps.commentTypeList.content,
      });
    }
  }

  render() {
    const commentTypeOptions = this.state.commentTypeList.map(k => (
      <Option key={k.id} value={k.typeName}>
        {k.typeName}
      </Option>
    ));
    return (
      <Fragment>
        <Select
          {...this.props}
          size="small"
          style={{ width: '100%' }}
          placeholder="Select Comment Type"
        >
          {commentTypeOptions}
        </Select>
      </Fragment>
    );
  }
}

CommentType.defaultProps = {};

CommentType.propTypes = {
  commentTypeList: PropTypes.any,
};

export default Form.create()(
  connect(({ commentType }) => ({
    commentTypeList:
      commentType.reducerList.data !== undefined
        ? commentType.reducerList.data
        : [],
  }))(CommentType),
);

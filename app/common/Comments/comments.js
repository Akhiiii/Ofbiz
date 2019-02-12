/* eslint-disable react/no-unused-state */
import React, { Fragment } from 'react';
import { Button, Input, Icon, Popover, Timeline, Form } from 'antd';
import CommentType from '../Dropdowns/CommentType';
import PriorityLevel from '../Dropdowns/Prioritylevel';
// eslint-disable-next-line import/first
import _ from 'lodash';
import styles from '../Styles.less';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';
const { TextArea } = Input;
const FormItem = Form.Item;

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
    };
  }
  handleClick = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.props.commentsData.push(values);
        this.props.form.resetFields();
        this.setState({
          visible: false,
        });
      }
    });
  };

  hide = () => {
    this.props.form.resetFields();
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = () => {
    this.setState({ visible: true });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let { commentsData } = this.props;
    commentsData = commentsData || [];
    const CommentsData = _.map(commentsData, (v, i) => (
      <Timeline.Item key={i}>
        <div className={styles.timeline}>
          {v.comment}
          <span className={styles.commentBy}>({v.commentBy})</span>
          <div className={styles.commentDate}>{v.commentOn}</div>
        </div>
      </Timeline.Item>
    ));
    const content = (
      <div>
        <FormItem label="Comment">
          {getFieldDecorator('comment', {
            initialValue: this.state.instruction,
            enableReinitialize: true,
          })(
            <TextArea
              placeholder="Comment"
              size="small"
              name="comment"
              rows={4}
              style={{ width: 250 }}
            />,
          )}
        </FormItem>
        <FormItem label="Comment By">
          {getFieldDecorator('commentBy', {})(
            <Input
              type="text"
              name="name"
              placeholder="Enter commentBy"
              size="small"
            />,
          )}
        </FormItem>
        <FormItem label="CommentType">
          {getFieldDecorator('commentType', {})(<CommentType />)}
        </FormItem>
        <FormItem label="PriorityLevel">
          {getFieldDecorator('priorityLevel', {})(<PriorityLevel />)}
        </FormItem>
      </div>
    );

    const buttons = (
      <div>
        <div style={{ float: 'left' }}>
          <h4>Add New Comment</h4>
        </div>
        <div style={{ float: 'right' }}>
          <Button
            size="small"
            type="default"
            style={{ marginLeft: '18px' }}
            onClick={() => {
              this.handleClick();
              this.hide();
            }}
          >
            <Icon type="save" />
          </Button>

          <Button
            size="small"
            type="danger"
            style={{ marginLeft: '10px' }}
            onClick={this.hide}
          >
            <Icon type="close" />
          </Button>
        </div>
      </div>
    );
    return (
      <Fragment>
        <div>
          <Popover
            content={content}
            title={buttons}
            trigger="click"
            placement="right"
            maskClosable
            visible={this.state.visible}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            maskClosable={false}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            placement="bottomLeft"
          >
            <Button
              onClick={this.handleVisibleChange}
              size="small"
              style={{
                // marginBottom: '170px',
                background: '#fff',
                borderStyle: 'dashed',
              }}
            >
              <Icon type="plus" />Add Comment
            </Button>
          </Popover>
        </div>
        <div style={{ marginTop: '50px', padding: '30px' }}>
          <Timeline mode="alternate">{CommentsData}</Timeline>
        </div>
        <TextArea hidden value={JSON.stringify(this.props.commentsData)} />
      </Fragment>
    );
  }
}

Comments.defaultProps = {};

Comments.propTypes = {
  form: PropTypes.any,
  commentsData: PropTypes.any,
};

export default Form.create()(Comments);

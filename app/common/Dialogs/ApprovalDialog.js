import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';
import { formItemLayout } from '../Layout/FormItemLayout';
import MmsUsers from '../Dropdowns/MmsUsers';

const FormItem = Form.Item;
const { TextArea } = Input;

class ApprovalDialog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      instructions: '',
      mmsUserId: '',
      reason: '',
      remarks: '',
    };
  }

  componentDidMount() {
    this.props.setClick(() => {
      this.showModal();
    });
  }

  showModal = () => {
    this.setState({ visible: true });
    this.props.form.resetFields();
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.props.form.resetFields();
  };

  saveModalData = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        // this.props.okActionToTrigger(values);
        this.setState({ visible: false });
        this.props.form.resetFields();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { titleOkTextApprovalType, okType } = this.props;

    return (
      <div>
        <Modal
          title={titleOkTextApprovalType}
          visible={this.state.visible}
          onOk={this.saveModalData}
          okText={titleOkTextApprovalType}
          okType={okType}
          onCancel={this.handleCancel}
          cancelText="Close"
        >
          <div style={{ marginRight: '25px' }}>
            <FormItem {...formItemLayout} label="Store Requisition Id">
              {getFieldDecorator('storeRqId', {
                initialValue: 101,
                enableReinitialize: true,
              })(<div>&nbsp; SRq101</div>)}
            </FormItem>
            <FormItem {...formItemLayout} label="Approval Type">
              {getFieldDecorator('approvalType', {
                initialValue: titleOkTextApprovalType,
                enableReinitialize: true,
              })(
                <div>
                  &nbsp; {titleOkTextApprovalType}
                  <Input type="text" name="approvalType" hidden />
                </div>,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Reason">
              {getFieldDecorator('reason', {
                initialValue: this.state.reason,
                enableReinitialize: true,
              })(
                <Input
                  type="text"
                  name="reason"
                  placeholder="Enter Reason"
                  size="small"
                />,
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Remarks">
              {getFieldDecorator('remarks', {
                initialValue: this.state.remarks,
                enableReinitialize: true,
              })(
                <TextArea
                  type="text"
                  name="remarks"
                  placeholder="Enter Remarks"
                  size="small"
                />,
              )}
            </FormItem>
            <div
              hidden={
                titleOkTextApprovalType !== 'Assign' &&
                titleOkTextApprovalType !== 'Approve&Assign'
              }
            >
              <FormItem {...formItemLayout} label="Assignee">
                {getFieldDecorator('mmsUserId', {
                  initialValue: this.state.mmsUserId,
                  enableReinitialize: true,
                })(<MmsUsers />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Instructions">
                {getFieldDecorator('instructions', {
                  initialValue: this.state.instructions,
                  enableReinitialize: true,
                })(
                  <TextArea
                    type="text"
                    name="instructions"
                    placeholder="Enter Instructions"
                    size="small"
                  />,
                )}
              </FormItem>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ApprovalDialog.defaultProps = {};

ApprovalDialog.propTypes = {
  setClick: PropTypes.func,
  titleOkTextApprovalType: PropTypes.string,
  okType: PropTypes.string,
  okActionToTrigger: PropTypes.any,
};

export default Form.create()(ApprovalDialog);

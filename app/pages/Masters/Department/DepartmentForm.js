import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Col, Form, Input, Tabs, Row, Divider, Badge, Button, Drawer } from 'antd';
import { formItemLayout } from '../../../common/Layout/FormItemLayout';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as commonConsts from '../../../common/commonConsts';
import * as localConsts from './DepartmentConsts';
import Comments from '../../../common/Comments/comments';
import styles from '../../../common/Styles.less';
import imgUnderCon from '../../../images/underConstruction.png';

const FormItem = Form.Item;
const { TextArea } = Input;
const { TabPane } = Tabs;

const newObject = {
  id: '',
  name: '',
  shortName: '',
  code: '',
  remarks: '',
  status: true,
  blocked: false,
  deleted: false,
  createdBy: null,
  createdIp: null,
  createdOn: null,
  deletedBy: null,
  deletedIp: null,
  deletedOn: null,
  modifiedBy: '',
  modifiedIp: '',
  modifiedOn: '',
  addressObj: null,
  contactPersonDetailsObj: [],
  contactAddresses: [],
  contactPersons: [],
  commentsData: [],
};
class DepartmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newObject,
      isExistMessage: '',
      commentsData: [],
      enableSaveButtonValue: false,

      // Contact Address
      visibleAddress: false,
      // Contact Person
      visibleContactPerson: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentAction } = this.props;
    if (
      currentAction === actionConsts.ACTION_TYPE_EDIT ||
      currentAction === actionConsts.ACTION_TYPE_VIEW
    ) {
      if (nextProps.dataById.data) {
        if (nextProps.dataById.data.contactAddresses !== null) {
          // eslint-disable-next-line no-return-assign
          nextProps.dataById.data.contactAddresses.forEach(
            // eslint-disable-next-line no-param-reassign
            (value, index) => (value.id = index + 1),
          );
        } else {
          // eslint-disable-next-line no-param-reassign
          nextProps.dataById.data.contactAddresses = [];
        }
        if (nextProps.dataById.data.contactPersons !== null) {
          nextProps.dataById.data.contactPersons.forEach(
            // eslint-disable-next-line no-param-reassign
            (value, index) => (value.id = index + 1),
          );
        } else {
          // eslint-disable-next-line no-param-reassign
          nextProps.dataById.data.contactPersons = [];
        }
        this.setState({ data: nextProps.dataById.data || [] });
      }
    }
    if (
      currentAction === actionConsts.ACTION_TYPE_CLOSE ||
      currentAction === actionConsts.ACTION_TYPE_SAVE ||
      currentAction === actionConsts.ACTION_TYPE_UPDATE
    ) {
      this.setState({ isExistMessage: '' }, () => {
        this.props.form.resetFields();
      });
    }
    if (
      nextProps.dataById.data !== undefined &&
      nextProps.dataById.data !== null
    ) {
      this.setState({
        commentsData: nextProps.dataById.data.comments || [],
      });
    }
  }

  componentDidMount() {
    this.props.setClick(() => {
      this.clearFormFieds();
    });
    this.props.isExists(isExistMessageParam => {
      this.isExistsFunc(isExistMessageParam);
    });
  }

  isExistsFunc = isExistMessageParam => {
    this.setState({ isExistMessage: isExistMessageParam }, () => {
      this.enableSaveButton(
        _.size(this.state.isExistMessage) > 0,
        'isExistMessage',
      );
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const dataForSave = values;
        dataForSave.id = this.state.data.id;
        dataForSave.comments = this.state.commentsData;
        dataForSave.contactAddresses = this.state.data.contactAddresses;
        dataForSave.contactPersons = this.state.data.contactPersons;
        this.props.handleSubmitAction(
          actionConsts.ACTION_TYPE_SAVE,
          dataForSave,
        );
      }
    });
    this.props.form.resetFields();
  };

  checkIsExists = event => {
    const isExistsCheck = this.props.currentAction;
    const dataForExists = event.target.value || '';
    const isSameName = _.isEqual(dataForExists, this.state.data.name);
    if (
      !isSameName &&
      (isExistsCheck === actionConsts.ACTION_TYPE_EDIT ||
        isExistsCheck === actionConsts.ACTION_TYPE_NEW) &&
      dataForExists.length > 0
    ) {
      this.props.handleSubmitAction(
        actionConsts.ACTION_TYPE_ISEXISTS,
        dataForExists,
      );
    } else {
      this.setState({ isExistMessage: '' });
    }
  };

  clearFormFieds = () => {
    this.setState({
      data: newObject,
    });
    this.setState({ isExistMessage: '', enableSaveButtonValue: true }, () =>
      this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
    );
    this.props.form.resetFields();
  };

  enableSaveButton = (enableFlag, isExistMessageFlag) => {
    const valuesObject = this.props.form.getFieldsValue();
    const dataFromState = this.state.data;
    valuesObject.modifiedBy = this.state.data.modifiedBy;
    valuesObject.modifiedOn = this.state.data.modifiedOn;
    valuesObject.name = valuesObject.name;
    valuesObject.shortName = valuesObject.shortName;
    valuesObject.remarks = valuesObject.remarks;
    const resultsValue = _.isMatch(dataFromState, valuesObject);

    this.props.form.validateFields(errors => {
      if (errors) {
        this.setState({ enableSaveButtonValue: true }, () =>
          this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
        );
      }
    });

    if (isExistMessageFlag === 'isExistMessage') {
      this.setState({ enableSaveButtonValue: enableFlag }, () =>
        this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
      );
    } else {
      this.setState({ enableSaveButtonValue: resultsValue }, () =>
        this.props.toggleSaveButtonEnable(this.state.enableSaveButtonValue),
      );
    }
  };

 
  render() {
    const { getFieldDecorator } = this.props.form;
    const { currentAction } = this.props;
    const {
      data,
      isExistMessage,
      commentsData,
    } = this.state;

    const dataViewMode = (
      <div className={styles.dataViewMode1}>
        <div className={styles.tabPaneCard2}>
          <Divider orientation="left" style={{ marginBottom: '0px' }}>
            {localConsts.DIVIDER1_CAPTION}
          </Divider>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.CODE_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.code}</div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.STATUS_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>
              <Badge
                size="large"
                status={data.status === true ? 'success' : 'default'}
              />
              <span className={styles.viewText}>
                {data.status === true
                  ? localConsts.LEGEND_ACTIVE
                  : localConsts.LEGEND_INACTIVE}
              </span>
            </div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.BLOCK_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>
              <Badge
                size="large"
                status={data.blocked === true ? 'error' : 'success'}
              />
              <span className={styles.viewText}>
                {data.blocked === true
                  ? localConsts.LEGEND_BLOCKED_YES
                  : localConsts.LEGEND_BLOCKED_NO}
              </span>
            </div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.NAME_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.name}</div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>
              {localConsts.SHORT_NAME_LABEL}
            </div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.shortName}</div>
          </div>
          <div className={styles.viewLabelContainer}>
            <div className={styles.viewLabel}>{localConsts.REMARKS_LABEL}</div>
            <div className={styles.viewLabelSeparator}>:</div>
            <div className={styles.viewText}>{data.remarks}</div>
          </div>
        </div>
        <div className={styles.tabPaneCard2}>
          <Divider orientation="left">{localConsts.DIVIDER2_CAPTION}</Divider>
          <div className={styles.viewTextMarginLeft}>{data.addresses}</div>
          <br />
          <Divider orientation="left">{localConsts.DIVIDER3_CAPTION}</Divider>
          <div className={styles.viewTextMarginLeft}>{data.phoneNumbers}</div>
        </div>
      </div>
    );

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} id={localConsts.FORM_ID}>
          <Tabs defaultActiveKey="2" size="small" className={styles.tab}>
            <TabPane
              tab={localConsts.TAB1_CAPTION}
              key="1"
              className={styles.tabPaneCustom}
            >
              <img
                alt=""
                src={imgUnderCon}
                className={styles.imgUnderConstruction}
              />
            </TabPane>
            <TabPane
              tab={localConsts.TAB2_CAPTION}
              key="2"
              className={styles.tabPaneCustom}
            >
              <div hidden={currentAction !== actionConsts.ACTION_TYPE_VIEW}>
                {dataViewMode}
              </div>
              <div
                className={styles.tabPaneCard}
                hidden={currentAction === actionConsts.ACTION_TYPE_VIEW}
              >
                <FormItem {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: data.id,
                    enableReinitialize: true,
                  })(<Input type="hidden" name="id" />)}
                </FormItem>
                <FormItem {...formItemLayout} label={localConsts.CODE_LABEL}>
                  {getFieldDecorator('code', {
                    initialValue: data.code,
                    enableReinitialize: true,
                  })(
                    <div>
                      <Input type="hidden" name="code" />
                      {data.code || localConsts.LABEL_NOTAVAILABLE}
                    </div>,
                  )}
                </FormItem>
                <FormItem {...formItemLayout} label={localConsts.STATUS_LABEL}>
                  {getFieldDecorator('status', {
                    initialValue: data.status,
                    enableReinitialize: true,
                  })(
                    <div>
                      <Input type="hidden" name="status" />
                      <Badge
                        size="large"
                        status={data.status === true ? 'success' : 'default'}
                      />
                      <span className={styles.viewText}>
                        {data.status === true
                          ? localConsts.LEGEND_ACTIVE
                          : localConsts.LEGEND_INACTIVE}
                      </span>
                    </div>,
                  )}
                </FormItem>
                <span hidden={currentAction === actionConsts.ACTION_TYPE_NEW}>
                  <FormItem {...formItemLayout} label={localConsts.BLOCK_LABEL}>
                    {getFieldDecorator('blocked', {
                      initialValue: data.blocked,
                      enableReinitialize: true,
                    })(
                      <div>
                        <Input type="hidden" name="blocked" />
                        <Badge
                          size="large"
                          status={data.blocked === true ? 'error' : 'success'}
                        />
                        <span className={styles.viewText}>
                          {data.blocked === true
                            ? localConsts.LEGEND_BLOCKED_YES
                            : localConsts.LEGEND_BLOCKED_NO}
                        </span>
                      </div>,
                    )}
                  </FormItem>
                </span>
                <FormItem {...formItemLayout} label={localConsts.NAME_LABEL}>
                  {getFieldDecorator('name', {
                    initialValue: data.name,
                    enableReinitialize: true,
                    rules: [
                      {
                        required: localConsts.NAME_REQUIRED,
                        message: localConsts.NAME_ERROR_MSG_REQUIRED,
                      },
                      {
                        min: localConsts.NAME_MINSIZE,
                        message: localConsts.NAME_ERROR_MSG_MINSIZE,
                      },
                      {
                        max: localConsts.NAME_MAXSIZE,
                        message: localConsts.NAME_ERROR_MSG_MAXSIZE,
                      },
                      {
                        pattern: localConsts.NAME_ERROR_PATTERN,
                        message: localConsts.NAME_ERROR_MSG_PATTERN,
                      },
                    ],
                  })(
                    <Input
                      type="text"
                      name="name"
                      placeholder={localConsts.NAME_PLACEHOLDER}
                      // hidden={currentAction !== actionConsts.ACTION_TYPE_NEW}
                      onBlur={this.checkIsExists}
                    />,
                  )}
                  {/* <span
                    className={styles.viewText}
                    hidden={currentAction === actionConsts.ACTION_TYPE_NEW}
                  >
                    {data.name || localConsts.LABEL_NOTAVAILABLE}
                  </span> */}
                </FormItem>
                <div style={localConsts.NAME_ERROR_MSG_ISEXISTS_STYLE}>
                  {isExistMessage}
                </div>
                <FormItem
                  {...formItemLayout}
                  label={localConsts.SHORT_NAME_LABEL}
                >
                  {getFieldDecorator('shortName', {
                    initialValue: data.shortName,
                    enableReinitialize: true,
                    rules: [
                      {
                        min: localConsts.SHORT_NAME_MINSIZE,
                        message: localConsts.SHORT_NAME_ERROR_MSG_MINSIZE,
                      },
                      {
                        max: localConsts.SHORT_NAME_MAXSIZE,
                        message: localConsts.SHORT_NAME_ERROR_MSG_MAXSIZE,
                      },
                      {
                        pattern: localConsts.SHORT_NAME_ERROR_PATTERN,
                        message: localConsts.SHORT_NAME_ERROR_MSG_PATTERN,
                      },
                    ],
                  })(
                    <Input
                      type="text"
                      name="shortName"
                      placeholder={localConsts.SHORT_NAME_PLACEHOLDER}
                      onBlur={this.enableSaveButton}
                    />,
                  )}
                </FormItem>
                <FormItem {...formItemLayout} label={localConsts.REMARKS_LABEL}>
                  {getFieldDecorator('remarks', {
                    initialValue: data.remarks,
                    enableReinitialize: true,
                    rules: [
                      {
                        max: localConsts.REMARKS_MAXSIZE,
                        message: localConsts.REMARKS_ERROR_MSG_MAXSIZE,
                      },
                      {
                        pattern: localConsts.REMARKS_ERROR_PATTERN,
                        message: localConsts.REMARKS_ERROR_MSG_PATTERN,
                      },
                    ],
                  })(
                    <TextArea
                      rows={localConsts.REMARKS_ROWS}
                      name="remarks"
                      placeholder={localConsts.REMARKS_PLACEHOLDER}
                      onBlur={this.enableSaveButton}
                    />,
                  )}
                </FormItem>
              </div>
            </TabPane>
            <TabPane
              tab={localConsts.TAB5_CAPTION}
              key="3"
              className={styles.tabPaneCustom}
            >
              <Comments commentsData={commentsData} />
            </TabPane>
          </Tabs>
          <Row
            hidden={currentAction === actionConsts.ACTION_TYPE_NEW}
            style={commonConsts.LABEL_AUDIT_STYLE}
          >
            <Col span={12}>
              <span>
                {commonConsts.LABEL_AUDIT_CREATEDBY}
                {data.createdBy || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_CREATEDON}
                {data.createdOn || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_CREATEDIP}
                {data.createdIp || localConsts.LABEL_NOTAVAILABLE}
              </span>
            </Col>
            <Col span={12}>
              <span className={styles.labelModified}>
                {commonConsts.LABEL_AUDIT_MODIFIEDBY}
                {data.modifiedBy || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_MODIFIEDON}
                {data.modifiedOn || localConsts.LABEL_NOTAVAILABLE},
                {commonConsts.LABEL_AUDIT_MODIFIEDIP}
                {data.modifiedIp || localConsts.LABEL_NOTAVAILABLE}
              </span>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }
}

DepartmentForm.propTypes = {
  dispatch: PropTypes.func,
  dataById: PropTypes.any,
  form: PropTypes.object,
  currentAction: PropTypes.string,
  resetFields: PropTypes.func,
  validateFields: PropTypes.func,
  setClick: PropTypes.func,
  isExists: PropTypes.func,
  handleSubmitAction: PropTypes.func,
  toggleSaveButtonEnable: PropTypes.func,
};

export default Form.create()(
  // connect(({ department, contactPerson }) => ({
  connect(({ department }) => ({
    dataById: department.reducerById,
  }))(DepartmentForm),
);

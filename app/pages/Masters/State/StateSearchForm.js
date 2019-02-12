import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Row, Col, Button, Form, Input } from 'antd';

import styles from '../../../common/Styles.less';
import Status from '../../../common/Dropdowns/Status';
import Blocked from '../../../common/Dropdowns/Blocked';
import * as actionConsts from '../../../common/TitlePane/ActionConsts';
import * as localConsts from './StateConsts';
import AlphabetsNumbersRadio from '../../../common/AlphabetsNumbersRadio/AlphabetsNumbersRadio';

const FormItem = Form.Item;
export const alphabetNumberLayout = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 22 },
    sm: { span: 22 },
  },
};
class StateSearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ReceivedValues: [] };
  }

  handleReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.props.handleSubmitAction(actionConsts.ACTION_TYPE_LIST, {});
    this.props.handleSearchFilters({});
  };

  handleSearch = () => {
    this.props.form.validateFields((errors, values) => {
      if (!errors) {
        const dataForSearch = _.pickBy(values, _.identity);
        this.props.handleSubmitAction(
          actionConsts.ACTION_TYPE_LIST,
          dataForSearch,
        );
        this.setState({ ReceivedValues: dataForSearch }, () =>
          this.props.handleSearchFilters(this.state.ReceivedValues),
        );
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Fragment>
        <Row gutter={20}>
          <Col span={4}>
            <FormItem label={localConsts.NAME_LABEL}>
              {getFieldDecorator('name', {
                rules: [
                  {
                    min: localConsts.NAME_MINSIZE,
                    message: localConsts.NAME_ERROR_MSG_MINSIZE,
                  },
                  {
                    max: localConsts.NAME_MAXSIZE,
                    message: localConsts.NAME_ERROR_MSG_MAXSIZE,
                  },
                ],
              })(
                <Input
                  size="small"
                  placeholder={localConsts.NAME_PLACEHOLDER}
                  name="name"
                />,
              )}
            </FormItem>
          </Col>
          <Col span={4}>
            <FormItem label={localConsts.CODE_LABEL}>
              {getFieldDecorator('code')(
                <Input
                  size="small"
                  placeholder={localConsts.CODE_PLACEHOLDER}
                  name="code"
                />,
              )}
            </FormItem>
          </Col>
          <Col span={4}>
            <FormItem label={localConsts.SHORT_NAME_LABEL}>
              {getFieldDecorator('shortName', {
                rules: [
                  {
                    min: localConsts.SHORT_NAME_MINSIZE,
                    message: localConsts.SHORT_NAME_ERROR_MSG_MINSIZE,
                  },
                  {
                    max: localConsts.SHORT_NAME_MAXSIZE,
                    message: localConsts.SHORT_NAME_ERROR_MSG_MAXSIZE,
                  },
                ],
              })(
                <Input
                  size="small"
                  placeholder={localConsts.SHORT_NAME_PLACEHOLDER}
                  name="shortName"
                />,
              )}
            </FormItem>
          </Col>
          <Col span={4}>
            <FormItem label="Status">
              {getFieldDecorator('status', {})(<Status />)}
            </FormItem>
          </Col>
          <Col span={4}>
            <FormItem label={localConsts.BLOCK_LABEL}>
              {getFieldDecorator('blocked', {})(<Blocked />)}
            </FormItem>
          </Col>
          <Col span={4} className={styles.submitColumn}>
            <Button
              type="default"
              icon="search"
              htmlType="submit"
              onClick={() => {
                this.handleSearch();
              }}
            />
            <Button
              type="danger"
              icon="rollback"
              className={styles.submitButton}
              onClick={() => {
                this.handleReset();
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FormItem
              {...alphabetNumberLayout}
              label={localConsts.LEGEND_NAME_STARTBY}
            >
              {getFieldDecorator('startsWith', {})(<AlphabetsNumbersRadio />)}
            </FormItem>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

StateSearchForm.propTypes = {
  form: PropTypes.any,
  handleSubmitAction: PropTypes.func,
  handleSearchFilters: PropTypes.func,
};

export default Form.create()(StateSearchForm);

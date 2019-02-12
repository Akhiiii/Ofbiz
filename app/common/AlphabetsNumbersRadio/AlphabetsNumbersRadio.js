import React, { Fragment } from 'react';
import { Radio, Icon } from 'antd';
import styles from './AlphabetsNumbersRadio.less';
class AlphabetsNumbersRadio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      radioGroupOptions: [
        { value: 'A' },
        { value: 'B' },
        { value: 'C' },
        { value: 'D' },
        { value: 'E' },
        { value: 'F' },
        { value: 'G' },
        { value: 'H' },
        { value: 'I' },
        { value: 'J' },
        { value: 'K' },
        { value: 'L' },
        { value: 'M' },
        { value: 'N' },
        { value: 'O' },
        { value: 'P' },
        { value: 'Q' },
        { value: 'R' },
        { value: 'S' },
        { value: 'T' },
        { value: 'U' },
        { value: 'V' },
        { value: 'W' },
        { value: 'X' },
        { value: 'Y' },
        { value: 'Z' },
        { value: '0' },
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '7' },
        { value: '8' },
        { value: '9' },
      ],
    };
  }

  handleCloseButton = () => {
    const selectedRadio = document.getElementsByClassName(
      'ant-radio-button-wrapper-checked',
    );
    if (selectedRadio[0]) {
      selectedRadio[0].className = 'ant-radio-button-wrapper ';
    }
    const selectedRadio1 = document.getElementsByClassName(
      'ant-radio-button-checked',
    );
    if (selectedRadio1[0]) {
      selectedRadio1[0].className = 'ant-radio-button';
    }
    // eslint-disable-next-line vars-on-top
    const resetButton = document.getElementById('RadioButton');
    if (resetButton) {
      resetButton.value = '';
    }
  };
  render() {
    const { radioGroupOptions } = this.state;
    const radioButtonOptions = radioGroupOptions.map((k, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Radio.Button key={i} value={k.value} id="RadioButton">
        {k.value}
      </Radio.Button>
    ));
    return (
      <Fragment>
        <Radio.Group {...this.props} buttonStyle="solid" size="small">
          {radioButtonOptions}
        </Radio.Group>
        <Icon
          type="close"
          className={styles.icon}
          onClick={this.handleCloseButton}
        />
      </Fragment>
    );
  }
}

AlphabetsNumbersRadio.defaultProps = {};

export default AlphabetsNumbersRadio;

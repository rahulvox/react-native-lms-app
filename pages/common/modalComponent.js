import { Button, Input, Item, Text } from 'native-base';
import React from 'react';
import { Modal, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthenticationApi from '../../services/AuthenticationApi';
import BaseComponent from './BaseComponent';
import styleContent from './commonStyling';

export default class ModalComponent extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      emailAdded: '',
      showInlineError: false
    };
    this.authenticateApi = new AuthenticationApi();
    this.setModalVisible = this.setModalVisible.bind(this);
    this.onEmailSubmit = this.onEmailSubmit.bind(this);
    this.onEmailAdded = this.onEmailAdded.bind(this);
    this.onSuccessHandler = this.onSuccessHandler.bind(this);
    this.onErrorHandler = this.onErrorHandler.bind(this);
  }


  componentDidMount() {
    this.setState({
      spinner: false,
      modalVisible: true,
      emailAdded: '',
      showInlineError: false
    });
  }

  onEmailAdded(val) {
    this.setState({ emailAdded: val });
  }

  onSuccessHandler() {
    const { modalVisible } = this.state;
    this.setState({
      spinner: false,
      modalVisible: !modalVisible,
      showInlineError: false
    });
  }

  onErrorHandler() {
    const { modalVisible } = this.state;
    this.setState({
      spinner: false,
      modalVisible: !modalVisible,
      showInlineError: false
    });
  }

  onEmailSubmit() {
    const { emailAdded, modalVisible } = this.state;
    console.log(emailAdded);
    if (emailAdded && emailAdded !== '') {
      this.setState({
        spinner: true,
        showInlineError: false
      });
      this.authenticateApi.forgotPasswordApi({
        successHandler: this.onSuccessHandler,
        errorHandler: this.onErrorHandler
      });
    } else {
      this.setState({
        showInlineError: true,
      })
    }
    //  this.props.parentDataHandler(emailAdded);
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getStyleForInputBorder() {

  }

  render() {
    const { showInlineError } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
           <View style={styleContent.modalHeaderDiv}>
              <Text note style={styleContent.modalHeader}  > Forgot Password</Text>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                <Icon name="close" style={styleContent.modalCloseBtn} />
            </TouchableHighlight>
            </View>

            <View style={styleContent.modalBody}>
            <Text style={{
                  fontSize: 15,
                  marginBottom: "5%",
                  fontFamily: "Montserrat-SemiBoldItalic",

                }}> Enter Your Email id  </Text>
                <Item regular error={showInlineError}  style={styleContent.modalTextBox}>
              <Input

                style={styleContent.dynamicComponentTextStyle}
                returnKeyType="next"
                clearButtonMode="always"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(val) => { this.onEmailAdded(val) }}
              />
              {
                showInlineError == true &&
                <Icon name='close' style={{ color: "red", fontWeight: "bold", fontSize: 21 }} />
              }


            </Item>

            <Button
              style={{
                marginTop: 5,
                    backgroundColor: "#EC2227",
                    height: 50,
                    justifyContent: "center",
                    alignContent: "center",
              }}
              onPress={() => {
                this.onEmailSubmit()
              }}>
              <Text> RESET PASSWORD </Text>
            </Button>
          </View>
        </View>
        </View>
        {this.getSpinnerComponentView(this.state.spinner)}
      </Modal>
    );
  }
}
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

import db from "../config";
import firebase from "firebase";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email_id: "",
      password: "",
      name: "",
      roll_no: "",
      class: "",
      school_name:""
    };
  }

  userSignUp = (emailId, password) => {
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then(() => {
        db.collection("users").add({
        name: this.state.name,
        class: this.state.class,
        rollNumber: this.state.roll_no,
        schoolName: this.state.school_name,
        emailId: this.state.email_id,
        });
    })
    .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    });
    
  };

  userLogin = (emailId, password) => {
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(() => {
        this.props.navigation.navigate("");
    })
    .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    });
  };

  render(){
      return(
          <View></View>
      )
  }
}

const styles = StyleSheet.create({
  formTextInput: {
      width: "75%",
      height: 35,
      alignSelf: "center",
      borderColor: "#ffab91",
      borderRadius: 10,
      borderWidth: 1,
      marginTop: 20,
      padding: 10
    },
})
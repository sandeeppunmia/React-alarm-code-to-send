import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import ListAlarms from './components/ListAlarms';
import TimePicker from './components/TimePicker';

const App=()=>{
  return(
        <View style={styles.mainContainer}>
          <Text style={styles.heading}>Alarm</Text>
            <View style={styles.listAlarms}>
              <ListAlarms/>
            </View>

            <View style={styles.timePicker}>
              <TimePicker/>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    // fontWeight: "bold",
    fontSize: 25,
    padding: 20,
  },
  timePicker: {
    paddingTop: '10%',
    width: '50%',
    // right: '10%',
    bottom: 20,
  },
  listAlarms: {
    flex: 1,
    width: '100%',
  },
});

export default App;
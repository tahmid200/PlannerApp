import React, { useState } from 'react';
import { View, Button, Platform, TextInput, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const AddTask = () => {



    //using state for date
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    //task title state
    const [title, setTitle] = useState('');

    //task description state
    const [description, setDescription] = useState('');

    //for time changing
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <>

            <View style={{ padding: 10 }}>
                <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='Enter Title'
                    onChangeText={text => setTitle(title)}
                    defaultValue={title}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
                <View>
                    <Button onPress={showTimepicker} title="Show time picker!" />
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
            <View>
                <Button title="Pre-task Nudge: 1hr" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Button title="Recurring" />
                </View>
                <View>
                    <Button title="One-Time" />
                </View>
            </View>
            <View>
                <TextInput style={{ textAlignVertical: 'top', height: 250, width: 300, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='Enter Description'
                    onChangeText={text => setDescription(description)}
                    defaultValue={description}
                    multiline={true}
                />
            </View>
            <View>
                <Text>Quick Tags: </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button title='Workout' />
                    <Button title='Studying' />
                    <Button title='Reading' />
                </View>
            </View>

        </>
    );
};

export default AddTask;


/*
export default class App extends Component {
    state = {
      date: new Date(),
    }

    render() {
      const { date } = this.state;

      return (
        <DateTimePicker
          value={ date }
          mode='default'
          display='default'
          onChange={ date => this.setState({ date }) } />
      );
    }
  }
  */
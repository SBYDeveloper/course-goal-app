import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }
    return(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            placeholder="Course Goal"
            onChangeText={goalInputHandler}
            value={enteredGoal}/>
            <Button 
            title="ADD"
            onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
})

export default GoalInput
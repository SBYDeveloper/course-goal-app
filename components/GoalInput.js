import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                <Button 
                    title="ADD"
                    onPress={addGoalHandler}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
})

export default GoalInput
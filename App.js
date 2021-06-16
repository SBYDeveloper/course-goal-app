import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelHandler = () => {
    setIsAddMode(false);
}

  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      </View>
      <GoalInput 
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelHandler} />
      <FlatList 
        style={styles.goalsContainer}
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            onDelete={removeGoalHandler}
            id={itemData.item.id}
            title={itemData.item.value} />
        )}> 
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  goalsContainer: {
    marginTop: 20,
    marginBottom: 40
  },
  button: {
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 10
  }
});
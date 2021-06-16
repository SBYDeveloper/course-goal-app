import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle}
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList style={styles.goalsContainer}
                keyExtractor={(item, index) => item.id}
                data={courseGoals} 
                renderItem={itemData => <GoalItem title={itemData.item.value} />}> 
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
  }
});
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal) => {
    console.log(goal);
    setCourseGoals([
      ...courseGoals,
      { id: Math.random().toString(), value: goal },
    ]);
    setIsAddMode(false);
  };
  const onDelete = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.item1}>
          <Text>1</Text>
        </View>
        <View style={styles.item2}>
          <Text>2</Text>
        </View>
        <View style={styles.item3}>
          <Text>3</Text>
        </View>
      </View>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <View>
        <GoalInput cancelGoalHandler={cancelGoalHandler} visible={isAddMode} addGoalHandler={addGoalHandler} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              itemData={itemData.item.value}
              onDelete={onDelete}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  item1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item3: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

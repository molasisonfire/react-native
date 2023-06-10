import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler(){
    setModalVisible(true);
  }

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler(enteredGoalText){
    setGoals( (currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id : Math.random().toString()}]);
    setModalVisible(false);
  };

  function deleteGoalHandler(id){
    setGoals(currentCourseGoals => {
      return currentCourseGoals.filter((g) => g.id !== id);
    });
  }

  function endAddGoalHandler(){
    console.log("!!")
    setModalVisible(false);
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
       <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/> 
       <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} modalVisible={modalVisible} onCancel={endAddGoalHandler}  />
      <View style={styles.goalsContainer}>
      <FlatList data={goals} renderItem={itemData => {
        return (<GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>);
      }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});

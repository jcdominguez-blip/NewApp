import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Text, TextInput, View, Button,FlatList, Modal, Touchable, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import { AddItem, CustomModal, TaskList } from './components';
import { colors } from '../constanst/theme/color';


const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible]= useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  //console.warn('tasks', tasks)

  const onHandlerModal = ( item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }


  const onHandlerCancel = () =>{
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandlerDelete = ( ) =>{
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id = selectedTask.id));
    setIsModalVisible(!isModalVisible);

  }
  
  return (
    <View style={styles.container}>

      <AddItem
      buttonColor={colors.terciario}
      buttonText={'add'}
      onHandlerChange={onHandlerChange}
      onHandlerSubmit={onHandlerSubmit}
      placeholder={'Agregar nueva tarea'}
      task={task}      
      />

      <TaskList
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />    
      
      <CustomModal
      isModalVisible={isModalVisible}
      onHandlerCancel={onHandlerCancel}
      onHandlerDelete={onHandlerDelete}
      selectedTask={selectedTask}

      />

    
      
    </View>
  );
}



export default App;
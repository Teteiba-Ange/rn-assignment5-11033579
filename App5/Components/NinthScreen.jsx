import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const task = [
  { key: '1', name: 'Language' },
  { key: '2', name: 'My Profile' },
  { key: '3', name: 'Contact Us' },
  { key: '4', name: 'Change Password' },
  { key: '5', name: 'Privacy Policy' }
];

const NinthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {task.map((taskItem) => (
          <View style={styles.taskContainer} key={taskItem.key}>
            <Text style={{fontSize: 20,color: 'green',textAlign: 'center'}}>
                {taskItem.name}
                </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
  },
  listContainer: {
    marginTop:20,
    
  },
  taskContainer: {
    marginTop:5,
    backgroundColor: 'white',
    padding: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'pink',
    font:48,
    color:'green'
  },
});

export default NinthScreen;

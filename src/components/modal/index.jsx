import React from "react";
import {Modal, View, Button, Text, SafeAreaView} from 'react-native'
import { styles } from "./styles";


const CustomModal = ({isModalVisible, selectedTask, onHandlerCancel, onHandlerDelete } ) => {

    return(
        <Modal visible ={isModalVisible} animationType='slide'>
          <View style={styles.modalContainer}>
            <Text style ={styles.modalTitle}>Bienvenido a la app de VDR</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>¿Estas seguro de elmiminar este item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#ff495c'
              onPress={onHandlerCancel}
            />

            <Button
            title='Delete'
            color='#0e0d2a'
            onPress={onHandlerDelete}
            
            />
          </View>

          <Button style={styles.buttonConfirm}
            title='confirm'
            color='green'
            onPress ={() =>  alert('Confirmaste la acción')}
            text ='Click Me'
            />
          </View>
        </Modal>
    )
}

export default CustomModal;
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({
    modalContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
      },
    
      modalTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,    
      },
      modalDetailContainer:{
        paddingVertical:20,
      },
      modalDetailMessage:{
        fontSize: 14,
        color:'#0e0d2a',
      },
      selectedTask:{
        fontSize:14,
        color:'#37bbed',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign:'center',
    
      },
      modalButtonContainer:{
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
      }, 

      buttonText: {
      


      },
  
  
      buttonConfirm: {
          backgroundColor:'#e7e7e7',
          alignSelf:'center',
          borderRadius: 10,
          paddingVertical: 15,
          width: '90%'
          
      },
  })
  



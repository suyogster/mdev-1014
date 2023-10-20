import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Button, Alert, TouchableOpacity} from "react-native";

const Flexboxtry =()=>
{
    return(
        <SafeAreaView style = { styles.wrapper}>
           <View style = {styles.box1}>
            <Text onPress={()=>(console.log("First box clicked"))}>First Box</Text>
           </View>
           <View style = {styles.box2}>
            <Button title='Second Box' onPress={()=>Alert.alert('Attention','Button pressed')}></Button>
           </View>
           <View style = {styles.box3}>
            <TouchableOpacity onPress={()=>{console.log('Inside Box 3')
            Alert.alert('Attention', 'Last Box?',[
                {text:'Yes',onPress:()=>console.log("Yes clicked")},
                {text:'No',onPress:()=>console.log('No clicked')}
            ])
            }}>
<Text>Third Box</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:
    {
        flex:1,
        backgroundColor:'lightblue',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    box1:
    {
        height:100,
        width:100,
        backgroundColor:"orange"
    },
    box2:
    {
        height:100,
        width:100,
        backgroundColor:'red',
        position:'relative',
        top: 200,
        left:50
    },
    box3:
    {
        height:100,
        width:100,
        backgroundColor:'purple'
    }
})
export default Flexboxtry
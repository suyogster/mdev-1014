import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet,TouchableOpacity, FlatList} from "react-native";

export default function Flexbox()
{
    const [myList,setmyList]=useState([
        {text:'Morning Walk',key:'1'},
        {text:'Washing car',key:'2'},
        {text:'Cook Food',key:'3'},
        {text:'Do Assignments',key:'4'},
        {text:'Pay Bills',key:'5'},
        {text:'Attend Meetings',key:'6'},
        {text:'Pick-up Order',key:'7'},
        {text:'Make Shake',key:'8'},
        {text:'Gyming',key:'9'},
        {text:'Making Diet',key:'10'},
        {text:'Watch Netflix',key:'11'},
        {text:'Sleep',key:'12'},
    ])
const onClicking=(key:any)=>{
    console.log(key)
}
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>My List</Text>
        <View>
        <FlatList
        data={myList}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>onClicking(item.key)}>
            <Text style = {styles.list}>{item.text}</Text>
            </TouchableOpacity>
        )}></FlatList>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightblue',
        paddingHorizontal:20
    },
    text:{
        fontSize:20,
       textAlign:'center',
    },
    list:{
        padding:30,
        marginTop:24,
        paddingTop:16,
        backgroundColor:'pink',
        fontSize:24
        
        
    }
})

 
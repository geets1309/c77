import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar ,  TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}
               >
               <SafeAreaView style={styles.droidArea} />
               <View style={styles.titleBar}>
                <Text style={styles.titleText}>Iss Tracker App</Text>
                </View>

<TouchableOpacity style={styles.routeCard}>
<Text style={styles.routeText}> ISS Location </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.routeCard}>
<Text style={styles.routeText}> Meteors </Text>
</TouchableOpacity>

            </View>
        )
    }
}

styles= StyleSheet.create({
container:
{flex:1},

droidArea:{
marginTop:Platform.OS==="android"? StatusBar.currentHeight:0},

titleBar:{flex:0.15,
justifyContent:"center",
alignItems:"center"},

titleText:{
fontSize:40,
fontWeight:"bold",
color:"white"},

routeCard:{
flex:0.25,
marginLeft:50,
marginRight:50,
marginTop:50,
borderRadius:30,
backgroundColor:"white"
},
routeText:{
fontSize:35,
marginTop:15,
color:"black",
paddingLeft:30}

})
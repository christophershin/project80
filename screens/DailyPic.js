import React, {Component} from 'react';
import {Alert, Linking, Text, View } from 'react-native';

export default class DailyPicScreen extends Component {
    render() {
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Daily Pic Screen </Text>

            </View>
        )
    }
    getAPOD = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=COGdtQeIW1mbziFVQgpfK3JfP4dBSAlQg8imDGw")
        .then(response => {
            this.setState({apod: response.data})

        })
        .catch(error =>{
            Alert.Alert(error.message)
        })
    }
    <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require('../assets/star-background.jpg')} style={styles.backgroundImage}>
            <Text style={styles.routeText}>
                Astronomy picture of the day
            </Text>
            <Text style={styles.titleText}>{this.state.apod.title}</Text>
            <TouchableOpacity style={styles.listContainer}
            onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
            >
                <View style={styles.iconContainer}>
                    <Image source={require("../assets/play-video.png")} style={{width:50, height:50}}></Image>
                </View>
            </TouchableOpacity>


            <Text style={styles.explanationText}>{this.state.apod.explantion}</Text>

            </ImageBackground>
            </View>


getData=()=>{
    axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
    .then(response => {

        this.setState({ aircrfats: response.data.results })
        console.log(response.data.results)

})
.catch(error => {
    console.log(error.message)
})


}

renderItem = ({item}) =>{
    return(
        <View style ={{borderWidth:1, justifyContent:'center', alignItems:'center', marginBottom:10,elevation}}>
            <Image 
            source= {{uri: item.agency.image_url}} style={{width: "100", height: 200, marginTop:15, marginBottom:15, marginRight:10}}></Image>
        
        <Text style ={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
        <Text style={{color:'#696969'}}>{item.agency.name}</Text>
        <Text>DECRIPTION</Text>
        <Text style={{color:'#A9A9A9', marginLeft:10, marginRight:10}}>{item.agency.description}</Text>
        </View>
    )
}

<View
    style={{
        flex: 1,
        justifyCOntent: "center",
        alignItems: "center"
    }}>
<View styles={{flex:0.25}}>
    <Text>Space crafts</Text>
</View>
<View styles={{flex:0.75}}>
<Flatlist
keyExtractor={this.keyExtractor}
data={this.state.aircrafts}
renderItem={this.renderItem}
/>
</View>
</View>
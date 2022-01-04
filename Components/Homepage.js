import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Tts from 'react-native-tts';
// import Clipboard from '@react-native-community/clipboard';
// import Snackbar from 'react-native-snackbar';

// Tts.setDefaultLanguage('en-GB');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.5);
// Tts.setDefaultPitch(1.2);

const Homepage = () => {

    const [Quote, setQuote] = useState('Loading...');
    const [Author, setAuthor] = useState('Loading...');
    const [Loading, setLoading] = useState(false);

    const randomQuote = () => {
        setLoading(true);
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
          setQuote(result.content);
            setAuthor(result.author);
            setLoading(false);
        })
      }
      useEffect(() => {
        randomQuote();
      }, []);

    //   const speakNow = () => {
    //     // Tts.stop();
    //     Tts.speak(Quote + ' by ' + Author);
    //     // Tts.addEventListener('tts-start', (event) => setIsSpeaking(true));
    //     // Tts.addEventListener('tts-finish', (event) => setIsSpeaking(false));
    //   };

    // const copyToClipboard = () => {
    //     Clipboard.setString(Quote);
    //     Snackbar.show({
    //       text: 'Quote copied!',
    //       duration: Snackbar.LENGTH_SHORT,
    //     });    
    //   }
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textStyle}>Quote of the day</Text>
            </View>   
            <View>
                <FontAwesome name="quote-left" size={20} color="black" style={{marginBottom:-20, marginLeft:10}}/>
                <Text style={styles.qouteText}>
                    {Quote}
                </Text>
                <FontAwesome name="quote-right" size={20} color="black" style={{textAlign:'right', marginTop:0, marginRight: 10}}/>
                <Text style={{textAlign:'right', marginRight:20, marginTop:10}}>---- {Author}</Text>    
            </View>  
            <TouchableOpacity
            style={{
                backgroundColor: '#87CEEB',
                padding: 10,
                borderRadius: 40,
                marginTop: 5,
                alignItems: 'center',
                marginRight:40,
                marginLeft:40,
            }} onPress={randomQuote}
            >
                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                New Quote</Text>   
                </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:30, marginLeft:20,marginTop:20}}>
                <View style={{height:50, width: 50, borderColor:'#87CEEB', borderWidth:1.5, borderRadius:25, alignSelf:'center'}}>
                     <TouchableOpacity >
                        <FontAwesome name="volume-up" size={28} color="#87CEEB" style={{marginTop:10, marginLeft:10}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{height:50, width: 50, borderColor:'#87CEEB', borderWidth:1.5, borderRadius:25, alignSelf:'center'}}>
                <TouchableOpacity > 
                    <FontAwesome name="clipboard" size={28} color="#87CEEB" style={{marginTop:10, marginLeft:10}}/>
                </TouchableOpacity>
                </View>

                <View style={{height:50, width: 50, borderColor:'#87CEEB', borderWidth:1.5, borderRadius:25, alignSelf:'center'}}>
                <TouchableOpacity>
                    <FontAwesome name="twitter" size={28} color="#87CEEB" style={{marginTop:10, marginLeft:10}}/>
                </TouchableOpacity>
                </View>
                
            </View>     
        </View>
    );
};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '65%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 30,
    },
    textStyle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        lineHeight: 40,
    },
    qouteText: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 26,
        letterSpacing: 1.1,
        textAlign: 'center',
        padding: 10,
    },
});
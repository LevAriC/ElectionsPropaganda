import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';

class Wazza extends Component {
    constructor(props){
        super(props);
        this.state = {isShowingText: true};
//        setInterval(() => (this.setState(previousState => ({ isShowingText: !previousState.isShowingText }))), 1000);
    }

    render(){
        if(!this.state.isShowingText){
            return null;
        }
        return(
            <View style={[styles.party, styles.blue1]}>
                <Text style={styles.txt}>{this.props.name}</Text>
            </View>
        );
    }
}

export default class App extends Component<> {
  render() {
    return (


          <View style={styles.flex}>
            <View style={styles.flex}>

                <FlatList style={styles.flex} data={[
                    {key: 'עבודה'},
                    {key: 'ליכוד'},
                    {key: 'מרץ'},
                    {key: 'חוזק'},
                    {key: 'חוסן'},
                  ]}
                  renderItem={({item}) => <View style={[styles.flex, styles.party, styles.blue1]}><Text style={styles.txt}>{item.key}</Text></View>}
                />


            </View>
          </View>

    );
  }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    list: {
        flexDirection: 'column',
        height: Dimensions.get('window').height*0.8,
    },
    party: {
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
       textAlign: 'center',
       fontSize: 40,
    },
    blue1: {backgroundColor: 'powderblue',},
    blue2: {backgroundColor: 'skyblue',},
    blue3: {backgroundColor: 'steelblue',},
});


//                <View style={[styles.flex, styles.party, styles.blue1]}>
//                    <Text style={styles.txt}>עבודה</Text>
//                </View>
//                <View style={[styles.flex, styles.party, styles.blue2]}>
//                    <Text style={styles.txt}>עבודה</Text>
//                </View>
//                <View style={[styles.flex, styles.party, styles.blue3]}>
//                    <Text style={styles.txt}>עבודה</Text>
//                </View>

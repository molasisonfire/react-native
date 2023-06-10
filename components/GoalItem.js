import { StyleSheet, View, Text, Pressable } from "react-native";


function GoalItem(props){

    return (
    <View style={styles.goalItem}>
    <Pressable style={({pressed}) => pressed && styles.pressedItem } android_ripple={{color: '#dddddd'}}  onPress={props.onDeleteItem.bind(this,props.id)}>
                <Text style={styles.goalText}> {props.text} </Text>
    </Pressable>
    </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'rgba(255, 0, 255, 1.0)'
    },
    pressedItem:{
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: 'white'
    }
    
});
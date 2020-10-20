import React, { useReducer } from 'react'

import { View, Button, Text, StyleSheet } from 'react-native';

const counterScreen = () => {


    const INCREMENT_AMOUNT = 1
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase_counter':
                return { ...state, count: state.count + action.payload }
            case 'decrease_counter':
                return { ...state, count: state.count - action.payload }
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return (
        <View>
            <Button title="Increase Counter" onPress={() => {
                dispatch({ type: 'increase_counter', payload: INCREMENT_AMOUNT });
            }}></Button>
            <Button title="Decrease Counter" onPress={() => {
                dispatch({ type: 'decrease_counter', payload: INCREMENT_AMOUNT });

            }}></Button>
            <Text>Current Count: {count} </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default counterScreen;
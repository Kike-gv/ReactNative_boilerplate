import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';

const HomeScreen = ({ navigation }) => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Una pagina home</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 16, paddingRight: 16 }}
                placeholder='Escribe algo para que redux lo actualize'
                onChangeText={(text) => dispatch(actualizeInputValue(text))}
                value={actualizeInput}
            />
            <Text>Texto que modifico con Redux</Text>
            <Text>{actualizeInput}</Text>
            <TouchableOpacity onPress={() => {
                // navigation.navigate('Detalle Promociones', props); el props sustiruirlo por la prop que quieras
                navigation.navigate('Detalle');
            }
            }>
                <Text>Si clicas aqui vas al StackRouter</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
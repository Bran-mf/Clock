import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Days, T_Days } from '../../Config/Days';
import { Days_label } from '../../Entities/Texts/Days';
import useModal from '../../Hooks/useModal';
import { CreateAlarStyles } from './styles';


const CreateAlarmPanel = () => {
    // console.log('Week_days', Week_days);
    const { modalIsOpen, setModalIsOpen } = useModal();

    const handleToggleWindow = () => {
        console.log('working');
    };
    return (
        <View style={CreateAlarStyles.rootContainer}>
            {Object.values(Days).map((day: T_Days) => (
                <Text key={day}>{Days_label[day]}</Text>
            ))}
            <Button title='Close Alarm' onPress={() => setModalIsOpen(false)} />
        </View>
    );
};

export default CreateAlarmPanel;

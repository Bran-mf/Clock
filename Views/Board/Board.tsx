import React, { useState } from 'react';
import { Button, FlatList, Modal, SafeAreaView, SafeAreaViewBase, View, VirtualizedList } from 'react-native';
import AlarmItem from '../../Components/AlarmItem/AlarmItem';
import CreateAlarmPanel from '../../Components/CrateAlarmPanel/CreateAlarmPanel';
import useModal from '../../Hooks/useModal';
import {BoardStyles} from './Styles';


console.log('BoardStyles :>> ', BoardStyles);
const Board = () => {
    const [alarms, setAlarms] = useState([1, 2, 3, 4]);
    const { modalIsOpen, setModalIsOpen } = useModal();

    return (
        <View style={BoardStyles.board}>
            {/* <SafeAreaView> */}
                <FlatList data={alarms} renderItem={AlarmItem } />

                <View style={BoardStyles.createAlarmButton}>
                    <Button title='+Create Alarm' onPress={() => setModalIsOpen(true)} />
                </View>
                <Modal
                    animationType='fade'
                    // transparent={true}
                    visible={modalIsOpen}
                    // onRequestClose={() => {
                    //     Alert.alert('Modal has been closed.');
                    //     setModalVisible(!modalVisible);
                    // }}
                >
                    <CreateAlarmPanel />
                </Modal>
            {/* </SafeAreaView> */}
        </View>
    );
};

export default Board;

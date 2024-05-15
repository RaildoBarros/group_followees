import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { getGroups } from '@/services/api.service';

const data = [
    { name: 'Item 1', value: '1' },
    { name: 'Item 2', value: '2' },
    { name: 'Item 3', value: '3' },
    { name: 'Item 4', value: '4' },
    { name: 'Item 5', value: '5' },
    { name: 'Item 6', value: '6' },
    { name: 'Item 7', value: '7' },
    { name: 'Item 8', value: '8' },
];


const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    const [groups, setGroups] = useState([]);

    const loadGroups = async () => {
        try {
            const groups = await getGroups();
            console.log(groups);
            setGroups(groups);
        } catch (error) {
            console.error('Erro ao pegar os grupos:', error);
        } finally {
            console.log("Busca finalizada.")
        }
    };

    useEffect(() => {
        loadGroups();
    }, []);


    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={groups}
            search
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.id);
            }}
            renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
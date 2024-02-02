import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import AlertIcon from "../icons/AlertIcon";
import { colors } from "../../../styles/globals";

const ModalComponent = ({ handleModal, visibleModal, handleRemoveItem, selectedItem }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visibleModal}
            onRequestClose={handleModal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <AlertIcon style={styles.alertIcon} />
                    <Text style={styles.modalText}>
                        ¿Estás seguyro que deseas eliminar el producto {selectedItem}?
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleModal}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleRemoveItem(selectedItem)}>
                            <Text style={styles.textStyle}>Sí, Eliminar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalComponent;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.whiteColor,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    alertIcon: {
        width: 50,
        height: 50,
        color: colors.pinkColor,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 50,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: colors.pinkColor,
    },
    textStyle: {
        color: colors.whiteColor,
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

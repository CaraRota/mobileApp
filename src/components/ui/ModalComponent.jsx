import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";

const ModalComponent = ({ handleModal, visibleModal, handleRemoveItem, selectedItem }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visibleModal}
            onRequestClose={handleModal}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>¿Deseas eliminar este producto?</Text>
                    <View style={styles.buttonsContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleModal}>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleRemoveItem(selectedItem)}>
                            <Text style={styles.textStyle}>Eliminar</Text>
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
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 50,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: "#6883BA",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

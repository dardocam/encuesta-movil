import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import db from "../firebaseConfig"; // Asegúrate de que la ruta sea correcta
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const guardarDatos = async () => {
    if (nombre === "" || email === "" || telefono === "") {
      Alert.alert("Por favor, llena todos los campos.");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: nombre,
        email: email,
        telefono: telefono,
        creadoEn: serverTimestamp(),
      });

      Alert.alert("Datos guardados exitosamente");
      setNombre("");
      setEmail("");
      setTelefono("");
    } catch (error) {
      console.error(error);
      Alert.alert("Hubo un error al guardar los datos");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        keyboardType="phone-pad"
      />
      <Button title="Guardar Datos" onPress={guardarDatos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: 300,
  },
});

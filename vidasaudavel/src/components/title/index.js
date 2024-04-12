//Bloco de importaçâo de componentes
import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

//Esta é uma função de componente chamada Title
export default function Title(){
    //Essa função retorna uma estrutura de visualização contendo um texto com o título do aplicativo
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}
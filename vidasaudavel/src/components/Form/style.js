// Bloco de importação de componentes
import { StyleSheet } from "react-native";

// Define estilos para o componente Form utilizando StyleSheet
const styles = StyleSheet.create({
    // Estilos para o contêiner do formulário
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0, 
        backgroundColor: "#000000", 
        alignItems: "center", 
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        marginTop: 30, 
    },
    //Estilos para o formulário
    form: {
        width: "100%",
        height: "auto", 
        marginTop: 30,
        padding: 10,
    },
    // Estilos para os rótulos dos campos do formulário
    formLabel: {
        color: "#ffffff",
        fontSize: 18, 
        paddingLeft: 20, 
    },
    // Estilos para os campos de entrada de texto do formulário
    input: {
        width: "90%", 
        borderRadius: 50,
        backgroundColor: "#f6f6f6", 
        height: 40, 
        margin: 12,
        paddingLeft: 10, 
    },
    // Estilos para o texto do botão de cálculo
    textButtonCalculator: {
        fontSize: 20, 
        color: "#ffffff",
    },
    // Estilos para o botão de cálculo
    buttonCalculator: {
        borderRadius: 50, 
        alignItems: "center",
        justifyContent: "center",
        width: "90%", 
        backgroundColor: "#00ffc3", 
        paddingTop: 14, 
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    }
});

// Exporta a variável styles para ser usada em outros arquivos
export default styles;
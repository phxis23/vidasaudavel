//Bloco de importação de componentes
import { StyleSheet } from "react-native";

//Define estilos para componente ResultImc
const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width:"100%",
    },
    information:{
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
    },
    numberImc:{
        fontSize: 48,
        color: "#ffffff",
        fontWeight: "bold",
    }
});

//Exportação da variável styles
export default styles
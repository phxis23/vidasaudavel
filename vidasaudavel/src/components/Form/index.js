//Bloco de importação de componentes
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

//Essa função permite que a função form seja importada e usada em outros arquivos
export default function Form(){

    const[altura, setAltura] = useState(null)
    const[peso, setPeso] = useState(null)
    const[messageImc, setMessageImc] = useState("Preencha a altura e o peso!")
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")

    //Função que realiza o cálculo do imc recebendo o peso e a altura
    function imcCalculator(){
        return setImc ((peso/(altura*altura)).toFixed(2))
    }
    
    //Função que valida o imc de acordo com os valores recebidos de altura e peso
    function validationImc(){
        if(peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setMessageImc("Preencha a altura e peso: ")
        setTextButton("Calcular")
    }

    //Essa função retorna a estrutura do formulário do aplicativo
    return(
        <View style ={styles.formContext}>
            <View style ={styles.form}>
                <Text style ={styles.formLabel}>Altura</Text>
                <TextInput
                    style ={styles.input}
                    onChangeText = {setAltura} //Função para mudar o estado "altura" conforme o usuário digita
                    value = {altura} //Valor atual do campo de altura
                    placeholder = "Ex.: 1.75" //Texto para orientar o usuário
                    keyboardType="numeric" //Teclado númerico para entada de altura
                    />
                 <Text style ={styles.formLabel}>Peso</Text>
                <TextInput
                    style ={styles.input}
                    onChangeText = {setPeso} //Função para mudar o estado "peso" conforme o usuário digita
                    value = {peso} ////Valor atual do campo de altura
                    placeholder = "Ex.: 75.365" //Texto para orientar o usuário
                    keyboardType="numeric" //Teclado númerico para entrada de altura
                    />
                    <TouchableOpacity //Botão para calcular o IMC
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc() //Função para validar e calcular o IMC
                        }}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc = {imc}/>
        </View>
    );
}
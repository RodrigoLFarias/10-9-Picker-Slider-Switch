import { StyleSheet, Text, View, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function App() {
  const [value, setValue] = useState(0);
  const [valor, setValor] = useState(0);
  const [val, setVal] = useState(false);
  console.log(value);

  const pizzas = [
    { id: 1, nome: "Calabresa", valor: 35.00 },
    { id: 2, nome: "Portuguesa", valor: 50.00 },
    { id: 3, nome: "Brigadeiro", valor: 100.00 },
    { id: 4, nome: "Frango com catupiry", valor: 40.00 },
  ];

  let pizzasItem = pizzas.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menu Pizza:</Text>

      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        style={styles.picker}
      >
        {pizzasItem}
      </Picker>

      <Text style={styles.texto}>Sabor escolhido: {pizzas[value].nome}</Text>
      <Text style={styles.texto}>R$: {pizzas[value].valor}</Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorselecionado) => setValor(valorselecionado)}
      />

      <Text>O valor é: {valor.toFixed(0)}</Text>

      <Switch
        value={val}
        onValueChange={(valorswitch) => setVal(valorswitch)}
        thumbColor={'red'}
        trackColor={{ false: 'blue', true: 'green' }}
      />

      {/* <Text>O valor é: {val ? 'Ligado' : 'Desligado'}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
    color: 'yellow',
    fontFamily: 'Sans-Serif',
  },
  texto: {
    fontSize: 21,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: 'red',
  },
  picker: {
    height: 50,
    width: '80%',
    alignSelf: 'center',
  },
});

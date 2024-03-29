import React from 'react';
import { Text, View, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  cabecera: {
    paddingBottom:15,
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },blockStandar:{
    flexDirection: 'column',
    width: '100%',
  },text:{
    fontSize: 12,
  },textResaltado:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  }
});

export const DataCliente = (props) => {
  return (
    <View style={styles.cabecera}>
        <View style={styles.blockStandar}>
            <Text style={styles.textResaltado}>{props.data?.tipo_venta}</Text>
              <View>
                <Text style={styles.text}>Cliente: </Text>
                <Text style={styles.text}>{props.data?.nombre_receptor}</Text>
                <Text style={styles.text}>Número de Cliente: {props.data?.numero_de_cliente}</Text>
              </View>
            <Text style={styles.text}>{props.data?.localidad}</Text>
            <Text style={styles.text}>{props.data?.medio_de_pago}</Text>
        </View>
    </View>
  );
}
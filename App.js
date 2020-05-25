import React from 'react';
import { SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';


const App= () => {
  
  addEntry = () =>{
    alert('Testando...')
  }

  return (
    <View>
      <Text style={{fontSize:20, fontWeight:'bold', marginTop:10, marginBottom:10}}>Saldo: $2.102,45</Text>
      <Button 
      onPress={addEntry}
      title='Adcionar'/>

      <Text style={{fontSize:20, fontWeight:'bold', marginTop:10, marginBottom:10}}>
        Categorias
      </Text>
      <FlatList data={[
        {key:'Alimentação: $200'},
        {key: 'Combustível: $12'},
        {key: 'Aluguel: $120'},
        {key: 'Lazer: $250'},
        {key: 'Outros: $1200'},
        {key: 'Games: $400'}
      ]}
    renderItem={({item})=> <Text>{item.key}</Text>} 
      >  
      </FlatList>

      <Text style={{fontSize:20, fontWeight:'bold', marginTop:10, marginBottom:10}}>
        Últimos Lançamentos
      </Text>
      <FlatList data={[
        {key:'Padaria Asa Branca: $10'},
        {key: 'Supermercado Isadora: $190'},
        {key: 'Posto Ipiranga: $190'},
        
      ]}
    renderItem={({item})=> <Text>{item.key}</Text>} 
      >  
      </FlatList>
      
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
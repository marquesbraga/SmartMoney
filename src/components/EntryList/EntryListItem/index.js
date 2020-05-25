import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const EntryListItem = () => {
    return (
        <View>
            <Text style={styles.title}>
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
    )
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
    },
    title:{
        fontSize:20, 
        fontWeight:'bold', 
        marginTop:10, 
        marginBottom:10
    }
})

export default EntryListItem;

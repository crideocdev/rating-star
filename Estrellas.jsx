import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Icon } from 'react-native-elements';


const Estrellas = (props) => {
    
        return (
            <View>
                <Text>
                Calificacion:
                {
                    [... new Array(5)].map((star,index)=>{
                        return index <props.score ? <Icon name="star"/> : <Icon name="star-border"/>
                    })
                }
                </Text>
            </View>
        );
    
};

const styles = StyleSheet.create({})

export default Estrellas;

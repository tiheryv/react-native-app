import React, { useState, useEffect } from "react";
import { colors, fonts, padding } from "../_base"
import { TouchableHighlight, ActivityIndicator, View, FlatList, StyleSheet, Text, Alert } from 'react-native';

const url = "https://acamicaexample.herokuapp.com/books?category_id=0&_page=2&_limit=5";

const Category = () => {

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => {
                Alert.alert("oh snap!", "somenthing went wrong")
                throw error;
            })
            .finally(setLoading(false))
    }

    useEffect(() => {
        getData()

    }, [])

    // console.log(data)

    return (

        <View>
            {
                isLoading ? (
                    <Text> Cargando </Text>
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <TouchableHighlight
                                underlayColor={colors.primary}
                                onPress={(item) => console.log("item")}
                                style={styles.item}
                            >
                                <Text>
                                    {item.name}
                                </Text>
                            </TouchableHighlight>
                        )}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.secondary,
        padding: padding.sm,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: fonts.md,
    },
});

export default Category;
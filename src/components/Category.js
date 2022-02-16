import React, { useState, useEffect } from "react";
import { colors, fonts, padding } from "../_base"
import {
    TouchableHighlight,
    ActivityIndicator,
    View,
    FlatList,
    StyleSheet,
    Text,
    Alert
} from 'react-native';

import Loading from "./common/Loading";

// const url = "https://acamicaexample.herokuapp.com/categories";


const Category = () => {

    const [loading, setLoading] = useState(true)

    const [data, setData] = useState([])

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 3,
        noMore: false
    })

    const { page, limit, noMore } = pagination;

    const url = `https://acamicaexample.herokuapp.com/books?category_id=0&_page=${page}&_limit=${limit}`;

    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData([...data, data])
                setPagination({ noMore: data.length < limit })

            })
            .catch(error => {
                Alert.alert("oh snap!", "somenthing went wrong")
                throw error;
            })
            .finally(setLoading(false))
    }

    useEffect(() => {
        getData()

    }, [])

    const loadMore = (page, limit, loading) => {
        if (loading || noMore) return;
        setPagination({ page: page + 1 })
        getData()
    }
    return (

        <View>
            <Loading isLoading={loading} />
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) =>
                    <TouchableHighlight
                        underlayColor={colors.primary}
                        onPress={(item) => console.log("item")}
                        style={styles.item}
                    >
                        <Text>
                            {item.name}
                        </Text>
                    </TouchableHighlight>
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.01}
                ListFooterComponent={<Loading isLoading={loading} />}
            />

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
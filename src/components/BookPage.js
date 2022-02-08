import React from "react";
import { Text, View, StyleSheet, Button, Linking, Alert, Image } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

import { colors, padding, fonts } from "../_base"

const BookPage = (props) => {

    const handleBuy = () => {
        Linking.openURL(url)
            .catch(err => {
                Alert.alert("Ooops", "Something went wrong")
            })

    }

    const { image, author, description, url } = props;

    return (
        <View style={styles.bookContainer}>

            <View style={styles.headerContainer}>
                <View style={styles.bookImage}>
                    <Image
                        style={{ width: 60, height: 90 }}
                        source={{
                            uri: image
                        }}
                    />


                </View>
                <View style={styles.author}>
                    <Text>
                        by
                        <Text style={styles.authorText}> {author} </Text>
                    </Text>
                </View>
            </View>

            <View style={styles.bookDescriptionContainer}>
                <Text>
                    {description}
                </Text>
            </View>
            <View style={styles.bookButtonContainer}>
                <Button
                    title="Check on Amazon"
                    onPress={handleBuy} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookContainer: {
        flex: 1,
        alignSelf: "stretch",
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.primary,

    },
    bookDescriptionContainer: {
        flex: 3,
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.background,
    },
    bookButtonContainer: {
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,

    },
    bookImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    author: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22

    },
    authorText: {
        fontSize: fonts.lg
    }
})

export default BookPage;
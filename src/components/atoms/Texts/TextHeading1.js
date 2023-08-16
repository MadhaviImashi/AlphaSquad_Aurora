import React from "react";
import { Text } from "react-native";

export default function TextHeading1({value}) {
    return (
        <Text style={styles.Heading1}>{value}</Text>
    )
}

const styles = StyleSheet.create({
    Heading1: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'left',
    },
})
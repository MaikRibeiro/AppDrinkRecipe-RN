import { NavigationProp } from "@react-navigation/native";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { StackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";

type HomeProps = {
    navigation: NavigationProp<StackParamList>;
};

export const Home = ({ navigation }: HomeProps) => {
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handlePress = () => {
        console.warn("pressionou");
    };

    const fetchData = async () => {
        if (searchText.length === 0)
            return;

        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
            );

            const data = await response.json();
            console.warn(data);
        } catch (error) {
            setErrorMessage("Error ");
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 8 }}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Your drink name" 
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <Pressable onPress={fetchData}>
                        <Ionicons name="search" size={24} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
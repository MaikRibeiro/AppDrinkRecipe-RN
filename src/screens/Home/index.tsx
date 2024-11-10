import { NavigationProp } from "@react-navigation/native";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

type HomeProps = {
    navigation: NavigationProp<StackParamList>;
};

export const Home = ({ navigation }: HomeProps) => {
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [drinks, setDrinks] = useState<Drink[]>([]);

    const fetchData = async () => {
        if (searchText.length === 0)
            return;

        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
            );

            const data = await response.json();
            setDrinks(data.drinks);
        } catch (error) {
            setErrorMessage("Error on drinking search, try again later." + error);
        }
    }

    const clearSearchText = () => {
        setSearchText("");
        setDrinks([]);
        setErrorMessage("");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your drink name" 
                    value={searchText}
                    onChangeText={setSearchText}
                />
                {searchText.length > 0 && (
                    <Pressable style={styles.clearButton} onPress={clearSearchText}>
                        <Ionicons name="close-circle-outline" size={24} />
                    </Pressable>
                )}
                <Pressable onPress={fetchData}>
                    <Ionicons name="search" size={24} />
                </Pressable>
            </View>

            <FlatList
                data={drinks}
                keyExtractor={item => item.idDrink}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.drinkItemContainer}>
                        <Image 
                            source={{ uri: item.strDrinkThumb }} 
                            style={styles.drinkThumb}
                        />
                        <View>
                            <Text>{item.strDrink}</Text>
                            <Text>{item.strAlcoholic === "Alcoholic" ? "Alcoholic" : "Non-Alcoholic"}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};
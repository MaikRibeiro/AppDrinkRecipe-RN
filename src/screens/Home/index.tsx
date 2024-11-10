import { NavigationProp } from "@react-navigation/native";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useDrinks } from "../../hooks/useHooks";

type HomeProps = {
    navigation: NavigationProp<StackParamList>;
};

export const Home = ({ navigation }: HomeProps) => {
    const [searchText, setSearchText] = useState("");

    const { fetchDrinks, clear, drinks, error } = useDrinks();

    const clearSearchText = () => {
        setSearchText("");
        clear();
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
                <Pressable onPress={() => fetchDrinks(searchText)}>
                    <Ionicons name="search" size={24} />
                </Pressable>
            </View>

            {error && <Text style={styles.errorMessage}> {error} </Text> }

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
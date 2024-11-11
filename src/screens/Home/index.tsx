import { NavigationProp } from "@react-navigation/native";
import { ActivityIndicator,
         Image, 
         Pressable,
         SafeAreaView,
         Text,
         TextInput,
         Keyboard,
         TouchableOpacity,
         TouchableWithoutFeedback,
         View
        }  from "react-native"
import { StackParamList } from "../../routers";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useDrinks } from "../../hooks/useDrinks";

type HomeProps = {
    navigation: NavigationProp<StackParamList>;
};

export const Home = ({ navigation }: HomeProps) => {
    const [searchText, setSearchText] = useState("");
    const { fetchDrinks, clear, drinks, error, load, searchCompleted, setSearchCompleted } = useDrinks();

    const clearSearchText = () => {
        setSearchText("");
        clear();
    };

    const handleItemClick = (idDrink: string) => {
        navigation.navigate("Details", {
            drinkId: idDrink,
        });
    };

    const emptyComponent = () => {
        if (searchText.length === 0) {
            return (
                <View style={styles.containerEmptyList}>
                    <Text style={styles.textEmptyComponent}>Type something in the search box to find your drink!</Text>
                </View>
            );
        } else if (searchCompleted && !load && drinks.length === 0) {
            return (
                <View style={styles.containerEmptyList}>
                    <Text style={styles.textEmptyComponent}>
                        Oops! There's no data here!
                    </Text>
                </View>
            );
        }
        return null;
    };

    if (load) {
        return (
            <View style={styles.indicator}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your drink name"
                    placeholderTextColor="#FFF"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                {searchText.length > 0 && (
                    <Pressable style={styles.iconClearBtn} onPress={clearSearchText}>
                        <Ionicons style={styles.iconClose} name="close-circle-outline" size={26} />
                    </Pressable>
                )}
                <Pressable style={styles.iconSearchBtn} onPress={() => { fetchDrinks(searchText); Keyboard.dismiss()}}>
                    <Ionicons style={styles.iconSearch} name="chevron-forward-circle-outline" size={32} />
                </Pressable>
            </View>

            {error && <Text style={styles.errorMessage}> {error} </Text> }

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <FlatList
                    data={drinks}
                    keyExtractor={item => item.idDrink}
                    ListEmptyComponent={emptyComponent}
                    renderItem={({item}) => (
                        
                        <TouchableOpacity 
                            style={styles.drinkItemContainer} 
                            onPress={ ()=> handleItemClick(item.idDrink)}>
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
                    style={{ flex: 1}}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};
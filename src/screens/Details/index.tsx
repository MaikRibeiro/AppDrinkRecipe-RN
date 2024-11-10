import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native"

type DetailsScreenRoutesProps = RouteProp<
    { Details: { drinkId: string}},
    "Details"
>;

interface DetailsProp {
    route: DetailsScreenRoutesProps;
};

export const Details: React.FC<DetailsProp> = ({ route }) => {
    return (
        <View>
            <Text>{route.params.drinkId}</Text>
        </View>
    );
};
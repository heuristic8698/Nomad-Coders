import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Proptypes from "prop-types";

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>34º</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a MF</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "비와요",
        subtitle: "우산 깜빡하지 마세요",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "맑아요",
        subtitle: "비타민D 보충하러 나가요",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "우르릉쾅쾅",
        subtitle: "로또 1등 확률보다 벼락 맞을 확률이 높아요",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "구름",
        subtitle: "몽실몽실 뭉게뭉게",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "눈와요",
        subtitle: "개랑 아이들만 좋아해요",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "오랜만에 우비를 입어보고 싶지 않나요",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#D7D2CC", "#304352"],
        title: "안개",
        subtitle: "그라믄 안개",
        icon: "weather-fog"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "안개2",
        subtitle: "잠에서 안개",
        icon: "weather-fog"
    }
}

function Weather({ weatherName, temp }) {
    // Rain Clear Thunderstorm Clouds Snow Drizzle Haze Mist
    // console.log(weatherName);
    //const weatherNam = "Mist"
    return (
        <LinearGradient colors={weatherCases[weatherNamr].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: Proptypes.number.isRequired,
    weatherName: Proptypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
})
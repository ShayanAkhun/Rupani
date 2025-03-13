import React, { useState } from "react";
import { 
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useLoginAuthStore from "@/store/LoginStore";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    
    const navigation = useNavigation();
    const login = useLoginAuthStore((state) => state.login); 
    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }

        try {
            await login(email, password);
            router.replace("/(drawer)");
        } catch (error) {
            Alert.alert("Error", "Login failed. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Agah e Walidein!</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

           
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry={secureText}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    <Ionicons
                        name={secureText ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

           
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")}>
                    <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
    },
    subtitle: {
        color: "gray",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 15,
        width: "100%",
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
        marginLeft: 10,
    },
    forgotPassword: {
        color: "#007bff",
        alignSelf: "flex-end",
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: "#007bff",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    loginText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    signUpContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    signUpText: {
        color: "gray",
    },
    signUpLink: {
        color: "#007bff",
        fontWeight: "bold",
    },
});


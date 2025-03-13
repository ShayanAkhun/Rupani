import React, { useState } from "react";
import { 
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useSignUpAuthStore from "@/store/SignupStore";

export default function SignUpScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { register } = useSignUpAuthStore();
    const navigation = useNavigation();

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            Alert.alert("Error", "All fields are required.");
            return;
        }

        setLoading(true);

        try {
            await register(name, email, password);
            Alert.alert("Success", "Account created successfully!", [
                { 
                    text: "OK", 
                    onPress: () => navigation.reset({
                        index: 0,
                        routes: [{ name: "LoginScreen" }],
                    })
                }
            ]);
        } catch (error) {
            Alert.alert("Error", "Registration failed. Please try again.");
            console.error("Registration Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account to get started</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                />
            </View>

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
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity 
                style={[styles.signUpButton, loading && { opacity: 0.7 }]} 
                onPress={handleSignUp}
                disabled={loading}
            >
                <Text style={styles.signUpText}>{loading ? "Signing Up..." : "Sign Up"}</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.loginLink}>Login</Text>
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
    signUpButton: {
        backgroundColor: "#007bff",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    signUpText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    loginContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    loginText: {
        color: "gray",
    },
    loginLink: {
        color: "#007bff",
        fontWeight: "bold",
    },
});

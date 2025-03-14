import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Maternal = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Maternal Care 🌸</Text>
        <Text style={styles.headerSubtitle}>
          "A mother’s arms are made of tenderness, and children sleep soundly in them."  
          — Victor Hugo
        </Text>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Essential Tips for Mothers:</Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Eat Nutritious Foods</Text> - Ensure a balanced diet rich in vitamins.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Stay Hydrated</Text> - Drink plenty of water for recovery & milk production.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Get Enough Rest</Text> - Sleep is essential for healing & energy.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Emotional Well-being</Text> - Seek support & talk about your feelings.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Gentle Exercise</Text> - Light walks help with recovery & mood.</Text>
        </View>
      </View>

      
      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>
          "Motherhood: All love begins and ends there."  
          — Robert Browning
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF2F8", 
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    backgroundColor: "#DB2777",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  headerSubtitle: {
    color: "#FCE7F3",
    textAlign: "center",
    marginTop: 8,
    fontStyle: "italic",
  },
  card: {
    marginTop: 24,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
  },
  list: {
    marginTop: 12,
  },
  listItem: {
    color: "#4B5563",
    marginTop: 8,
  },
  boldText: {
    fontWeight: "bold",
  },
  quoteCard: {
    marginTop: 24,
    backgroundColor: "#EC4899",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  quoteText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default Maternal;

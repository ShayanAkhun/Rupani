import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Parental = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Parenting Advice 🌿</Text>
        <Text style={styles.headerSubtitle}>
          "Children learn more from what you are than what you teach."  
          — W.E.B. Du Bois
        </Text>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>5 Golden Rules of Parenting:</Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Lead by Example</Text> - Children imitate what they see.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Encourage Open Communication</Text> - Let kids express themselves.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Be Patient & Understanding</Text> - Every child is unique.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Teach by Actions, Not Just Words</Text> - Show love & respect.</Text>
          <Text style={styles.listItem}>✅ <Text style={styles.boldText}>Spend Quality Time</Text> - Create lifelong memories together.</Text>
        </View>
      </View>

      
      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>
          "A parent's love is whole no matter how many times divided."  
          — Robert Brault
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF6FF", 
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    backgroundColor: "#2563EB",
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
    color: "#D6E4FF",
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
    backgroundColor: "#3B82F6",
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

export default Parental;

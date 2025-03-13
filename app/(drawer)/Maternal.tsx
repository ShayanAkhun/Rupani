import React from "react";
import { View, Text, ScrollView } from "react-native";

const Maternal = () => {
  return (
    <ScrollView className="flex-1 bg-pink-50 px-4 py-6">
      
      <View className="bg-pink-600 p-6 rounded-xl shadow-lg">
        <Text className="text-white text-2xl font-bold text-center">
          Maternal Care 🌸
        </Text>
        <Text className="text-pink-100 text-center mt-2">
          "A mother’s arms are made of tenderness, and children sleep soundly in them."  
          — Victor Hugo
        </Text>
      </View>

     
      <View className="mt-6 bg-white p-5 rounded-lg shadow-md">
        <Text className="text-xl font-semibold text-gray-800">
          Essential Tips for Mothers:
        </Text>

        <View className="mt-3">
          <Text className="text-gray-700 mt-2">
            ✅ **Eat Nutritious Foods** - Ensure a balanced diet rich in vitamins.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Stay Hydrated** - Drink plenty of water for recovery & milk production.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Get Enough Rest** - Sleep is essential for healing & energy.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Emotional Well-being** - Seek support & talk about your feelings.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Gentle Exercise** - Light walks help with recovery & mood.  
          </Text>
        </View>
      </View>

      
      <View className="mt-6 bg-pink-500 p-4 rounded-lg shadow-lg">
        <Text className="text-white text-center text-lg">
          "Motherhood: All love begins and ends there."  
          — Robert Browning
        </Text>
      </View>
    </ScrollView>
  );
};

export default Maternal;

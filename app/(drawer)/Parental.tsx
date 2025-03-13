import React from "react";
import { View, Text, ScrollView } from "react-native";

const Parental = () => {
  return (
    <ScrollView className="flex-1 bg-blue-50 px-4 py-6">
      
      <View className="bg-blue-600 p-6 rounded-xl shadow-lg">
        <Text className="text-white text-2xl font-bold text-center">
          Parenting Advice 🌿
        </Text>
        <Text className="text-blue-100 text-center mt-2">
          "Children learn more from what you are than what you teach."  
          — W.E.B. Du Bois
        </Text>
      </View>

      
      <View className="mt-6 bg-white p-5 rounded-lg shadow-md">
        <Text className="text-xl font-semibold text-gray-800">
          5 Golden Rules of Parenting:
        </Text>

        <View className="mt-3">
          <Text className="text-gray-700 mt-2">
            ✅ **Lead by Example** - Children imitate what they see.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Encourage Open Communication** - Let kids express themselves.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Be Patient & Understanding** - Every child is unique.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Teach by Actions, Not Just Words** - Show love & respect.  
          </Text>
          <Text className="text-gray-700 mt-2">
            ✅ **Spend Quality Time** - Create lifelong memories together.  
          </Text>
        </View>
      </View>

     
      <View className="mt-6 bg-blue-500 p-4 rounded-lg shadow-lg">
        <Text className="text-white text-center text-lg">
          "A parent's love is whole no matter how many times divided."  
          — Robert Brault
        </Text>
      </View>
    </ScrollView>
  );
};

export default Parental;

import { post } from '@src/utils/axios';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import axios from "axios";
import { MMKV } from 'react-native-mmkv';
import { AppBar } from '@src/components';
import { useNavigation } from '@react-navigation/native';
const storage = new MMKV();

type Meal = {
  id: number;
  name: string;
  ingredients: string;
  quantity: string;
};

export default function MealLogger() {
  const navigation=useNavigation()
  const [ingredients, setIngredients] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [mealHistory, setMealHistory] = useState([]);

  // Load meal history from MMKV on app load
  useEffect(() => {
    const storedHistory = storage.getString("mealHistory");
    if (storedHistory) {
      setMealHistory(JSON.parse(storedHistory)); // Parse stored string
    }
  }, []);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://10.0.2.2:8000/predict", {
        ingredients: ingredients.split(",").map((item) => item.trim()),
        quantity: parseFloat(quantity),
      });

      console.log(response?.data);
      
      setPrediction(response.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  const handleSaveMeal = () => {
    if (!prediction) {
      Alert.alert("No Prediction", "Please get a prediction before saving the meal!");
      return;
    }

    const newMeal = {
      id: mealHistory.length + 1,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      quantity,
      ...prediction,
    };

    
    const updatedHistory = [...mealHistory, newMeal];
    setMealHistory(updatedHistory);
    storage.set("mealHistory", JSON.stringify(updatedHistory)); // Save to MMKV

    Alert.alert("Meal Saved", "Your meal has been saved successfully!");

    // Clear inputs
    setIngredients("");
    setQuantity("");
    setPrediction(null);
  };


  return (
    <View style={styles.container}>

      <AppBar title='back' icon='home' onPress={
        ()=>navigation.goBack()
      }/>
      
      <Text style={styles.header}>Log Your Meal</Text>
     
      <TextInput
        style={styles.input}
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity (e.g., grams)"
        value={quantity}
        onChangeText={setQuantity}
      />
      <Button title="Get Prediction" onPress={handlePredict} />
      
      {prediction && (
        <View>
          <Text>Calories: {parseFloat(prediction?.calories).toFixed(2)}</Text>
          <Text>Protein: {parseFloat(prediction?.protein).toFixed(2)} g</Text>
          <Text>Fat: {parseFloat(prediction?.fat).toFixed(2)} g</Text>
          <Text>Carbs: {parseFloat(prediction?.carbs).toFixed(2)} g</Text>
          <Button title="Save Meal" onPress={handleSaveMeal} />
        </View>
      )}

      <Text style={styles.header}>Meal History</Text>
      <FlatList
        data={mealHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5 }}>
            <Text>Meal #{item.id}</Text>
            <Text>Ingredients: {item.ingredients.join(", ")}</Text>
            <Text>Quantity: {parseFloat(item.quantity).toFixed(2)} g</Text>
            <Text>Calories: {parseFloat(item.calories).toFixed(2)}</Text>
            <Text>Protein: {parseFloat(item.protein).toFixed(2)} g</Text>
            <Text>Fat: {parseFloat(item.fat).toFixed(2)} g</Text>
            <Text>Carbs: {parseFloat(item.carbs).toFixed(2)} g</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  mealItem: {
    padding: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
});
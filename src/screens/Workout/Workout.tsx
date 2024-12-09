import React, { useState, useEffect } from "react";
import { ScrollView, Alert, Button, View } from "react-native";
import { AppBar, WorkOutCard } from "@src/components";
import { MainLayout, Text } from "@src/wrappers";
import { useWorkoutData } from "@src/store/useWorkout";

// styles
import styles from "./Workout.styles";
import assets from "@src/assets";

const Workout = () => {
  const { workout } = useWorkoutData();

  const [choice, setChoice] = useState(null); 
  const [timer, setTimer] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [completed, setCompleted] = useState(false); 
  const backgroundColors = [
    "#b9e5ff",
    "#bfe9d4",
    "#ffe9cc",
    "#ffd1dc",
    "#e9c2ff",
  ];

  const isSelected = (item) => choice?.id === item.id;

  // Timer Logic
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 60000); 
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      setCompleted(true);
      Alert.alert("Workout Complete", "You finished this workout. Please choose another one.");
    }
    return () => clearInterval(interval);
  }, [timer, isRunning]);

  const handleWorkoutSelect = (wk) => {
    if (completed) {
      Alert.alert("Workout in Progress", "You can only choose a new workout after completing the current one.");
      return;
    }

    setChoice(wk);
    setTimer(wk.duration); 
    setIsRunning(true); 
    setCompleted(false); 
  };

  const handlePauseResume = () => {
    setIsRunning((prev) => !prev); 
  };

  return (
    <MainLayout>
      <AppBar title="Workout" />
      <Text style={styles.title}>You can choose one activity for today</Text>
      <ScrollView>
        {workout?.recommendations?.map((wk, i) => (
          <WorkOutCard
            key={i}
            title={wk.title}
            image={wk.image || assets.walk} 
            time={isSelected(wk) && timer > 0 ? timer : wk.duration} 
            backgroundColor={backgroundColors[i % backgroundColors.length]}
            opacity={isSelected(wk) && timer > 0 ? 1 : 0.5} 
            onPress={() => handleWorkoutSelect(wk)}
          />
        ))}
      </ScrollView>

      {/* Pause/Resume Button
      {choice && (
        <View style={styles.controls}>
          <Button
            title={isRunning ? "Pause" : "Resume"}
            onPress={handlePauseResume}
          />
        </View>
      )} */}

      {completed && (
        <Text style={styles.message}>You finished this workout. Please choose another one.</Text>
      )}
    </MainLayout>
  );
};

export default Workout;
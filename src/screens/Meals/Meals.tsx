import { ScrollView } from "react-native";

import { AppBar, MealsCard } from "@src/components";
import { MainLayout, Text } from "@src/wrappers";

//styles
import assets from "@src/assets";
import styles from "./Meals.styles";
const workout = [
  {
    title: "Breakfast",
    time: "42",
    subtitle: "greek yogurt with chopped apples and a splash of maple syrup",

    calories: "240 Kcal",
    backgroundColor: "#b9e5ff",
    image: assets.breakFast,
  },
  {
    title: "Lunch",
    time: "15",
    backgroundColor: "#bfe9d4",
    image: assets.lunch,
    subtitle: "One serving of avocado Egg Salad",
    calories: "240 Kcal",
  },
  {
    title: "Dinner",
    time: "30",
    backgroundColor: "#ffe9cc",
    image: assets.dinner,
    subtitle:
      "Grilled chicken breast with brown rice, spinach, broccoli, asparagus",
    calories: "240 Kcal",
  },
];
const Meals = () => {
  return (
    <MainLayout>
      <AppBar title="Meals" />
      <Text style={styles.title}>Recommendation for today</Text>
      <ScrollView>
        {workout.map((wk, i) => (
          <MealsCard
            key={i}
            title={wk.title}
            image={wk.image}
            time={wk.time}
            calories={wk.calories}
            subtitle={wk.subtitle}
            backgroundColor={wk.backgroundColor}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

export default Meals;

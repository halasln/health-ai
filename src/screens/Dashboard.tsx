import assets from "@src/assets";
import { AppBar, SummaryCard, TodayGoalCard } from "@src/components";
import { mainStyles } from "@src/constants";
import * as axios from "@src/utils/axios";
import { MainLayout, Text, View } from "@src/wrappers";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const info = useSelector((state) => state.info.value);

  const summary = [
    {
      image: assets.workout,
      imageBackground: "#FCE4D1",
      progressColor: "#F07416",
      title: "Your daily workouts",
      subtitle: "You just need 2 steps to finish",
      progress: 75,
    },
    {
      image: assets.walk,
      imageBackground: "#CCF2FE",
      progressColor: "#00C4FF",
      title: "Walking Steps",
      subtitle: "2000 steps a day",
      progress: 90,
    },
    {
      image: assets.meal,
      imageBackground: "#FFF1FE",
      progressColor: "#FF64BD",
      title: "Your meals",
      subtitle: "Calculate your calories",
      progress: 65,
    },
  ];

  useEffect(() => {
    console.log("gi", info);
    let data = new FormData();
    data.append("userDara", info);
    axios
      .post("/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <MainLayout>
      <View>
        <AppBar title="Dashboard" />
      </View>

      <ScrollView style={mainStyles.mt10}>
        <TodayGoalCard />

        {/* summary */}
        <Text style={mainStyles.mb10} bold>
          Summary
        </Text>
        {summary.map((item, i) => (
          <SummaryCard
            key={i}
            image={item.image}
            imageBackground={item.imageBackground}
            title={item?.title}
            subtitle={item?.subtitle}
            progress={item?.progress}
            progressColor={item?.progressColor}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
};

export default Dashboard;

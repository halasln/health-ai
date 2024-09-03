import { useEffect, useState } from "react";

import { Title } from "@health/components";
import { Pressable, Text, View } from "@health/wrappers";

//styles
import mainStyles from "@health/constants/styles";
import { setInfo } from "@health/redux/info";
import { useDispatch, useSelector } from "react-redux";
import styles from "./View7.styles";

const View7 = () => {
  const [goal, setGoal] = useState(info?.goal);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info.value);

  useEffect(() => {
    dispatch(setInfo({ goal: goal }));
    console.log(goal);
  }, [goal]);

  const data = [
    {
      id: 1,
      title: "Keep weight",
      subtitle: "Tone up & feel healthy",
    },
    {
      id: 2,
      title: "Gain muscle",
      subtitle: "Build mass & strength",
    },
    {
      id: 3,
      title: "Lose weight",
      subtitle: "Get motivated & enerfized",
    },
  ];

  const isSelected = (item) => {
    return goal?.id == item.id;
  };
  return (
    <View>
      <Title
        title="What's your goal ?"
        subtitle="Knowning your goal will lead to develop a better program"
      />

      <View style={mainStyles.mt20}>
        {data &&
          data.map((goal, index) => {
            return (
              <Pressable
                style={[
                  styles.goalcard,
                  {
                    borderWidth: isSelected(goal) ? 1 : 0,
                    borderColor: isSelected(goal) ? "green" : "white",
                  },
                ]}
                key={index}
                onPress={(isChecked) => {
                  if (isChecked) {
                    setGoal(goal);
                  }
                }}
              >
                <Text style={styles.title}>{goal.title}</Text>
                <Text style={styles.subtitle}>{goal.subtitle}</Text>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
};

export default View7;

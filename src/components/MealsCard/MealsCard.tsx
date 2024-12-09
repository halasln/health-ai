import mainStyles from '@src/constants/styles';
import {Text, View} from '@src/wrappers';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

interface MealsCardProps {
  image: any;
  calories: string;
  imageBackground: string;
  title: string;
  subtitle: string;
}

const MealsCard: React.FC<MealsCardProps> = ({
  image,
  calories,
  imageBackground,
  title,
  subtitle,
}) => {
  return (
    <View style={styles.mealsCard}>
      <View style={mainStyles.rowCenterY}>
        <View
          style={[styles.imageContainer, {backgroundColor: imageBackground}]}>
          <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.calories}>{calories}</Text>
        </View>
      </View>
    </View>
  );
};

export default MealsCard;

const styles = StyleSheet.create({
  mealsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 200,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    flexShrink: 1,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#A19B9B',
  },
  calories: {
    fontSize: 14,
    color: '#000',
  },
});

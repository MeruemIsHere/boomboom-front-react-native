import React from "react";
import { Gender } from "../services/UserService/userServiceI";
import useEStyles from "../hooks/useEStyles";
import { View } from "../../components/Themed";
import { GenderButton } from "./Buttons/GenderButton";
import { IconName } from "./Icons/IconName";

type GenderSelectorProps = {
  selectedGender: Gender;
  setSelectedGender: React.Dispatch<React.SetStateAction<Gender>>;
};

export default function GenderSelector({
  selectedGender,
  setSelectedGender,
}: GenderSelectorProps) {
  const isSelectedGender = (gender: Gender) => selectedGender === gender;

  const styles = useEStyles({
    selectGenderContainer: {
      flexDirection: "row",
      paddingTop: "$spacer3",
      justifyContent: "space-between",
    },
  });
  return (
    <View style={styles.selectGenderContainer}>
      <GenderButton
        gender={Gender.MALE}
        onPress={() => setSelectedGender(Gender.MALE)}
        isSelected={isSelectedGender(Gender.MALE)}
        iconName={IconName.MALE_GENDER}
      />
      <GenderButton
        gender={Gender.FEMALE}
        onPress={() => setSelectedGender(Gender.FEMALE)}
        isSelected={isSelectedGender(Gender.FEMALE)}
        iconName={IconName.FEMALE_GENDER}
      />
      <GenderButton
        gender={Gender.NO_SPECIFIC}
        onPress={() => setSelectedGender(Gender.NO_SPECIFIC)}
        isSelected={isSelectedGender(Gender.NO_SPECIFIC)}
        iconName={IconName.NO_SPECIFIC_GENDER}
      />
    </View>
  );
}
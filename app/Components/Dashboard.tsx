import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Icon } from "react-native-paper";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import PModal from "../CustomModal/PackageModal";
import PackageContent from "../CustomModal/PackageContent";

const Dashboard = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <View className="w-[100%] h-[100%] pb-[25%] bg-[#ebeaea] justify-center items-center">
      <LinearGradient
        colors={["#C0091E", "#69252e"]}
        style={{
          position: "absolute",
          left: -85,
          borderWidth: 0,
          width: "140%",
          right: 0,
          top: 0,
          height: "27.5%",
        }}
      />
      <View className="flex-row  w-[80%] mt-[15%] items-center justify-between">
        <Text className="text-[20px] font-bold text-[#ffffff]">
          <Text className="font-black text-[18px] text-[#ffffff]">Name:</Text>{" "}
          Anas Sarkiz
        </Text>
        <Text className="text-[20px] font-bold text-[#329737]">
          <Text className="font-black text-[18px] text-[#fffefe] ">
            Status:
          </Text>
          Active
        </Text>
      </View>
      <View className="w-[100%] mt-[5%] h-[65%]  rounded-3xl overflow-hidden   justify-center items-center">
        <View className=" h-[13%] w-full bg-transparent  justify-around items-center flex-row">
          <Text className="text-white text-start ml-3 text-[30px] font-bold">
            Your Internet Usage
          </Text>
          <Icon size={35} source="wifi-sync" color="#fff"></Icon>
        </View>
        <PModal inOpen={ModalOpen} setModalOpen={setModalOpen}>
          <PackageContent setModalOpen={setModalOpen} />
        </PModal>
        <View className=" h-[87%] w-[100%]  bg-[#fffcfc] justify-center items-center">
          <View className="h-[35%] w-full items-center justify-center flex-row ">
            <View
              className="  h-[80%] shadow-2xl text-start w-[43%] items-center
               rounded-2xl bg-[#e2e2e2]  m-[8] "
            >
              <View className="w-[80%]  items-start ml-[2%]">
                <Text className="text-[18px] mt-[20%] text-start font-bold text-[#6e6c6c] ">
                  Data{"    \n"}Consumed
                </Text>

                <Text
                  style={{ fontWeight: "900", fontVariant: ["small-caps"] }}
                  className="text-[25px] mt-[9%] text-center  text-[#331919]"
                >
                  12.014 GB
                </Text>
              </View>
              <View className="w-[20%] absolute top-[23%] right-[8%] items-center">
                <Icon size={35} source="chart-line" color="#b00909"></Icon>
              </View>
            </View>
            <View
              className="  h-[80%] shadow-2xl text-start w-[43%] items-center
               rounded-2xl bg-[#e2e2e2]  m-[8] "
            >
              <View className="w-[80%]  items-start ml-[2%]">
                <Text className="text-[18px] mt-[20%] text-start font-bold text-[#6e6c6c] ">
                  Remaining{"    \n"}Data
                </Text>

                <Text
                  style={{ fontWeight: "900", fontVariant: ["small-caps"] }}
                  className="text-[25px] mt-[9%] text-center  text-[#331919]"
                >
                  7.986 GB
                </Text>
              </View>
              <View className="w-[20%] absolute top-[23%] right-[8%] items-center">
                <Icon size={35} source="chart-donut" color="#b00909"></Icon>
              </View>
            </View>
          </View>
          <View className="font-bold  shadow-2xl h-[25%]  rounded-2xl bg-[#e2e2e2] w-[90%]  m-[8]">
            <Text className="text-[20px] ml-[8%] mt-5 text-start font-bold text-[#6e6c6c] ">
              Expiration Date
            </Text>
            <Text
              style={{ fontWeight: "900", fontVariant: ["small-caps"] }}
              className="text-[32px] mt-[3%] text-left ml-[8%]  text-[#331919]"
            >
              12/12/2024
            </Text>
            <View className="absolute top-[25%] right-[5%] items-center">
              <Icon size={45} source="calendar" color="#b00909"></Icon>
            </View>
          </View>
          <View className="font-bold  shadow-2xl h-[25%]  rounded-2xl bg-[#e2e2e2] w-[90%]  m-[8]">
            <Text className="text-[20px] ml-[8%] mt-5 text-start font-bold text-[#6e6c6c] ">
              Package Name
            </Text>
            <Text
              style={{ fontWeight: "900", fontVariant: ["small-caps"] }}
              className="text-[32px] mt-[3%] text-left ml-[8%]  text-[#331919]"
            >
              Limited 1
            </Text>
            <View className="absolute top-[30%] right-[5%] items-center">
              <Icon size={45} source="package-variant" color="#b00909"></Icon>
            </View>
          </View>
        </View>
      </View>
      <Button
        style={stylesType.box}
        labelStyle={{ color: "white", width: "auto" }}
        icon="database-cog-outline"
        mode="contained"
        className="bg-[#b00909] text-white mt-[10%] w-[60%] rounded-3xl"
        onPress={() => setModalOpen(true)}
      >
        Data Plan
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOpacity: 0.7,
    shadowRadius: 1.3,
    shadowOffset: {
      height: 1.5,
      width: 1.5,
    },
  },
});
const stylesType: StyleSheet.NamedStyles<any> = styles;
export default Dashboard;

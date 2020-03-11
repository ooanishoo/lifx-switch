import React, { useState, useEffect } from "react";
import {
  Card,
  Title,
  Paragraph,
  Switch,
  Button,
  Surface
} from "react-native-paper";
import Slider from "react-native-slider";
import { View, StyleSheet, Text } from "react-native";

const TOKEN =
  "c9bd0dad561da70b8ad6bbfe3f0bc50b3dfce047b265526e8f5a659e40c7e1ff";
const toggleUrl = "https://api.lifx.com/v1/lights/all/toggle";
const brightnessUrl = "https://api.lifx.com/v1/lights/all/state";

const listUrl = "https://api.lifx.com/v1/lights/all";

async function listAllLights() {
  console.log("listing lights");
  let response = await fetch(listUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    }
  });
  let data = await response.json();
  console.log(data);
}

async function toggleLight() {
  let response = await fetch(toggleUrl, {
    method: "POST",
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + TOKEN,
      Accept: "application/json",
      "accept-encoding": "gzip, deflate"
    }
  });
  let data = await response.json();
  console.log(data);
}

async function changeBrightness() {
  let response = await fetch(brightnessUrl, {});
  let data = await response.json();
  console.log(data);
}

export default function Body() {
  const [mode, setMode] = useState(false);
  const [brightness, setBrightness] = useState(0.0);

  // async function changeBrightness(value) {
  //   console.log("changing brightness");
  //   let response = await fetch(brightnessUrl, {
  //     method: "PUT",
  //     headers: {
  //       Authorization: "Bearer " + TOKEN,
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       power: "on",
  //       brightness: { value }
  //     })
  //   });
  //   let data = await response.json();
  //   console.log(data);
  // }
  return (
    // <Card>
    //   <Card.Content>
    //     <Title>Light is {mode ? "On" : "Off"}</Title>
    //     <Paragraph>
    //       <Switch
    //         value={mode}
    //         onValueChange={value => {
    //           toggleLight();
    //           setMode(value);
    //         }}
    //       />
    //     </Paragraph>
    //     <Paragraph>
    //       <Button
    //         mode="contained"
    //         onPress={() => {
    //           console.log("hello");
    //           changeBrightness();
    //         }}
    //       >
    //         Fetch
    //       </Button>
    //     </Paragraph>
    //     <View>
    //       <Slider
    //         minimumValue={0}
    //         maximumValue={1}
    //         value={brightness}
    //         onValueChang={value => {
    //           console.log(value, "changing");
    //           setBrightness(value);
    //           //changeBrightness(value);
    //         }}
    //       />
    //     </View>
    //   </Card.Content>
    // </Card>
    <Surface style={styles.surface}>
      <Text>Surface</Text>
      <Button
        children="List Lights"
        mode="contained"
        onPress={() => listAllLights()}
      />
    </Surface>
    // <Card>
    //   <Card.Content>
    //     <Title>hello</Title>
    //   </Card.Content>
    // </Card>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    elevation: 4
  }
});

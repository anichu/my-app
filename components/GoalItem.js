import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ itemData, onDeleteHandler }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				style={({ pressed }) => pressed && styles.pressedStyle}
				onPress={() => onDeleteHandler(itemData.item.key)}
			>
				<View style={{ flex: 1 }}>
					<Text style={styles.itemText}>{itemData.item.text}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		backgroundColor: "#16537e",
		marginVertical: 5,
		color: "#ffffff",
		padding: 10,
		borderRadius: 10,
	},
	itemText: {
		color: "#ffffff",
	},
	pressedStyle: {
		color: "#dddddd",
	},
});

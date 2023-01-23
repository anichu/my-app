import React, { useState } from "react";
import {
	Button,
	TextInput,
	View,
	StyleSheet,
	Modal,
	Image,
} from "react-native";

const GoalInput = ({ submitHandler, visible, setModalIsVisible }) => {
	const [goal, setGoal] = useState("");

	function inputChangeHandler(value) {
		setGoal(value);
	}
	const addGoal = () => {
		submitHandler(goal);
		setGoal("");
	};
	return (
		<Modal visible={visible} style={styles.modalContainer} animationType="fade">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<View style={styles.inputTextContainer}>
					<TextInput
						style={styles.inputText}
						onChangeText={inputChangeHandler}
						placeholder="Your course goal"
						value={goal}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button onPress={addGoal} title="Add Goal" />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={() => setModalIsVisible(false)} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	modalContainer: {},
	inputContainer: {
		flex: 1,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#341f97",
	},
	inputText: {
		width: "100%",
		paddingHorizontal: 5,
		paddingVertical: 5,
		borderColor: "#dddddd",
		borderWidth: 1,
		borderRadius: 10,
	},
	inputTextContainer: {
		width: "100%",
	},
	inputMainContainer: {},
	image: {
		width: 100,
		height: 100,
		marginVertical: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		paddingVertical: 10,
	},
	button: {
		marginHorizontal: 5,
		marginVertical: 5,
	},
});

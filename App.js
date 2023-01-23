import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Button,
	ScrollView,
	Text,
	TextInput,
	View,
	FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function submitHandler(goal) {
		if (!goal) {
			return;
		}
		setGoals((current) => [
			...current,
			{ text: goal, key: Math.random().toString() },
		]);
		setModalIsVisible(false);
	}

	const onDeleteHandler = (key) => {
		const filetedGoals = goals.filter((goal) => goal.key !== key);
		setGoals(filetedGoals);
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.container}>
				<Button
					title="Add New Goal"
					onPress={() => setModalIsVisible(true)}
					color="#e34239"
				/>
				{modalIsVisible && (
					<GoalInput
						visible={modalIsVisible}
						setModalIsVisible={setModalIsVisible}
						submitHandler={submitHandler}
					></GoalInput>
				)}
				<Text style={styles.listText}>List of Goals</Text>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									onDeleteHandler={onDeleteHandler}
									itemData={itemData}
									setGoals={setGoals}
									goals={goals}
								></GoalItem>
							);
						}}
						keyExtractor={(item, index) => {
							return item.key;
						}}
						alwaysBounceVertical={false}
					></FlatList>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#341f97",
		padding: 40,
		marginTop: 10,
	},

	appContainer: {
		flex: 1,
	},
	goalsContainer: {
		flex: 10,
	},
	listText: {
		marginVertical: 5,
		backgroundColor: "#dddddd",
		padding: 10,
		borderRadius: 10,
	},
});

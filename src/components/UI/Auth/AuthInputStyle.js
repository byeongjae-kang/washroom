import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 350,
    marginBottom: 10,
    borderBottomColor: "rgba(107, 104, 255, 1)",
    borderBottomWidth: 1,
    borderRadius: 2,
    padding: 15,
    shadowRadius: 1.41,
    elevation: 0.1
  },
  input_invalid: {
    height: 50,
    width: 350,
    
    borderColor: "red",
    borderBottomWidth: 1,
    borderRadius: 2,
    padding: 15,
    shadowRadius: 1.41,
    elevation: 0.1
  },
  text_invalid: {
    fontSize: 10,
    color: "red",
    marginBottom: 2,
    paddingLeft: 15
  }
});

export default styles;

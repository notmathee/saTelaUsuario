import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  viewPerfil: {
    width: "80%",
    height: "45%",
    backgroundColor: "#dadfe5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  imagemUsuario: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 50,
    borderRadius: 8,
    padding: 15,
    margin: 5,
    fontSize: 18,
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#ced4da",
    borderWidth: 1,
  },
  viewButton: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  editar: {
    width: "40%",
    height: 50,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#5772e9",
    backgroundColor: "#5772e9",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deletar: {
    width: "40%",
    height: 50,
    borderWidth: 1,
    borderRadius: 35,
    borderColor: "#5772e9",
    backgroundColor: "#5772e9",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    color: "#fff",
  },
});
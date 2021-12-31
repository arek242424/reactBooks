export const getInputLabelObjectModel = () => {
    return {
        labeltext: "default label text",
        textValue: "",
        validator: {
            validate: (text) => { return true },
            errorMessage: ""
        }
    }
}

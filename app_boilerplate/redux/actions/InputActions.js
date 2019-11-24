const actualizeInputValue = (text) => {
    console.log("TCL: actualizeInputValue -> text", text)
    console.log('entro en las actions InputActions');
    return { type: 'ACTUALIZE_INPUT_VALUE',text }
}


export { actualizeInputValue }
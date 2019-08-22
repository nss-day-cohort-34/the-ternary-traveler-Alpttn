import factory from "./factory.js"

const dom = Object.create({
    renderPOIFormToDom: (poi) => {
        const poiFormContainer = document.querySelector("#form__container")
        poiFormContainer.innerHTML = factory.createPOIform(poi)
    },
});

export default dom;
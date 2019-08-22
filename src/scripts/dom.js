import factory from "./factory.js"

const dom = Object.create({
    renderPOIFormToDom: (poi) => {
        const poiFormContainer = document.querySelector("#form__container")
        poiFormContainer.innerHTML = factory.createPOIform(poi)
    },
    renderHTMLCardToDom: (interest) => {
        const interestContainer = document.querySelector(`#interests__container--${interest.placeId}`)
        interestContainer.innerHTML += factory.createIntrestComponent(interest)
    }
});

export default dom;
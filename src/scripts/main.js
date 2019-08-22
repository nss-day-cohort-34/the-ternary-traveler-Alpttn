// ==================== Import modules ====================
import data from "./data.js";
import factory from "./factory.js";
import dom from "./dom.js";

const displayInterests = () => {
    //  event handler on add poi button
    const addPOIButton = document.querySelector("#addPOI__button");
    // event listener for add new poi
    addPOIButton.addEventListener("click", event => {
        // render the add poi form when button is clicked
        dom.renderPOIFormToDom();
        // when sumbmit button is clicked
        const submitbutton = document.querySelector("#poi__form__submit")
        submitbutton.addEventListener("click", event => {
            const poiLocation = document.querySelector("#poiLocation__DropDown");
            const placeId = parseInt(poiLocation.options[poiLocation.selectedIndex].id);
            console.log("placeId:", placeId);
            const poiName = document.querySelector("#poiName");
            const poiDescription = document.querySelector("#poiDescription");
            const poiCost = document.querySelector("#poiCost");
            const poiReview = document.querySelector("#poiReview");
            const createPOIObj = factory.createPOIInputObj(
                placeId, poiName.value, poiDescription.value, poiCost.value, poiReview.value
            );
            console.log(createPOIObj)
            data.postNewInterest(createPOIObj)
        });
    });

}

displayInterests();

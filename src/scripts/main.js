// ==================== Import modules ====================
import data from "./data.js";
import factory from "./factory.js";
import dom from "./dom.js";

//  event handler on add poi button
const addPOIButton = document.querySelector("#addPOI__button");
// event listener for add new poi
addPOIButton.addEventListener("click", event => {
    // render the add poi form when button is clicked
    dom.renderPOIFormToDom();
});

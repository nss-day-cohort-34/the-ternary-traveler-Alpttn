// ==================== Import modules ====================
import data from "./data.js";
import factory from "./factory.js";
import dom from "./dom.js";

const saveNewInterests = () => {
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
                .then(() => {
                    displayAllInterests(placeId);
                    document.querySelector("#form__container").innerHTML = ""
                })
        },
        )
    });
}

// delete button event listener here
const DestinationsContainer = document.querySelector("#allDestinations__container");
DestinationsContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEvent--")) {
        const eventId = event.target.id.split("--")[1];
        data
            .getSingleInterest(eventId)
            .then(interestObj => {
                const placeId = interestObj.placeId;
                data.deleteInterest(interestObj.id).then(() => displayAllInterests(placeId))
            })
    }
});
//         .then(parsedEvents => {
//           const displayEventsContainer = document.querySelector(
//             "#display__events"
//           );
//           displayEventsContainer.innerHTML = "";
//           console.log("parsedEvents:", parsedEvents);
//           parsedEvents.forEach(event => {
//             displayEventsContainer.innerHTML += factory.createEventComponent(
//               event
//             );
//           });
//         });
//     }

const displayAllInterests = (placeId) => {
    data.getInterestsByPlace(placeId)
        .then(parsedInterests => {
            const clearContainer = document.querySelector(`#interests__container--${placeId}`)
            clearContainer.innerHTML = "";
            parsedInterests.forEach(interest => {
                dom.renderHTMLCardToDom(interest)
            });

        })
}

saveNewInterests();

displayAllInterests(1);
displayAllInterests(2);
displayAllInterests(3);
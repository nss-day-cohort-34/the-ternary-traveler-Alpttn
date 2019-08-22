const factory = Object.create({
    createPOIform: (interest) => {
        return `
        <section class="poi__form--section">
            <header class="poi__form--title">
                Point of Interest
            </header>
            <div class="poi--fieldsets">
                <input type="hidden" id="interestId" value="${interest ? interest.id : ""}" />
                     <select id="poiLocation__DropDown">
                        <option id="1" value="1">Italy</option>
                        <option id="2" value="2">Switzerland</option>
                        <option id="3" value="3">France</option>
                    </select>
                    <br><br>
                     Name: <input id="poiName" value="${interest ? interest.name : ""}" type="text" name="poiName" class="poi__form--input"><br>
                     Description: <input id="poiDescription" value="${interest ? interest.description : ""}" type="text" name="poiDescriotion" class="poi__form--input"><br>
                     Cost: <input id="poiCost" value="${interest ? interest.cost : ""}" type="text" name="poiCost" class="poi__form--input"><br>
                     Review: <textarea id="poiReview" value="${interest ? interest.review : ""}" rows="4" cols="50"></textarea>
                <button id="poi__form__submit">Submit</button>
            </div>
        </section>
    `
    },
    // function to create poi object
    createPOIInputObj: (LocationIdInput, nameInput, descriptionInput, costInput, reviewInput) => {
        return {
            placeId: LocationIdInput,
            name: nameInput,
            description: descriptionInput,
            cost: costInput,
            review: reviewInput,
        }
    },
    createIntrestComponent: (intrest) => {
        return `<section id="interest__card" class="interest__card">
    <h3>${intrest.name}</h3>
    <p>${intrest.description}</p>
    <p>${intrest.cost}</p>
    <p>${intrest.review}</p>
    <button id="deleteEvent--${intrest.id}">
        Delete interest
    </button>
    <button id="editEvent--${intrest.id}">
        Edit interest
    </button>
    </section>
    `;
  }

});
export default factory;
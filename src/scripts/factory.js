const factory = Object.create({
    createPOIform: (interest) => {
        return `
        <section class="poi__form--section">
            <header class="poi__form--title">
                Point of Interest
            </header>
            <div class="poi--fieldsets">
                <input type="hidden" id="interestId" value="${interest ? interest.id : ""}" />
                     Location: <input id="poiLocation" value="${interest ? interest.location : ""}" type="text" name="poiLocation" class="poi__form--input"><br>
                     Name: <input id="poiName" value="${interest ? interest.name : ""}" type="text" name="poiName" class="poi__form--input"><br>
                     description: <input id="poiDescription" value="${interest ? interest.description : ""}" type="text" name="poiDescriotion" class="poi__form--input"><br>
                     cost: <input id="poiCost" value="${interest ? interest.cost : ""}" type="text" name="poiCost" class="poi__form--input"><br>
                     review: <input id="poiReview" value="${interest ? interest.review : ""}" type="text" name="poiReview" class="poi__form--input"><br>
                <button id="poi__form__submit">Submit</button>
            </div>
        </section>
    `
    },
    // function to create poi object
    createPOIInputObj: (placeIdInput, nameInput, descriptionInput, costInput, reviewInput) => {
        return {
            placeId: placeIdInput,
            name: nameInput,
            description: descriptionInput,
            cost: costInput,
            review: reviewInput,
        }
    },

});
export default factory;
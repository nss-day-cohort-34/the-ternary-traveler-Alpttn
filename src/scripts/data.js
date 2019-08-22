const data = Object.create({
        postNewInterest: (interestObj) => {
          return fetch("http://localhost:3000/interests", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(interestObj)
          })
            .then(newInterest => newInterest.json())
        },
        getInterestsByPlace(placeId) {
            return fetch(`http://localhost:3000/interests?placeId=${placeId}`)
              .then(interests => interests.json())
            },
});

export default data;
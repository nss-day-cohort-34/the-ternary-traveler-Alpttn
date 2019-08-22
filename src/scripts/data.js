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
    deleteInterest(id) {
        return fetch(`http://localhost:3000/interests/${id}`, 
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(deletedInterest => deletedInterest.json())
    },
    getSingleInterest(id) {
        return fetch(`http://localhost:3000/interests/${id}`)
        .then(returnedInterest => returnedInterest.json())
    }
});

export default data;
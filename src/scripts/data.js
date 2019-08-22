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
        // deleteInterest: (id) => {
        //     return fetch(`http://localhost:8088/interests/${id}`, {
        //       method: "DELETE",
        //       headers: {
        //         "Content-Type": "application/json"
        //       },
        //     })
        //       .then(deletedInterest => deletedInterest.json())
        //   },
});

export default data;
const input = document.querySelector("input")
      const p = document.querySelector("p")

      function checkAge() {
        // get the age number
        const age = parseInt(input.value)

        // check the age
        let adult = false
        if (age > 17) {
          adult = true
        }

        // send the message
        if (adult) {
          p.innerText = "You are a adult!"
        } else {
          p.innerText = "Go back to your mom"
        }
      }
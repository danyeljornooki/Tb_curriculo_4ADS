var form = document.getElementById("my-form");
var msg = "꧁꧂ vc achou minha flor dklskdlksd D.";
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado pelo seu FeedBack!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! Parece que teve algum problema com o formulário"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Parece que teve algum problema com o formulário"
      });
    }

    console.log(msg)
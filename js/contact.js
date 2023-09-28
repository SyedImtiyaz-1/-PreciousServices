function sendMail() {
  const form = {
    first: document.getElementById("first").value,
    number: document.getElementById("number").value,
    mail: document.getElementById("mail").value,
    message: document.getElementById("message").value,
  };

  const s_id = "service_b1d1aw8";
  const t_id = "template_rfvuell";
  if (
    form.first === "" ||
    form.number === "" ||
    form.mail === "" ||
    form.message === ""
  ) {
    //alert("Fill up the Form First Then Try To Submit");
    document.getElementById("errorshown").innerText = "*Fill up the Form First";
  } else {
    emailjs.send(s_id, t_id, form).then((res) => {
      document.getElementById("first").value = "";
      document.getElementById("number").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("message").value = "";
      // alert("Submit Successfully! Our Team will Contact you Shortly!");
      document.getElementById("errorshown").innerText = "";
    });
  }
}

let subscribe = document.getElementById("subs");
let tval = document.getElementById("tval");
subscribe.addEventListener("click", () => {
  if (tval.value === "") {
    tval.value = "Enter Valid Email!";
  } else {
    alert("Thank You, We'll give you updates on time");
    tval.value = "";
  }
});

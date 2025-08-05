const form = document.querySelector("#form"); 

let comments = getCommentList() || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const bname = document.querySelector("#fname").value.trim();
  const lname = document.querySelector("#lname").value.trim();
  const comment = document.querySelector("#comment").value.trim();


  if (bname && lname && comment) {
    let info = {
      firstName: bname,
      lastName: lname,
      comment: comment
    };

    comments.push(info);

    const fullNames = comments.map(entry => `${entry.firstName} ${entry.lastName}`);

    localStorage.setItem("Comments", JSON.stringify(comments));

    form.reset();

    alert("Thank you so much for reaching out to us! " + fullNames[fullNames.length - 1] + ".");
  } else {
    alert("Please fill in all the fields before submitting the form.");
  }
});


function getCommentList() {
  return JSON.parse(localStorage.getItem("Comments"));
}

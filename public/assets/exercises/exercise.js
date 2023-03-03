async function getExDetails(id) {
  const res = await fetch(`/exercise/one/${id}`);
  const result = await res.json();
  return result.data;
}

async function getStatus() {
  const res = await fetch("/users/loginStatus");
  if (res.ok) {
    return true;
  } else {
    return false;
  }
}

function activateTilt() {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    glare: true,
    reverse: true,
    "max-glare": 0.5,
  });
}

function pleaseLogin() {
  Swal.fire("Please Log In :)");
}

function activateClickOnExs() {
  const exElems = document.querySelectorAll(".card");

  for (let exElem of exElems) {
    exElem.addEventListener("click", showVideo);
  }

  async function showVideo(event) {
    const id = event.currentTarget.id.split("-")[1];
    const ex = await getExDetails(id);
    const exName = ex.name.toUpperCase();
    const query = ex.name.split(" ").join("_");
    const video = ex.sample_video;
    const isLoggedIn = await getStatus();
    await Swal.fire({
      title: `${exName}`,
      html: `<video width="468" height="320" src="/ex_uploads/videos/${video}" controls autoplay></video>`,
      showCloseButton: true,
      confirmButtonText: "Just Do!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (isLoggedIn) {
          window.location.href = `do.html?exName=${query}`;
        } else {
          pleaseLogin();
        }
      }
    });
  }
}

function init() {
  // query selectors
  const exsList = document.querySelector("#exs-list");

  async function loadExs() {
    const res = await fetch("/exercise/all");
    const result = await res.json();
    const exercises = result.data;

    // refresh exercise-list
    await showExsPreview(exercises);

    activateTilt();
    activateClickOnExs();
  }

  async function showExsPreview(exercises) {
    // clear the list
    exsList.innerHTML = "";

    if (exercises.length === 0) {
      exsList.innerHTML = `<div class="not-found"> - No Results - </div>`;
    }

    // loop exercises
    for (let i = 0; i < exercises.length; i++) {
      const ex = exercises[i];
      const exID = ex.id;
      let cardNum;
      const exName = ex.name.toUpperCase();
      const lv = ex.level.charAt(0).toUpperCase() + ex.level.slice(1);
      if (lv === "High") {
        cardNum = 1;
      } else if (lv === "Mid") {
        cardNum = 2;
      } else {
        cardNum = 3;
      }

      // prepare html
      let htmlString = `
        <div class="card" id="ex-${exID}">
            <div class="card-image card${cardNum}" 
            style="
                background: url('/ex_uploads/thumbnails/${ex.thumbnail}');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;">
            </div>
            <div class="card-text card${cardNum}">
                <span class="date">${lv} Intensity</span>
                <h2>${exName}</h2>
                <p>${ex.details}</p>
            </div>
            <div class="card-stats card${cardNum}">
                <div class="stat right-border">
                <div class="value">${ex.calories}<sup>kJ</sup></div>
                <div class="type">Calories</div>
                </div>
                <div class="stat left-border">
                <div class="type">per</div>
                <div class="value">Repetition</div>
                </div>
            </div>
        </div>
        `;
      exsList.innerHTML += htmlString;
    }
  }
  loadExs();
}

init();

class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 1;
  }

  generateId() {
    return this.id++;
  }

  addActivity(title, description, imgUrl) {
    const id = this.generateId();
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  getActivities() {
    return this.activities;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

const repository = new Repository();

function createActivityCard(activity) {
  const { id, title, description, imgUrl } = activity;

  const cardDiv = document.createElement("div");
  const titleElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const imgElement = document.createElement("img");

  titleElement.innerHTML = title;
  descriptionElement.innerHTML = description;
  imgElement.src = imgUrl;

  cardDiv.classList.add("activity-card");
  titleElement.classList.add("activity-title");
  descriptionElement.classList.add("activity-description");
  imgElement.classList.add("activity-img");

  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(descriptionElement);

  return cardDiv;
}

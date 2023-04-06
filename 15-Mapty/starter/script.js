'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Architecture implementation

class Workout {
  date = new Date();
  id = new Date().getTime().toString();
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, long]
    this.distance = distance; //km
    this.duration = duration; //minutes
  }

  _setDescription() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {

  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    //Get user position
    this._getPosition();

    //Get data frm localStorage
    this._getLocalStorage();

    //attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    // check for older browsers
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
        alert('Could not get your position!');
      });
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    if (this.#workouts.length === 0) {
      this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    } else {
      this.#map = L.map('map').setView(this.#workouts[0].coords, this.#mapZoomLevel);
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    //Render saved workouts on map
    this.#workouts.forEach(workout => this._renderWorkoutMarker(workout));
  }

  _showForm(mapEvt) {
    this.#mapEvent = mapEvt;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validateInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const isPositives = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    //Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    //Data validation

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validateInputs(distance, duration, cadence)
        || !isPositives(distance, duration, cadence)
      ) {
        return alert(`Only positive numbers permitted!`);
      }

      //Create Running obj
      workout = new Running(
        Object.values(this.#mapEvent.latlng),
        distance,
        duration,
        cadence
      );
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (!validateInputs(distance, duration, elevation)
        || !isPositives(distance, duration)
      ) {
        return alert(`Only positive numbers permitted!`);
      }

      //Create Cycling obj
      workout = new Cycling(
        Object.values(this.#mapEvent.latlng),
        distance,
        duration,
        elevation
      );
    }

    //Add workout to array
    this.#workouts.push(workout);

    //Render workout on list
    this._renderWorkoutItem(workout);

    //Render workout on map
    this._renderWorkoutMarker(workout);

    //Hide form + Clear input fields
    this._hideForm();

    //Store workouts in local storage
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
  }

  _renderWorkoutItem(workout) {
    let workoutHtml = `
    <li class='workout workout--${workout.type}' data-id='${workout.id}'>
      <h2 class='workout__title'>${workout.description}</h2>
      <div class='workout__details'>
        <span class='workout__icon'>${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}
        </span>
        <span class='workout__value'>${workout.distance}</span>
        <span class='workout__unit'>km</span>
      </div>
      <div class='workout__details'>
        <span class='workout__icon'>⏱</span>
        <span class='workout__value'>${workout.duration}</span>
        <span class='workout__unit'>min</span>
      </div>
     `;

    if (workout.type === 'running') {
      workoutHtml +=
        `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
    }

    if (workout.type === 'cycling') {
      workoutHtml +=
        `<div class='workout__details'>
        <span class='workout__icon'>⚡️</span>
        <span class='workout__value'>${workout.speed.toFixed(1)}</span>
        <span class='workout__unit'>km/h</span>
      </div>
      <div class='workout__details'>
        <span class='workout__icon'>⛰</span>
        <span class='workout__value'>${workout.elevationGain}</span>
        <span class='workout__unit'>m</span>
      </div>
    </li>`;
    }

    form.insertAdjacentHTML('afterend', workoutHtml);
  }

  _hideForm() {
    form.style.display = 'none';
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    form.classList.add('hidden');
    setTimeout(() => form.style.display = 'grid', 1000);
  }

  _moveToPopup(e) {
    const workoutId = e.target.closest('.workout')?.dataset.id;
    if (!workoutId) return;

    const workout = this.#workouts.find(workout => workout.id === workoutId);
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1
      }
    });
    //use public interface
    workout.click();
    console.log(workout.clicks);
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem('workouts'));

    if (!savedData) return;
    this.#workouts = savedData;
    // object coming from local storage will lost inheritence, because not linked to class prototype
    //manually linked prototypes
    this.#workouts.forEach(w => w.__proto__ = Object.create(
      w.type === 'running' ? Running.prototype : Cycling.prototype
    ));
    this.#workouts.forEach(workout => this._renderWorkoutItem(workout));
    console.log(this.#workouts);
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

// init App
const app = new App();

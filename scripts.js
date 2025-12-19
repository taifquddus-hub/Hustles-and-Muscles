//--------------- Form Validation ---------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", validateForm);
});

function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting if there are validation errors

  // Get form field values
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);
  const fitnessGoals = document.getElementById("fitness-goals").value.trim();
  
  const membershipType = document.getElementById("membership-type").value;
  const paymentMethod = document.getElementById("payment-method").value; // New Payment Method

  let errors = [];

  // Name validation
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation - basic regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Invalid email address.");
  }

  // Phone number validation - basic pattern (10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    errors.push("Phone number must be 10 digits.");
  }

  // Age validation
  if (isNaN(age) || age < 12 || age > 120) {
    errors.push("Age must be a number between 12 and 120.");
  }

  // Fitness goals validation
  if (fitnessGoals === "") {
    errors.push("Please specify your fitness goals.");
  }

  // Membership type validation
  if (membershipType === "") {
    errors.push("Please select a membership type.");
  }

  // Payment method validation
  if (paymentMethod === "") {
    errors.push("Please select a payment method.");
  }

  displayErrors(errors);

  if (errors.length === 0) {
    alert("Form submitted successfully!");
    form.reset(); // Clear the form
  }
}

function displayErrors(errors) {
  const errorDiv = document.getElementById("form-errors");
  errorDiv.innerHTML = ""; // Clear previous errors
  if (errors.length > 0) {
    errors.forEach((error) => {
      const p = document.createElement("p");
      p.innerText = error;
      p.style.color = "red"; // Red color for errors
      errorDiv.appendChild(p);
    });
  }
}

//--------------- Light/Dark Mode Toggle ---------------
//--------------- Light/Dark Mode Toggle ---------------
function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the body element
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Update button text dynamically
  const button = document.querySelector("button[onclick='toggleDarkMode()']");
  if (body.classList.contains("dark-mode")) {
    button.innerText = "Switch to Light Mode";
  } else {
    button.innerText = "Switch to Dark Mode";
  }
}

//--------------- Workout of the Day Generator ---------------
const workouts = [
  "Push-ups: 3 sets of 10-15",
  "Squats: 3 sets of 15-20",
  "Plank: 3 minutes total",
  "Lunges: 3 sets of 10 per leg",
  "Jumping Jacks: 3 sets of 1 minute",
  "Mountain Climbers: 3 sets of 30 seconds",
  "Burpees: 3 sets of 10",
  "Pull-ups: 3 sets of 8-12",
  "Bicycles: 3 sets of 1 minute",
];

// Helper function to generate a random workout routine
function generateWorkout(intensity) {
  const workoutDiv = document.getElementById("workout-output");
  workoutDiv.innerHTML = ""; // Clear any existing output

  let numberOfExercises;
  if (intensity === "light") numberOfExercises = 1; // Light: 1 exercise
  else if (intensity === "moderate") numberOfExercises = 3; // Moderate: 3 exercises
  else if (intensity === "intense") numberOfExercises = 5; // Intense: 5 exercises

  const selectedWorkouts = [];
  while (selectedWorkouts.length < numberOfExercises) {
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    if (!selectedWorkouts.includes(randomWorkout)) {
      selectedWorkouts.push(randomWorkout);
    }
  }

  // Display the chosen workouts
  selectedWorkouts.forEach((workout, index) => {
    const p = document.createElement("p");
    p.innerText = `${index + 1}. ${workout}`;
    workoutDiv.appendChild(p);
  });
}

// Attach event listeners to the buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("light-workout").addEventListener("click", () => generateWorkout("light"));
  document.getElementById("moderate-workout").addEventListener("click", () => generateWorkout("moderate"));
  document.getElementById("intense-workout").addEventListener("click", () => generateWorkout("intense"));
});

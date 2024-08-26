// JavaScript code for the web page

// Function to handle navigation to the specified section
function navigateToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Event listener for the "Join Us" button
const joinUsButton = document.getElementById("joinUsButton");
if (joinUsButton) {
  joinUsButton.addEventListener("click", () => {
    navigateToSection("joinUsSection");
  });
}

// Event listener for the "Our Vision" button
const ourVisionButton = document.getElementById("ourVisionButton");
if (ourVisionButton) {
  ourVisionButton.addEventListener("click", () => {
    navigateToSection("ourVisionSection");
  });
}

// Event listener for the "Follow Us" button
const followUsButton = document.getElementById("followUsButton");
if (followUsButton) {
  followUsButton.addEventListener("click", () => {
    navigateToSection("followUsSection");
  });
}

// Event listener for the "Take Up the Challenge" button
const takeUpChallengeButton = document.getElementById("takeUpChallengeButton");
if (takeUpChallengeButton) {
  takeUpChallengeButton.addEventListener("click", () => {
    navigateToSection("takeUpChallengeSection");
  });
}

// Event listener for the "Join the Community" button
const joinCommunityButton = document.getElementById("joinCommunityButton");
if (joinCommunityButton) {
  joinCommunityButton.addEventListener("click", () => {
    navigateToSection("joinCommunitySection");
  });
}

// Function to handle the "Join Now" button click
function handleJoinNowClick() {
  // You can replace this with your desired action
  console.log("Join Now button clicked!");
}

// Function to handle the "Sign Out" button click
function handleSignOutClick() {
  // You can replace this with your desired action
  console.log("Sign Out button clicked!");
}

// Event listener for the "Join Now" button
const joinNowButton = document.getElementById("joinNowButton");
if (joinNowButton) {
  joinNowButton.addEventListener("click", handleJoinNowClick);
}

// Event listener for the "Sign Out" button
const signOutButton = document.getElementById("signOutButton");
if (signOutButton) {
  signOutButton.addEventListener("click", handleSignOutClick);
}
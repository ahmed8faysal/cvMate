// add multiple work experience fields
function addWorkExperience() 
{
const container = document.getElementById('work-experience-container');
const newExperience = document.querySelector('.work-experience').cloneNode(true);
container.appendChild(newExperience);
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA74Dng664GtwY7GKSj6ZHKC1_FQU5AqFk",
    authDomain: "ujjibon-cv-mate.firebaseapp.com",
    databaseURL: "https://ujjibon-cv-mate-default-rtdb.firebaseio.com",
    projectId: "ujjibon-cv-mate",
    storageBucket: "ujjibon-cv-mate.firebasestorage.app",
    messagingSenderId: "97448543304",
    appId: "1:97448543304:web:47515e3968892e9cf9047d",
    measurementId: "G-HH6B4C9FSM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the database
  var cvMate = firebase.database().ref("cvMate");
  
  // Event listener for form submission
  document.getElementById("cv-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    // Get form data
    var fullName = getElementVal("full_name");
    var phoneNumber = getElementVal("phone_number");
    var emailAddress = getElementVal("email_address");
    var linkedinProfile = getElementVal("linkedin_profile");
    var portfolioWebsite = getElementVal("portfolio_website");
    var dateOfBirth = getElementVal("date_of_birth");
    var currentAddress = getElementVal("current_address");
    var hideAddress = document.getElementById("hide_address").checked;
    var desiredJobTitle = getElementVal("desired_job_title");
    var industryInterest = getElementVal("industry_interest");
    var careerGoals = getElementVal("career_goals");
    var salaryExpectations = getElementVal("salary_expectations");
    var highestEducation = getElementVal("highest_education");
    var majorDegree = getElementVal("major_degree");
    var universityName = getElementVal("university_name");
    var graduationDate = getElementVal("graduation_date");
    var gpa = getElementVal("gpa");
    var relevantCoursework = getElementVal("relevant_coursework");
    var academicHonors = getElementVal("academic_honors");
    var technicalSkills = getElementVal("technical_skills");
    var softSkills = getElementVal("soft_skills");
    var languages = getElementVal("languages");
    var awards = getElementVal("awards");
    var volunteerOrganization = getElementVal("volunteer_organization");
    var volunteerDates = getElementVal("volunteer_dates");
    var volunteerDescription = getElementVal("volunteer_description");
    var interests = getElementVal("interests");
    var provideReferences = document.querySelector('input[name="provide_references"]:checked').value;
    var references = getElementVal("references");
  
    // Create an object to store the data
    var formData = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      linkedinProfile: linkedinProfile,
      portfolioWebsite: portfolioWebsite,
      dateOfBirth: dateOfBirth,
      currentAddress: currentAddress,
      hideAddress: hideAddress,
      desiredJobTitle: desiredJobTitle,
      industryInterest: industryInterest,
      careerGoals: careerGoals,
      salaryExpectations: salaryExpectations,
      highestEducation: highestEducation,
      majorDegree: majorDegree,
      universityName: universityName,
      graduationDate: graduationDate,
      gpa: gpa,
      relevantCoursework: relevantCoursework,
      academicHonors: academicHonors,
      technicalSkills: technicalSkills,
      softSkills: softSkills,
      languages: languages,
      awards: awards,
      volunteerOrganization: volunteerOrganization,
      volunteerDates: volunteerDates,
      volunteerDescription: volunteerDescription,
      interests: interests,
      provideReferences: provideReferences,
      references: references
    };
  
    // Log formData for debugging
    console.log("Form Data: ", formData);
  
    // Save the data to the database
    saveMessages(formData);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Reset the form
    document.getElementById("cv-form").reset();
  }
  
  // Function to save messages to Firebase
  const saveMessages = (formData) => {
    var newContactForm = cvMate.push();
    newContactForm.set(formData);
  };
  
  // Helper function to get form values
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
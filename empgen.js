// Helper functions to generate random core data

function getRandomName() {
  // Returns random name
}

function getRandomDOB() {
  // Returns random date of birth  
}

function getRandomAddress() {
  // Returns random address
}

function getRandomCity() {
  // Returns random city name
}

// Similar helper functions for other core fields like state, zip, etc.

// Helper functions to generate military data

function getRandomRank() {
  // Returns random military rank
}

function getRandomBranch() {
  // Returns random military branch 
}

function getRandomUnit() {
  // Returns random unit based on branch
}

// Helper functions for civilian employee data

function getRandomJobTitle() {
  // Returns random civilian job title
}

function getRandomPayGrade() {
  // Returns random pay grade
}

function getRandomAgency() {
  // Returns random agency name
}

// Original code

function generateDummyData() {

  var fields = ["Name", "DOB", "Address", "City", "State", "Zip", "Phone", "Email"];

  var sheet = SpreadsheetApp.create('Dummy Data');

  var activeSheet = sheet.getActiveSheet();

  activeSheet.appendRow(fields);

  for(var i = 0; i < 100; i++) {

    var row = [];
    
    row.push(getRandomName());
    row.push(getRandomDOB()); 
    row.push(getRandomAddress());
    row.push(getRandomCity());
    row.push(getRandomState());
    row.push(getRandomZip());
    row.push(getRandomPhone());
    row.push(getRandomEmail());
    
    activeSheet.appendRow(row);

  }

  return sheet.getUrl();

}

// Original helper functions 

function getRandomName() {
  // Returns random name
}

function getRandomDOB() {
  // Returns random DOB  
}

// Other original functions

// New helper functions

function getRandomSalary() {
  // Returns random salary
}

function getRandomManager() {
  // Returns random manager name
}

// Core rows function

function getCoreRows(numRows) {
  // Generates array of numRows objects with core fields
}

// Functions to add additional fields 

function addMilitaryData(rows) {
  // Add military fields to rows
}

function addCivilianData(rows) {
  // Add civilian fields to rows 
}

function addContractorData(rows) {
  // Add contractor fields to rows
}

function addEmploymentData(rows) {
  // Add employment info to rows  
}

// Validation function

function validateData(rows) {
  // Validate data in rows
}
// Contractor and other employee functions

function addContractorData(rows) {
  rows.forEach(row => {
    // Add contractor fields    
  });
}

function getRandomSalary() {
  // Return random salary
}

function getRandomHireDate() {
  // Return random hire date 
}

function getRandomManager() {
  // Return random manager name
}

function getRandomDepartment() {
  // Return random department
}

function addEmploymentData(rows) {
  rows.forEach(row => {
    row.Salary = getRandomSalary();
    row.HireDate = getRandomHireDate();
    row.Manager = getRandomManager(); 
    // Add other employment fields
  });
}

function validateData(rows) {
  rows.forEach(row => {
    // Validate row data
    // Throw errors if invalid
  });
}

// Example helper functions

function getRandomName() {
  const firstNames = ['John', 'Jane', 'David'];
  const lastNames = ['Smith', 'Jones', 'Taylor'];
  
  // Pick random first and last name
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`; 
}

function getRandomDOB() {
  const minYear = 1950;
  const maxYear = 2005;

  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;

  // Generate random month and day
  // Return date string 
}
// Core rows

function getCoreRows(numRows) {
  const coreRows = [];

  for (let i = 0; i < numRows; i++) {
    const row = {
      Name: getRandomName(), 
      DOB: getRandomDOB(),
      Address: getRandomAddress(),
      City: getRandomCity(),
      State: getRandomState(),
      Zip: getRandomZip(),
      Phone: getRandomPhone(),
      Email: getRandomEmail() 
    };

    coreRows.push(row);
  }

  return coreRows;
}

// Military

const ranks = ['Private', 'Corporal', 'Sergeant'];

const branches = ['Army', 'Navy', 'Air Force']; 

function getRandomRank() {
  return ranks[Math.floor(Math.random() * ranks.length)];
}

function getRandomBranch() {
  return branches[Math.floor(Math.random() * branches.length)];
}

function addMilitaryData(rows) {
  rows.forEach(row => {
    row.Rank = getRandomRank();
    row.Branch = getRandomBranch();
  }); 
}

// Civilian 

const jobTitles = ['Manager', 'Analyst', 'Programmer'];

const payGrades = ['GS-5', 'GS-7', 'GS-9'];

function getRandomTitle() {
  return jobTitles[Math.floor(Math.random() * jobTitles.length)];
}

function getRandomPayGrade() {
  return payGrades[Math.floor(Math.random() * payGrades.length)]; 
}

// Civilian continued

function addCivilianData(rows) {
  rows.forEach(row => {  
    row.Title = getRandomTitle();
    row.PayGrade = getRandomPayGrade();
  });
}

// Contractor

const contractTypes = ['Temp', 'FT Contractor', 'PT Contractor'];

function getRandomContractType() {
  return contractTypes[Math.floor(Math.random() * contractTypes.length)];
}

function addContractorData(rows) {
  rows.forEach(row => {
    row.ContractType = getRandomContractType(); 
  });
}

// Employment

function getRandomSalary() {
  const minSalary = 45000;
  const maxSalary = 120000;
  
  return Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
}

function getRandomHireDate() {
  const startYear = 2010;
  const endYear = 2021;
  
  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;

  return `${month}/${day}/${year}`; 
}

function addEmploymentData(rows) {
  rows.forEach(row => {
    row.Salary = getRandomSalary(); 
    row.HireDate = getRandomHireDate();
  });
}

// Validation

function validateDOB(dob) {
  // Validate date of birth 
}

function validateData(rows) {
  rows.forEach(row => {
    validateDOB(row.DOB);
  });
}

// Validation continued

function validateData(rows) {
  rows.forEach(row => {
    if (!validateDOB(row.DOB)) {
      throw 'Invalid date of birth generated'; 
    }

    // Additional validations

  });
}

// Helper functions

function getRandomPhone() {
  // Generate random phone number
}

function getRandomEmail() {
  // Generate random email
} 

function getRandomAddress() {
  // Generate random address 
}

function getRandomCity() {
  // Generate random city name
}

function getRandomState() {
  // Generate random state
} 

function getRandomZip() {
  // Generate random zip code
}

// Bringing it all together

function generateDummyData(options) {

  // 1. Create sheet
  // 2. Generate core rows
  // 3. Add employee type data
  // 4. Add employment data
  // 5. Validate data
  // 6. Add rows to sheet
  // 7. Return sheet url

}

// Helper functions for each piece

// Usage

const options = {
  totalRows: 200,
  types: ['military', 'civilian', 'contractor']
};

const sheetUrl = generateDummyData(options); 

Logger.log('Generated data at ' + sheetUrl);

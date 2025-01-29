describe('EAApp Automation Test', () => {
  
    // Run before each test
    beforeEach(() => {
      // Visit the homepage of the website
      cy.visit('http://eaapp.somee.com/');
    });
    
    it('should load the homepage successfully', () => {
      // Verify if the title is correct
      cy.title().should('include', 'EAApp');
    });
  
    it('should display the Login page', () => {
      // Find the login button and click it
      cy.get('a[href="/Account/Login"]').click();
      
      // Verify if the login page is displayed
      cy.url().should('include', '/Account/Login');
      cy.get('h2').should('contain.text', 'Log in');
    });
  
    it('should perform a login operation', () => {
      // Navigate to the login page
      cy.get('a[href="/Account/Login"]').click();
  
      // Type the username and password in respective fields
      cy.get('input[name="UserName"]').type('admin');
      cy.get('input[name="Password"]').type('password123');
  
      // Click on the login button
      cy.get('input[type="submit"]').click();
  
      // Verify if the login was successful (e.g., redirected to home page or dashboard)
      cy.url().should('include', '/Home/Index');
      cy.get('h1').should('contain.text', 'Welcome to the application!');
    });
  
    it('should navigate to the Employee Index page', () => {
      // Click on the Employees menu
      cy.get('a[href="/Employee/Index"]').click();
  
      // Verify the employee page is loaded
      cy.url().should('include', '/Employee/Index');
      cy.get('h2').should('contain.text', 'Employee List');
    });
  
    it('should create a new employee record', () => {
      // Navigate to the Employee page
      cy.get('a[href="/Employee/Index"]').click();
      
      // Click on the "Create New" button
      cy.get('a[href="/Employee/Create"]').click();
      
      // Fill in employee details
      cy.get('input[name="Employee.EmployeeName"]').type('John Doe');
      cy.get('input[name="Employee.Notes"]').type('Test Employee');
      
      // Click on Save button
      cy.get('input[type="submit"]').click();
  
      // Verify if the employee was successfully created
      cy.get('table').should('contain', 'John Doe');
    });
  });
  
  
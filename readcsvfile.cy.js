import Papa from 'papaparse';

describe("reading the csv data using papaparse", () => {
  it("read the csv data", () => {
    cy.readFile('cypress/fixtures/contact.csv').then((csvData) => {
      Papa.parse(csvData, {
        complete: (result) => {
    
          const parsedData = result.data;
          

          cy.log(parsedData);

    
          cy.log(parsedData[0]); 
          cy.log(parsedData[1]); 
          cy.log(parsedData[2]);
        },
      }); 
    }); 
  });
});
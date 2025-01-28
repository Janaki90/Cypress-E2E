import contactus from "./PageObject/qaoncloud.js"
import Registerpage from "./PageObject/rediff.js" 
describe("qaoncloud",()=>{
    const form1=new contactus();
    let form2=new Registerpage();
   
   // beforeEach("url",()=>{
     //   form1.url();
    //})
    it("contact us",()=>{
        form1.url();
        form1.name("Janaki");
        form1.email("janakinavanee@gmail.com");
        form1.phone("8056272452");
        form1.companyname("Desicrew")
        form1.role("QA Engineer");
        form1.requirements("Need Automation testing guidelines");
        })
    it("dropdown",()=>{
        form1.url();
        form1.services();
        form1.solutions();
        form1.industries();
        form1.insights();

    })
    it("using different website locator in qaoncloud scripts",()=>{
        form2.url();
        form2.fullname("Janaki");
        form2.password("navanee");
        form2.mobno("9789689122");
        form2.male();
    })
})
companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2001, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [10, 50 , 53, 30, 21, 7, 8, 18, 23, 98, 77, 44];

// // // higher order arry methods

// // 1. forEach

// companies.forEach((company) =>
// console.log(company.name)
// );

// //2. Filter

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//       canDrink.push(ages[i]); 
//     }
// }

// const canDrink = ages.filter(function(ages){
//     if(ages >= 21){
//         return true;
//     }
// });
// console.log(canDrink)

// // Using HOAM

//const canDrink = ages.filter(ages => ages >= 21)
// console.log(canDrink)

// // FILTERING RETAIL COMPANIES

// const retailcompanies = companies.filter(function(Company){
//     if(Company.category === "Retail") {
//         return true;
//     }
// });
// console.log(retailcompanies)



// // Q1 . Retail companies HOAM filter

// const retailcompanies = companies.filter(Company => Company.category === "Retail")

// console.log(retailcompanies)



// // // Q2 . Filter all the finance company?


// const financeCompanies = companies.filter(Company => Company.category === "Finance")

// console.log(financeCompanies)


// // // Q4. Combining all finance , technology and retail and Reduce it ?

// const CombiningFinanceTechRetail = companies.filter(Company => Company.category === "Finance" || Company.category === "Technology" || Company.category === "Retail")

// console.log(CombiningFinanceTechRetail);





// // Q5 . FILTER ALL 80's companies only


// const EightycompaniesOnly = companies.filter(company => (company.start >= 1980 && company.start < 1990 ));

// console.log(EightycompaniesOnly);



// // if multiple differ u want to filter use &&

// const Eightyscompanies = companies.filter(company => (company.start >= 1980 && company.end <= 1999));

// console.log(Eightyscompanies)



// // // Q6 . Companies which lasted for more than 50 years

// const lastedFiftyyYears = companies.filter(Company => (Company.end - Company.start >= 15));

// console.log(lastedFiftyyYears);


// // // 50 years company not there

// const lastedFiftyyYears = companies.filter(Company => (Company.end - Company.start >= 50));

// console.log(lastedFiftyyYears)



// // // 3. Map  


// // // Q3 . Find the age of Each company ?

// const AgesOfEachCompany = companies.map(companies => (companies.end - companies.start))

// console.log(AgesOfEachCompany)


// // creating a array of company names

// const companyNames = companies.map(function(Company){
//     return Company.name;
// });
// console.log(companyNames)

// // another methord map

// const testMap = companies.map(function(Company){
//     return `$(Company.name) [${Company.start} - ${Company.end}]`;
// });

// console.log(testMap)
  
// // // Map using higher order 

// const TestMap = companies.map(Company => `$(Company.name) [${Companystart} - ${Company.end}]`).;

// console.log(TestMap);


// // // ages squearing using map  given 

// const ageOfCompanyMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);

// console.log(ageOfCompanyMap)


// // //4 . Sort 

// // // Sorting companies from start to end

// const sortedCompanyStart = companies.sort(function(c1,c2) {
//     if(c1.start - c2.start) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });
// console.log(sortedCompanyStart)


// // // again sorting for ending years

// const sortedCompanyEnd = companies.sort(function(c1,c2) {
//     if(c1.end - c2.end) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });
// console.log(sortedCompanyEnd)


// // //** */ HIGHER ORDER ARRAY METHORD
// // // **sorting for START YEAR (HIGHER ORDER)

// const sortCompaniesUsingHigherOrder = companies.sort((a,b) => (a.start > b.start ? 1 : -1)); 

// console.log(sortCompaniesUsingHigherOrder)


// // // Sort AGES  const ages = [10, 50 , 53, 30, 21, 7, 8, 18, 23, 98, 77, 44]; for reference


// const sortAgesAscending = ages.sort((a, b) => a - b)
// console.log(sortAgesAscending);

// // Desending order sort

// const sortAgesDecending = ages.sort((a, b) => b - a)
// console.log(sortAgesDecending);





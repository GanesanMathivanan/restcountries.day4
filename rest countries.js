
/// PRINT ALL COUNTRY FLAG

// fetch("https://restcountries.com/v3.1/all")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(country => {
//       console.log(country.name.common);
//     });
//   })
//   .catch(error => console.error(error));



/// NAME , REGION, SUB REGION , POP
function printCountryDetails() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        data.forEach(country => {
          console.log(`
          Name: ${country.name.common}
          Region: ${country.region}
          Sub-Region: ${country.subregion}
          Population: ${country.population}
          `);
        });
      } else {
        console.error("Failed to fetch data");
     }
    };
    xhr.send();
  }
  
  printCountryDetails();
  
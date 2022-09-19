const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0])

    const allCountryHTML = countries.map(country => getCountryHTML(country))

    // console.log(allCountryHTML.join(' '))

    const container = document.getElementById("countries");
    container.innerHTML = allCountryHTML.join(' ');


}

// Option -2:
const getCountryHTML = ({ flags, name, capital, area, population, region }) => {
    return `
<div class="country">
<img src="${flags.png}">
<h1>Name: ${name.common} </h1>
<p>Capital:  ${capital} </p>
<p>Area:  ${area} </p>
<p>Population:  ${population} </p>
<p>Region:  ${region} </p>
</div>`
}



// // Option -1:
// const getCountryHTML = country => {
//     const { flags, name, capital } = country
//     return `
// <div class="country">
// <img src="${flags.png}">
// <h1>Name: ${name.common} </h1>
// <p>Capital:  ${capital} </p>
// </div>`
// }

//  Orginal step :
// const getCountryHTML = country => {
//     return `
// <div class="country">
// <img src="${country.flags.png}">
// <h1>Name: ${country.name.common} </h1>
// <p>Capital:  ${country.capital} </p>
// </div>`
// }

loadCountry()
const getPuzzle = async (wordCount) => {

    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async (countryCode) => {

    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country
    } else {
        throw new Error('Unable to fetch')
    }
}

const getLocation = async () => {

    const response = await fetch('//ipinfo.io/json?token=670abb9dd2fe72')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}


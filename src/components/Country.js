import React from 'react';
import axios from 'axios';
import Select from 'react-select';
class Country extends React.Component {
    state = {
        countries: []
    }
    componentDidMount() {
        const url = `http://168.235.109.53:5000/countries`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ countries: data.countries })
                //console.log(this.state.countries)
            })
    }
    render() {
        const { countries } = this.state;
        let optionItems = countries.map(country =>
            <option key={country}>{country}</option>);

        return (
            <div >
                <Select options={this.state.countries} />
                <Select options={countries.map((country) => <li key={country}>{country}</li>)} />
                <ol>
                    {countries.map((country) => <li key={country}>{country}</li>)}
                </ol>
            </div>
        )
    }
}
export default Country;
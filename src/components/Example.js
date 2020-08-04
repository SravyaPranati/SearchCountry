import React, { Component } from 'react'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'

const animatedComponent = makeAnimated()

class Example extends Component {
    state = { selectedUsers: [] }

    onChange = selectedUsers => {
        this.setState({
            selectedUsers: selectedUsers || []
        })
    }

    loadOptions = async (inputText, callback) => {
        const response = await fetch(`http://168.235.109.53:5000/countries`)
        const json = await response.json()
        console.log(json.map(country => ({ label: country, value: country })));

        //  callback(json.map(country => ({ label: json.countries, value: json.countries })))
    }

    /* renderEveryUser= user => {
       return <img src={user.avatar} alt='user avatar'/>
     }*/

    render() {
        return (<div className='users'>

            <div className='avatars'>
                {this.state.selectedUsers}
            </div>

        </div>)
    }
}

export default Example;
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        return(
            <div className='question-container'>
                <h2>Would You Rather</h2>
                <div className='avatar-container'>
                    <img className="avatar"
                        src="https://i.pravatar.cc/100"
                        alt="Random Avatar" 
                    />
                    <form>
                        <label>
                            Select an option:
                            <select value="Vote">
                            <option value="Eat a bee">Eat a Bee</option>
                            <option value="Get stung">Get stung by a Hornet 10 times</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Question)
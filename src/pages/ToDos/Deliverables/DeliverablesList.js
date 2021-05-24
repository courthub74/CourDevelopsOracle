import React, {useState} from 'react'

function DeliverablesList() {
    const [input, setInput] = useState('');


    return (
        <form className="deliv-form">
            <input type="text" placeholder="Add a Deliverable" value={input} name='text' className='deliv-input' />
            <button className="deliv-button">
                Add Deliverable
            </button>
        </form>
    )
}

export default DeliverablesList;



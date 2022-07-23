import React, {useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('');
    const [desc, setDesc] = useState('');
    const [reminder, setReminder] = useState(false);
  return (
    <form
    className="add-form">
        <div className="form-control">
            <label htmlFor="todo">What to do</label>
            <input 
            type="text"
            placeholder = "add your tasks here"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            required
            />
        </div>
        <div className="form-control">
            <label htmlFor="time">Short text of what to do</label>
            <input 
            type="text"
            placeholder="write a short text about the task" 
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="checkbox">Would you like to set a reminder?</label>
            <input 
            type="checkbox"
            value={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)}
             />
        </div>
        <input 
        type="submit"
        value ='Save To Do'
        className="btn btn-block"
        />
    </form>
  )
}

export default AddTask
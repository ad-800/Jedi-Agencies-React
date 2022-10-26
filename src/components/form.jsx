import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [grade, setGrade] = useState('');

  return (
    <form className="form">
      <label>Corporation Name
        <input name="name" type="text" onChange={(event) => setName(event.target.value)} />
      </label>
      <label>Description
        <input name="description" type="text" onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>Tags
        <select name="tags" multiple={true} onChange={(event) => setTags(event.target.value)}>
            <option value="industry">Industrial</option>
            <option value="government">Governmental</option>
            <option value="economy">Economic</option>
            <option value="weapons">War</option>
        </select>
      </label>
      <label>Grade
        <select name='grade' onChange={(event) => setGrade(event.target.value)}>
            <option value="Master">Master</option>
            <option value="Jedi">Jedi</option>
            <option value="Padawan">Padawan</option>
        </select>
      </label>
      <input className="button" type="button" value="Submit" onClick={() => {props.handleForm({name: name, description: description, tags: tags, grade: grade})}} />
    </form>
  );
}

export default Form;

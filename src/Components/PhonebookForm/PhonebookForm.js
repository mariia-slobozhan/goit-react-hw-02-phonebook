import { Component } from "react";

export default class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  };

  handleSubmit =(e) => {
      e.preventDefault()
     
      this.props.addNewContact(this.state)

      this.resetForm()
  }

  resetForm = () => {
     this.setState({ name: "", number: ""})
  }

  render() {
    const {name, number} = this.state;
    const{handleSubmit, handleChange,  }= this;
    return (
      <form  onSubmit={handleSubmit}> 
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}
import { useState } from 'react';
import Button from 'components/UI/Button';

const AddressForm = () => {
  const [enteredAddress, setEnteredAddress] = useState('');

  const updateAddressHandler = (e) => {
    setEnteredAddress(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredAddress);
    //TODO: sent POST request and update db.json
    setEnteredAddress('');
  };

  return (
    <form onSubmit={submitHandler} className="address-form">
      <input
        type="text"
        name="address"
        placeholder="type address here"
        value={enteredAddress}
        onChange={updateAddressHandler}
        className="address-form__input"
      />
      <Button
        title="Add new address"
        type="submit"
        className="button -color-reverse"
      />
    </form>
  );
};

export default AddressForm;

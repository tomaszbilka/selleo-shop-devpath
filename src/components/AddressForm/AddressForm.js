import { useState } from 'react';
import Button from 'components/UI/Button';
import { useAddAddressMutation } from 'utils/rtk-query-addresses';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const AddressForm = () => {
  const [enteredAddress, setEnteredAddress] = useState('');
  const [addAddress] = useAddAddressMutation();

  const updateAddressHandler = (e) => {
    setEnteredAddress(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addAddress({
        id: uuidv4(),
        address: enteredAddress,
      });
      if (response.error) {
        throw new Error('Could not add new address... :(');
      }
    } catch (err) {
      toast.error(err.message);
    }
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
        disabled={enteredAddress === '' ? true : false}
      />
    </form>
  );
};

export default AddressForm;

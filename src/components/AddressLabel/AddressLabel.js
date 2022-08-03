import { useState, useRef, useEffect } from 'react';
import ButtonRound from 'components/UI/ButtonRound';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDeleteAddressMutation } from 'utils/rtk-query-addresses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useUpdateAddressMutation } from 'utils/rtk-query-addresses';

const AddressLabel = ({ id, address }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [addressValue, setAddressValue] = useState(address);
  const inputRef = useRef();

  const [deleteAddress] = useDeleteAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();

  const iconDelete = <FontAwesomeIcon icon={faTrashCan} />;

  useEffect(() => {
    inputRef?.current?.focus();
  }, [isEditing]);

  const deleteAddressHandler = async () => {
    try {
      const response = await deleteAddress(id);
      if (response.error) {
        throw new Error();
      }
    } catch (err) {
      toast.error(
        `We could'n delete address: ${address}. Try again later or contact us please!`
      );
    }
  };

  const changeInputTypeHandler = () => {
    setIsEditing(true);
  };

  const editAddressHandler = (e) => {
    setAddressValue(e.target.value);
  };

  const sendEditRequestHandler = () => {
    updateAddress({ id: id, address: addressValue })
      .unwrap()
      .catch((err) =>
        toast.error(
          'We can not update your address, try again later! ' +
            'error status: ' +
            err.status
        )
      );
    setIsEditing(false);
  };

  const sendEditRequestOnEnter = (e) => {
    if (e.keyCode === 13) {
      sendEditRequestHandler();
    }
  };

  return (
    <div className="address-item">
      <ButtonRound
        onClick={deleteAddressHandler}
        info={'remove this address'}
        icon={iconDelete}
      />
      {!isEditing && (
        <button
          className="address-item__button"
          type="button"
          onClick={changeInputTypeHandler}
        >
          {address}
        </button>
      )}
      {isEditing && (
        <input
          value={addressValue}
          type="text"
          onChange={editAddressHandler}
          onKeyDown={sendEditRequestOnEnter}
          onBlur={sendEditRequestHandler}
          ref={inputRef}
          className="address-item__input"
        />
      )}
    </div>
  );
};

AddressLabel.propTypes = {
  id: PropTypes.string,
  address: PropTypes.string,
};

export default AddressLabel;

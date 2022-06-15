import { useContext, useEffect } from 'react';
import { fetchAddresses } from 'store/addresses';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Button from 'components/UI/Button';
import AuthContext from 'store/auth-context';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { getAddresses, getAddressesStatus } from 'store/addresses/selectors';
import AddressForm from 'components/AddressForm';

const Settings = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const addressesStatus = useSelector(getAddressesStatus);
  const addressesArray = useSelector(getAddresses);
  let addresses;

  useEffect(() => {
    dispatch(fetchAddresses())
      .then((res) => {
        if (res.error) {
          throw new Error('Could not fetch addresses');
        }
      })
      .catch((err) => toast.error(err.message));
  }, [dispatch]);

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
    toast.success('You successfully logout!');
  };

  if (addressesStatus === 'pending') {
    addresses = <LoadingSpinner />;
  }

  if (addressesStatus === 'rejected') {
    addresses = (
      <p className="settings__error">
        there is some problem with fetching addresses...
      </p>
    );
  }

  if (addressesStatus === 'fulfilled') {
    addresses = addressesArray.map((el) => (
      <li key={el.id} className="settings__list">
        {el.address}
      </li>
    ));
  }

  return (
    <section className="settings">
      <div className="settings__control">
        <div className="settings__title">
          User {authCtx.userName} settings panel:
        </div>
        <AddressForm />
        <Button onClick={logoutHandler} title="logout" />
      </div>
      <div className="settings__control">
        <h3>All addresses:</h3>
        <ul>{addresses}</ul>
      </div>
    </section>
  );
};

export default Settings;

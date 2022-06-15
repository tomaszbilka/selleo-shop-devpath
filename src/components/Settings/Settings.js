import { useContext, useEffect, useMemo } from 'react';
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

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
    toast.success('You successfully logout!');
  };

  const addresses = useMemo(() => {
    switch (addressesStatus) {
      case 'pending':
        return <LoadingSpinner />;
      case 'rejected':
        return (
          <p className="settings__error">
            there is some problem with fetching addresses...
          </p>
        );
      case 'fulfilled':
        return (
          <ul>
            {addressesArray.map((el) => (
              <li key={el.id} className="settings__list">
                {el.address}
              </li>
            ))}
          </ul>
        );
      default:
        return '';
    }
  }, [addressesStatus]);

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
        {addresses}
      </div>
    </section>
  );
};

export default Settings;

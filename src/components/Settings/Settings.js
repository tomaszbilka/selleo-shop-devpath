import { useContext } from 'react';
import { toast } from 'react-toastify';
import Button from 'components/UI/Button';
import AuthContext from 'store/auth-context';
import { useNavigate } from 'react-router-dom';
import { useGetAddressesQuery } from 'utils/rtk-query-addresses';
import LoadingSpinner from 'components/UI/LoadingSpinner';

import AddressForm from 'components/AddressForm';
import Error from 'components/UI/Error';
import AddressItem from 'components/AddressItem';

const Settings = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAddressesQuery();

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
    toast.success('You successfully logout!');
  };

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
        {isLoading && !error && <LoadingSpinner />}
        {!isLoading && error && (
          <Error>{error.message || 'Sth went wrong'}</Error>
        )}
        {!isLoading &&
          !error &&
          data.map((address) => (
            <AddressItem
              id={address.id}
              address={address.address}
              key={address.id}
            />
          ))}
      </div>
    </section>
  );
};

export default Settings;

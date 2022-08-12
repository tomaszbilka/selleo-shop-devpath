import { useContext } from 'react';
import { toast } from 'react-toastify';
import Button from 'components/UI/Button';
import AuthContext from 'store/auth-context';
import { useNavigate } from 'react-router-dom';
import { useGetAddressesQuery } from 'utils/rtk-query-addresses';
import LoadingSpinner from 'components/UI/LoadingSpinner';

import AddressForm from 'components/AddressForm';
import Error from 'components/UI/Error';
import AddressLabel from 'components/AddressLabel';

const Settings = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, error, isLoading, isFetching } = useGetAddressesQuery(
    'addresses',
    {
      pollingInterval: 10000,
    }
  );

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
        <h2 className="settings__addresses">All addresses:</h2>
        {error && <Error>{error.message || 'Sth went wrong'}</Error>}
        {isLoading && <LoadingSpinner />}
        {data &&
          data.map(({ address, id }) => (
            <AddressLabel id={id} address={address} key={id} />
          ))}
        {isFetching && <LoadingSpinner />}
      </div>
    </section>
  );
};

export default Settings;

import { useParams } from 'react-router-dom';

const UserSettings = () => {
  const params = useParams();

  return <div>User {params.userId} settings</div>;
};

export default UserSettings;

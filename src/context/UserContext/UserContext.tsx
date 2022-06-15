import React, {createContext, useState} from 'react';

type UserType = {
  id: string;
  isLogged: boolean;
  name: string;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    id: '',
    isLogged: false,
    name: '',
  },
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({children}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider value={{state, setState}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider};
export default UserContext;

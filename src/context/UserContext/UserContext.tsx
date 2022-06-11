import React, {createContext, useState} from 'react';

type UserType = {
  isLogged: boolean;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    isLogged: false,
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

export const getAddresses = (state) => {
  return Object.values(state.addresses.byId);
};

export const getAddressesStatus = (state) => {
  return state.addresses.status;
};

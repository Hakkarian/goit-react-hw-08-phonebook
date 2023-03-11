export const selectIsUserLogin = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
export const selectIsUserLoads = ({auth}) => auth.isLoading
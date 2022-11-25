import { useGetUserInformationQuery } from '../../redux/authSlice';

export function IsLoggedIn() {
  useGetUserInformationQuery();
}

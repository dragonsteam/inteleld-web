export default function getAuthHeaders() {
  const auth = localStorage.getItem('auth');
  if (!auth) return {};
  const auth_data = JSON.parse(auth);
  return {
    Authorization: 'Bearer ' + auth_data?.data?.access,
  };
}

import decode from 'jwt-decode';
import request from './request';

export async function signIn (email, password) {
  const { token } = await request('POST', '/session', {
    email,
    password
  });
  localStorage.setItem('@appcrudtestvuejs:token', token);
}

export function signOut () {
  localStorage.removeItem('@appcrudtestvuejs:token');
}

export function isSignedIn () {
  const token = localStorage.getItem('@appcrudtestvuejs:token');

  if (!token)
    return false;

  try {
    const { exp: expiration } = decode(token);
    const isExpired = !!expiration && Date.now() > expiration * 1000;

    if (isExpired)
      return false;

    return true;
  } catch (_) {
    return false;
  }
}
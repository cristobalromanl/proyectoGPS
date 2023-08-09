import axios from './axios';

export const getAllTournaments = async () => {
  try {
    const res = await axios.get('/api/tournaments');
    return res.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const createTournament = async (tournamentData) => {
  try {
    const res = await axios.post('/api/tournaments', tournamentData);
    return res.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const getTournament = async (id) => {
  try {
    const res = await axios.get(`/api/tournaments/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const updateTournament = async (id, tournamentData) => {
  try {
    const res = await axios.put(`/api/tournaments/${id}`, tournamentData);
    return res.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const deleteTournament = async (id) => {
  try {
    const res = await axios.delete(`/api/tournaments/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

export const registerClubInTournament = async (tournamentId, clubId) => {
  try {
    const res = await axios.post(`/api/tournaments/${tournamentId}/register`, { clubId });
    return res.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
};

// Agrega más funciones según tus necesidades

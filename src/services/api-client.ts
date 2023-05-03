import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '89ee7de1ecaf4e3e9ec9d01e66792b7d'
  }
});

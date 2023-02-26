import axios from 'axios';

export const AddProduct = async (id: number) => {
  const sidFromLS = localStorage.getItem('sid');
  const sid = sidFromLS ? JSON.parse(sidFromLS) : null;

  const res = await axios.post('/api/cart/add', { id, lang: 1, shop: 1, sid });

  if (res.data.sid) {
    localStorage.setItem('sid', JSON.stringify(res.data?.sid));
  }
  return res;
};

export const GetProducts = async () => {
  const sidFromLS = localStorage.getItem('sid');
  const sid = sidFromLS ? JSON.parse(sidFromLS) : null;

  const res = await axios.post('/api/cart/list', { lang: 1, shop: 1, sid });

  if (res.data.sid) {
    localStorage.setItem('sid', JSON.stringify(res.data?.sid));
  }
  return res;
};

export const DeleteProducts = async (id: number, all: boolean) => {
  const sidFromLS = localStorage.getItem('sid');
  const sid = sidFromLS ? JSON.parse(sidFromLS) : null;

  const res = await axios.post('/api/cart/delete', {
    id,
    lang: 1,
    shop: 1,
    all: all,
    sid,
  });

  if (res.data.sid) {
    localStorage.setItem('sid', JSON.stringify(res.data?.sid));
  }
  return res;
};

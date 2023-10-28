const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default () => `${cols[Math.floor(Math.random() * 8)]}${rows[Math.floor(Math.random() * 8)]}`;

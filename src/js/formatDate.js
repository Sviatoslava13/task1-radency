export const formatCreatedDate = () =>
  `${new Date().toLocaleString('en', {
    month: 'long',
    day: '2-digit',
  })}, ${new Date().getFullYear()} `;

export function formatDate(inputDate) {
  const dateObj = new Date(inputDate);
  if (isNaN(dateObj)) {
    return '';
  }
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

import { data } from './data.js';
import { formatDate, formatCreatedDate } from './formatDate.js';
const store = { data };

export const handleEdit = (formData, id) => {
  const note = store.data.find(item => item.id === id);
  note.name = formData.name;
  note.category = formData.category;
  note.content = formData.content;
  note.dates = formatDate(formData.dates);
};

export const handleChangeStatus = id => {
  const note = store.data.find(note => note.id === id);
  note.archived = !note.archived;
};

export const handleDelete = id => {
  store.data = store.data.filter(note => note.id !== id);
};

export const createNote = formStore => {
  const newData = {
    id: Date.now().toString(),
    name: formStore.name,
    created: formatCreatedDate(),
    category: formStore.category,
    content: formStore.content,
    dates: formatDate(formStore.dates),
    archived: false,
  };
  store.data = [...store.data, newData];
};

export const getActive = () => store.data.filter(item => !item.archived);

export const getArchive = () => store.data.filter(item => item.archived);

export const getStatistics = () =>
  store.data.reduce((acc, note) => {
    const category = acc.find(el => el.name === note.category);

    if (!category) {
      return [
        ...acc,
        {
          name: note.category,
          active: note.archived ? 0 : 1,
          archived: note.archived ? 1 : 0,
        },
      ];
    }

    note.archived ? (category.archived += 1) : (category.active += 1);
    return acc;
  }, []);

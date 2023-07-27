import {
  createNote,
  getActive,
  getArchive,
  handleDelete,
  handleChangeStatus,
  getStatistics,
  handleEdit,
} from './js/store';
import { icons } from './js/data';

const tableTbody = document.querySelector('.table__tbody');
const statisticsTbody = document.querySelector('.statistics__tbody');
const archivedTbody = document.querySelector('.archived__tbody');
const noteTemplate = document.querySelector('#note-template');
const categoryTemplate = document.querySelector('#category-template');
const addNoteButton = document.querySelector('#addNote');
const cancelButton = document.querySelector('#cancel');
const form = document.querySelector('#form');
const formContainer = document.querySelector('.formContainer');
const archivedTemplate = document.querySelector('#archived-template');

function handleSubmit(e) {
  e.preventDefault();

  const formElements = e.target.elements;
  const formData2 = {};
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.name) {
      formData2[element.name] = element.value;
    }
  }
  if (!formData2.name.trim() || !formData2.content.trim()) {
    return;
  }

  form.dataset.mode === 'edit'
    ? handleEdit(formData2, form.dataset.noteId)
    : createNote(formData2);

  resetForm();

  updateTables();
}

function addNote(note) {
  const clone = noteTemplate.content.cloneNode(true);
  clone.querySelector('.logo').innerHTML = icons[note.category];
  clone.querySelector('.name').textContent = note.name;
  clone.querySelector('.created').textContent = note.created;
  clone.querySelector('.category').textContent = note.category;
  clone.querySelector('.content').textContent = note.content;
  clone.querySelector('.dates').textContent = note.dates;

  clone
    .querySelector('.edit')
    .addEventListener('click', () => showForm('edit', note), false);
  clone.querySelector('.archived').addEventListener(
    'click',
    () => {
      handleChangeStatus(note.id);
      updateTables();
    },
    false
  );
  clone.querySelector('.delete').addEventListener(
    'click',
    () => {
      handleDelete(note.id);
      updateTables();
    },
    false
  );

  tableTbody.appendChild(clone);
}

const addCategory = category => {
  const clone = categoryTemplate.content.cloneNode(true);
  clone.querySelector('.logo').innerHTML = icons[category.name];
  clone.querySelector('.category').textContent = category.name;
  clone.querySelector('.active-count').textContent = category.active;
  clone.querySelector('.archive-count').textContent = category.archived;

  statisticsTbody.appendChild(clone);
};

const clearTable = table => {
  table.innerHTML = '';
};
const resetForm = () => {
  form.reset();
  formContainer.classList.add('hidden');
};

const fillTable = (table, tableContent) => {
  table === tableTbody
    ? tableContent.forEach(element => addNote(element))
    : tableContent.forEach(element => addCategory(element));
};

const fillInTable = (table, tableContent) => {
  table === archivedTbody &&
    tableContent.forEach(element => addArchivedNote(element));
};

const showForm = (mode = 'create', note) => {
  form.dataset.mode = mode;
  form.dataset.noteId = note?.id;

  if (note) {
    form.querySelector('#name').value = note.name;
    form.querySelector('#category').value = note.category;
    form.querySelector('#content').value = note.content;
  }

  formContainer.classList.remove('hidden');

  cancelButton.addEventListener('click', () => {
    resetForm();
  });
};

const updateTables = () => {
  clearTable(tableTbody);
  clearTable(statisticsTbody);
  clearTable(archivedTbody);

  tableTbody.dataset.status === 'active' && fillTable(tableTbody, getActive());

  fillInTable(archivedTbody, getArchive());
  fillTable(statisticsTbody, getStatistics());
};

const addArchivedNote = note => {
  const clone = archivedTemplate.content.cloneNode(true);
  clone.querySelector('.logo').innerHTML = icons[note.category];
  clone.querySelector('.name').textContent = note.name;
  clone.querySelector('.created').textContent = note.created;
  clone.querySelector('.category').textContent = note.category;
  clone.querySelector('.content').textContent = note.content;
  clone.querySelector('.dates').textContent = note.dates;

  clone.querySelector('.table-template__btn').addEventListener(
    'click',
    () => {
      handleChangeStatus(note.id);
      updateTables();
    },
    false
  );

  archivedTbody.appendChild(clone);
};

fillTable(tableTbody, getActive());
fillTable(statisticsTbody, getStatistics());
fillInTable(archivedTbody, getArchive());

form.addEventListener('submit', handleSubmit, false);
addNoteButton.addEventListener('click', () => showForm(), false);

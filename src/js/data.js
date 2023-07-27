const icons = {
  Task: '<svg  width="32" height="30"><path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path> <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"></path></svg>',
  'Random Thought':
    '<svg  width="32" height="30"><path d="M24 22h-3.172l-5-5 5-5h3.172v5l7-7-7-7v5h-4c-0.53 0-1.039 0.211-1.414 0.586l-5.586 5.586-5.586-5.586c-0.375-0.375-0.884-0.586-1.414-0.586h-6v4h5.172l5 5-5 5h-5.172v4h6c0.53 0 1.039-0.211 1.414-0.586l5.586-5.586 5.586 5.586c0.375 0.375 0.884 0.586 1.414 0.586h4v5l7-7-7-7v5z"></path>    </svg>',
  Idea: '<svg width="32" height="30"><path d="M12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM20.761 7.204c3.12 1.692 5.239 4.997 5.239 8.796s-2.119 7.104-5.239 8.796c1.377-2.191 2.239-5.321 2.239-8.796s-0.862-6.605-2.239-8.796zM9 16c0 3.475 0.862 6.605 2.239 8.796-3.12-1.692-5.239-4.997-5.239-8.796s2.119-7.104 5.239-8.796c-1.377 2.191-2.239 5.321-2.239 8.796zM3 16c0 5.372 1.7 10.193 4.395 13.491-4.447-2.842-7.395-7.822-7.395-13.491s2.948-10.649 7.395-13.491c-2.695 3.298-4.395 8.119-4.395 13.491zM24.605 2.509c4.447 2.842 7.395 7.822 7.395 13.491s-2.948 10.649-7.395 13.491c2.695-3.298 4.395-8.119 4.395-13.491s-1.7-10.193-4.395-13.491z"></path>  </svg>',
  Quote:
    '<svg  width="32" height="30"><path d="M25 20c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7l0.031 1c0 7.732-6.268 14-14 14v-4c2.671 0 5.182-1.040 7.071-2.929 0.364-0.364 0.695-0.75 0.995-1.157-0.357 0.056-0.724 0.086-1.097 0.086zM7 20c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7l0.031 1c0 7.732-6.268 14-14 14v-4c2.671 0 5.182-1.040 7.071-2.929 0.364-0.364 0.695-0.75 0.995-1.157-0.357 0.056-0.724 0.086-1.097 0.086z"></path>  </svg>',
};

const data = [
  {
    id: '1634034106634',
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '',
    archived: true,
  },
  {
    id: '1634034114519',
    name: 'The Theory of evolution',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: 'The evolution...',
    dates: '28/9/2021',
    archived: true,
  },
  {
    id: '1634034122100',
    name: 'New Feature',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new...',
    dates: '3/5/2021, 5/5/2021',
    archived: false,
  },
  {
    id: '1634034136495',
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: 'Quote',
    content: 'Power doesn`t co... ',
    dates: '1/10/2021',
    archived: false,
  },
  {
    id: '1634034144535',
    name: 'Radency',
    created: 'May 11, 2021',
    category: 'Idea',
    content: 'Lorem ipsum dolor sit amet consectetur.',
    dates: '',
    archived: false,
  },
  {
    id: '1634034152617',
    name: 'Purchases',
    created: 'May 13, 2021',
    category: 'Task',
    content: 'Lorem ipsum dolor sit amet.',
    dates: '11/10/2021, 9/10/2021',
    archived: false,
  },
  {
    id: '1634034161594',
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Task',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    dates: '',
    archived: false,
  },
];

export { data, icons };

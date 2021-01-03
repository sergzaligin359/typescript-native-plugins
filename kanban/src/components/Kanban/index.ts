export default (): void => {
  console.log('KANBAN...');

  interface User {
    name: string;
    status: number;
  }

  const users: User[] = [
    {
      name: 'Sergey',
      status: 0,
    },
    {
      name: 'Ivan',
      status: 1,
    },
    {
      name: 'Viktor',
      status: 0,
    },
    {
      name: 'Luda',
      status: 0,
    },
  ];

  console.log('Users...', users);

  let draggedItem;

  console.log('draggedItem - droppedItem', draggedItem);

  const dragItems = document.querySelectorAll('.dragItem') as NodeList;
  const dropZones = document.querySelectorAll('.dropZone') as NodeList;

  const dragstartHandler = (event: Event): void => {
    const target = event.target as HTMLElement;
    draggedItem = target;
    target.classList.add('dragItem_active');
  };

  const dragendHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    target.classList.remove('dragItem_active');
    // console.log('dragendHandler', target);
  };

  const dragHandler = (event: Event) => {
    // console.log('dragHandler');
  };

  const dragenterHandler = (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    target.classList.add('dropZone--active');
    if (target.className === 'dropZone') {
      console.log('dragenterHandler', target);
    }
    event.stopPropagation();
  };

  const dragleaveHandler = (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    target.classList.remove('dropZone--active');
    if (target.className === 'dropZone') {
      console.log('dragleaveHandler', target);
    }
    event.stopPropagation();
  };

  const dragoverHandler = (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
  };

  const dropHandler = (event: Event): void => {
    const target = event.target as HTMLElement;
    target.append(draggedItem);
    draggedItem = null;
  };

  dragItems.forEach((item) => {
    item.addEventListener('dragstart', dragstartHandler);
    item.addEventListener('drag', dragHandler);
    item.addEventListener('dragend', dragendHandler);
  });

  dropZones.forEach((item) => {
    item.addEventListener('dragenter', dragenterHandler);
    item.addEventListener('dragleave', dragleaveHandler);
    item.addEventListener('dragover', dragoverHandler);
    item.addEventListener('drop', dropHandler);
  });
};

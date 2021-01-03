export default (): void => {
  console.log('Resize...');
  const resizer = document.querySelector('.col-resize') as HTMLDivElement;
  const resizerh = document.querySelector('.col-resize-h') as HTMLDivElement;
  // console.log('Div...', div);

  resizer.addEventListener('mousedown', (e: Event) => {
    const target = e.target as HTMLDivElement;
    const parent = target.closest('#item') as HTMLDivElement;
    console.log('parent', parent.getBoundingClientRect());
    const coords = parent.getBoundingClientRect();
    document.onmousemove = (event: MouseEvent) => {
      const delta = event.pageX - coords.right;
      console.log('mousemove event.pageX', event.pageX);
      console.log('mousemove delta', delta);
      parent.style.width = coords.width + delta + 'px';
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  });

  resizerh.addEventListener('mousedown', (e: Event) => {
    const target = e.target as HTMLDivElement;
    const parent = target.closest('#item') as HTMLDivElement;
    console.log('parent', parent.getBoundingClientRect());
    const coords = parent.getBoundingClientRect();
    document.onmousemove = (event: MouseEvent) => {
      const delta = event.pageY - coords.bottom;
      console.log('mousemove event.pageX', event.pageX);
      console.log('mousemove delta', delta);
      parent.style.height = coords.height + delta + 'px';
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
  });
};

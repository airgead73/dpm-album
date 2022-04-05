const loading = {
  containter: q.id('loading'),
  txtbox: q.id('loading__textbox'),
  txt: q.id('loading__message')
}

const handleLoading = ($status, $message) => {
  txt.append(loading.txt, $message);

  switch($status) {
    case 'open':
      a.set(loading.txt, 'data-display', 'show');
      break;
    case 'close':
      a.set(loading.txt, 'data-display', 'hide');
      break;
    default:
      a.set(loading.txt, 'data-display', 'hide');
  }

}
const loading = {
  container: q.id('loading'),
  txtbox: q.id('loading__textbox'),
  txt: q.id('loading__message')
}

const handleLoading = ($status, $msg) => {  

  switch($status) {
    case 'open':
      txt.append(loading.txt, $msg);
      a.set(loading.container, 'data-display', 'show');
      break;
    case 'close':
      (loading.txt).text = '';
      a.set(loading.container, 'data-display', 'hide');
      break;
    default:
      txt.append(loading.txt, '');
      a.set(loading.container, 'data-display', 'hide');
      return;
  }

}


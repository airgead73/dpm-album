const loading = {
  container: q.id('loading'),
  txtbox: q.id('loading__textbox'),
  txt: q.id('loading__message')
}

const handleLoading = ($status, $msg) => {  

  console.log('loading executed')

  switch($status) {
    case 'open':
      console.log('open executed');
      txt.append(loading.txt, $msg);
      a.set(loading.container, 'data-display', 'show');
      break;
    case 'close':
      console.log('close executed');
      //txt.append(loading.txt, $msg);
      (loading.txt).text = '';
      a.set(loading.container, 'data-display', 'hide');
      break;
    default:
      console.log('default executed');
      txt.append(loading.txt, '');
      a.set(loading.container, 'data-display', 'hide');
      return;
  }

}


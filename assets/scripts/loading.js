const loading = {
  container: q.id('loading'),
  txtbox: q.id('loading__textbox'),
  txt: q.id('loading__message')
}

const handleLoading = ($status) => {
  

  switch($status) {
    case 'open':
      return console.log('open loading div');
      break;
    case 'close':
      return console.log('close loading div')
      break;
    default:
      return console.log('close loading div')
  }

}


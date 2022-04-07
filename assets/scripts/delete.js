const btnsDelete = Array.from(q.all('button[data-fetch="delete"]'));

const buildRequest = ($url) => {
  c.log('building request')
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const request = new Request($url, options);

  return request;
}

const sendRequest = async ($url) => {

  try {

    c.log('sending request')

    handleLoading('open', `Processing...`);

    const request = buildRequest($url);

    const response = await fetch(request);
    const json = await response.json();

    const { success, message } = json;

    if(success) {      
      alert(message);
      window.location.reload();
    }

  } catch(err) {
    handleLoading('close');
    c.error(err);
  }
}


const confirmDelete = ($btn) => {

  const toDelete = window.confirm(`${a.get($btn, 'title')}? If yes, click ok.`);

  if(toDelete) return sendRequest(a.get($btn, 'data-action')); 

  return;

}



const deleteInit = ($btns) => {

  $btns.forEach($btn => {
    $btn.addEventListener('click', function(e) {   
      
      confirmDelete($btn);

    });
  })

}

if(btnsDelete.length) deleteInit(btnsDelete); 
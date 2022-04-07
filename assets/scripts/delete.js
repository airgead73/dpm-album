const btnsDelete = Array.from(q.all('button[data-fetch="delete"]'));



const buildRequest = ($url) => {
  console.log('process deletion:', $url);
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

    handleLoading('open', `Processing...`);

    const request = buildRequest($url);

    const response = await fetch(request);
    const json = await response.json();

    if(json.success) {
      handleLoading('close');
      c.log(json);
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
function sendMessage(message){
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if(!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, message)
  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]'))
  }, 100)
}

function send_handle(){

  let num=document.getElementById("number").value;

  let time= document.getElementById("time").value;

    let name= document.getElementById("name").value;
  
  var win = window.open(`https://wa.me/${num}?text=hello%20${name}%20Patient%20your%20appointment%20at%20=>${time}`, '_blank');
 
  win.focus();
}
export function renderBlock (elementId: string, html: string): void {
  const element: HTMLElement | null = document.getElementById(elementId)
  if (element != null) {
    element.innerHTML = html
  } else {
    throw 'Unexpected error: element is NULL!';
  }
}

export function renderToast (message?: {text: string, type: string}, action?: {name: string, handler: any}) {
  let messageText: string | null = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast()
    }
  }
}

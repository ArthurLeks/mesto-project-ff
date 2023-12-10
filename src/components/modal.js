export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    
    document.addEventListener('keyup', closePopupbyEsc);
  }
  

  export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', closePopupbyEsc);
  }
  
  
  function closePopupbyEsc(event) {
    if (event.key === 'Escape') {
      const popup = document.querySelector('.popup_is-opened');
      closePopup(popup);
    }
  }
let popupOpen = false; // Флаг, который показывает, открыт ли попап

// Функция для изменения цвета фона и отображения попапа
function showPopup(postIndex) {
    if (popupOpen) {
        closePopup();
    }

    const postClass = '.post-' + postIndex;
    const popupClass = '.popup-' + postIndex;
    const post = document.querySelector(postClass);
    const popup = document.querySelector(popupClass);

    post.style.backgroundColor = "#FF5555";
    setTimeout(() => {
        post.style.backgroundColor = "#B6F5F5";
        popup.classList.add('active');
        // Устанавливаем opacity 0.5 для всех элементов, кроме попапов
        setOpacityForNonPopups(0.3);
        popupOpen = true; // Устанавливаем флаг, что попап открыт

        setTimeout(() => {
            document.addEventListener('click', closePopup);
        }, 100);
    }, 200);
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');

    // Восстанавливаем opacity для всех элементов, кроме попапов
    setOpacityForNonPopups(1);

    for (let i = 0; i < popups.length; i++) {
        popups[i].classList.remove('active');
    }

    document.removeEventListener('click', closePopup);
    popupOpen = false; // Сбрасываем флаг, что попап закрыт
}

// Функция для установки opacity для всех элементов, кроме попапов
function setOpacityForNonPopups(opacity) {
    const allElements = document.querySelectorAll('body > *:not(.popup)');
    allElements.forEach((element) => {
        element.style.opacity = opacity;
    });
}

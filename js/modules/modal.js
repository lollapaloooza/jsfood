function showModal(modalSelector, modalTimerId) {
    modal = document.querySelector(modalSelector);
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}


function closeModal(modalSelector) {
    modal = document.querySelector(modalSelector);
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        ESC_CODE = 'Escape';



    modalTrigger.forEach((item) => {
        item.addEventListener("click", () => showModal(modalSelector, modalTimerId));

        item.addEventListener("keydown", (evt) => {
            if (evt.code == ESC_CODE && modal.classList.contains("show")) {
                closeModal(modalSelector);
            }
        });
    });

    modal.addEventListener('click', (evt) => {
        if (evt.target === modal || evt.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export { showModal, closeModal };
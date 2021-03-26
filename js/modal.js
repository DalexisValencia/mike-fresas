document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var closeModal = document.getElementById("closeModal");
    var openModalClass = document.getElementsByClassName('openModal');
    for (let el of openModalClass) {
        el.onclick = function() {
            var modalType = el.getAttribute('data-modal');
            modal.style.display = "block";
            for (let el of document.querySelectorAll('.modal-body > *')) el.style.display = 'none';
            for (let el of document.querySelectorAll('.' + modalType)) el.style.display = 'block';
            if (modalType == 'push1') {
                document.querySelectorAll('.shared')[0].style.display = 'flex'
            }
        }
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // click en cualquier parte de la ventana
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
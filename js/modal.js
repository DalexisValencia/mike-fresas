document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var openModal = document.getElementById("exampleBtn");
    var closeModal = document.getElementById("closeModal");
    var modalType = openModal.getAttribute('data-modal')
    openModal.onclick = function() {
        modal.style.display = "block";
        for (let el of document.querySelectorAll('.modal-body > *')) el.style.display = 'none';
        for (let el of document.querySelectorAll('.' + modalType)) el.style.display = 'block';
        if (modalType == 'push1') {
            document.querySelectorAll('.shared')[0].style.display = 'flex'
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
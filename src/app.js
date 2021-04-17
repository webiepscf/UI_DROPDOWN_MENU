
    document.querySelectorAll('.dropdown-trigger').forEach((trigger) => {
        
        trigger.onclick = function (e) {
            e.preventDefault();
            this.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('visible');
        }

        trigger.onblur = function () {
            this.closest('.dropdown').querySelector('.dropdown-content').classList.remove('visible');
        }

    });
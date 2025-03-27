document.getElementById('findFuzzyLink').addEventListener('click', function(event) {
    event.preventDefault();
    var findFuzzyModal = new bootstrap.Modal(document.getElementById('findFuzzyModal'));
    findFuzzyModal.show();
});
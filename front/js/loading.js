document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('move1').addEventListener('click', function() {
        window.location.href = "./mainpage.html";
    });

    document.getElementById('move2').addEventListener('click', function() {
        window.location.href = "./list.html";
    });

    // Get the elements
    var infobar = document.querySelector('.xi-info-o');
    var info = document.querySelector('.info');
    var header = document.querySelector('.inner-header')
    var main = document.querySelector('.main-div')
    var closeInfo = document.querySelector('.xi-close');

    // Hide the info initially
    info.style.display = 'none';

    // Add click event listener to infobar
    infobar.addEventListener('click', function () {
        // Show the info when infobar is clicked
        info.style.display = 'block';
        header.style.background = '#f9d4df'
        main.style.background = '#f9d4df'
        header.style.opacity = 0.2;
        main.style.opacity = 0.2;
    });

    // Add click event listener to close button
    closeInfo.addEventListener('click', function () {
        // Hide the info when close button is clicked
        info.style.display = 'none';
        header.style.background = 'none'
        main.style.background = 'none'
        header.style.opacity = 1;
        main.style.opacity = 1;
    });
});
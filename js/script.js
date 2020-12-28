const swtichButton = document.getElementById('switcher');

changeTheme = () => {
    if(document.documentElement.className === 'lightTheme') {
        document.documentElement.className = 'darkTheme';
    } else {
        document.documentElement.className = 'lightTheme'
    }
}

swtichButton.addEventListener('click', () => {
    changeTheme();
})
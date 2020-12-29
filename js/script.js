const swtichButton = document.getElementById('switcher');
const facebookBoxes = document.getElementsByClassName('facebook');
const instagramBoxes = document.getElementsByClassName('instagram');
const twitterBoxes = document.getElementsByClassName('twitter');
const youtubeBoxes = document.getElementsByClassName('youtube');

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

for ( i =0; i<= facebookBoxes.length - 1; i++) {
    facebookBoxes[i].addEventListener('mouseover', () => {
        for( j = 0; j <= facebookBoxes.length - 1; j++) {
            facebookBoxes[j].classList.add('active');
        }
        for( j = 0; j <= instagramBoxes.length - 1; j++) {
            if(instagramBoxes[j].classList.contains('active')) {
                instagramBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= twitterBoxes.length - 1; j++) {
            if(twitterBoxes[j].classList.contains('active')) {
                twitterBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= youtubeBoxes.length - 1; j++) {
            if(youtubeBoxes[j].classList.contains('active')) {
                youtubeBoxes[j].classList.remove('active');
           }
        }
    });
}
for ( i =0; i<= instagramBoxes.length - 1; i++) {
    instagramBoxes[i].addEventListener('mouseover', () => {
        for( j = 0; j <= facebookBoxes.length -1; j++) {
            if(facebookBoxes[j].classList.contains('active')) {
                 facebookBoxes[j].classList.remove('active');
            }
        }
        for( j = 0; j <= instagramBoxes.length -1; j++) {
            if(!instagramBoxes[j].classList.contains('active')) {
                instagramBoxes[j].classList.add('active');
           }
        }
        for( j = 0; j <= twitterBoxes.length -1; j++) {
            if(twitterBoxes[j].classList.contains('active')) {
                twitterBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= youtubeBoxes.length -1 ; j++) {
            if(youtubeBoxes[j].classList.contains('active')) {
                youtubeBoxes[j].classList.remove('active');
           }
        }
    });
}
for ( i =0; i<= twitterBoxes.length - 1; i++) {
    twitterBoxes[i].addEventListener('mouseover', () => {
        for( j = 0; j <= facebookBoxes.length - 1; j++) {
            if(facebookBoxes[j].classList.contains('active')) {
                facebookBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= instagramBoxes.length - 1; j++) {
            if(instagramBoxes[j].classList.contains('active')) {
                instagramBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= twitterBoxes.length - 1; j++) {
            if(!twitterBoxes[j].classList.contains('active')) {
                twitterBoxes[j].classList.add('active');
           }
        }
        for( j = 0; j <= youtubeBoxes.length - 1; j++) {
            if(youtubeBoxes[j].classList.contains('active')) {
                youtubeBoxes[j].classList.remove('active');
           }
        }
    });
}
for ( i =0; i <= youtubeBoxes.length - 1; i++) {
    youtubeBoxes[i].addEventListener('mouseover', () => {
        for( j = 0; j <= facebookBoxes.length - 1; j++) {
            if(facebookBoxes[j].classList.contains('active')) {
                facebookBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= instagramBoxes.length - 1; j++) {
            if(instagramBoxes[j].classList.contains('active')) {
                instagramBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= twitterBoxes.length - 1; j++) {
            if(twitterBoxes[j].classList.contains('active')) {
                twitterBoxes[j].classList.remove('active');
           }
        }
        for( j = 0; j <= youtubeBoxes.length - 1; j++) {
            if(!youtubeBoxes[j].classList.contains('active')) {
                youtubeBoxes[j].classList.add('active');
           }
        }
    });
}
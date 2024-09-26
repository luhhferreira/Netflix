function modalToggle(nomeDoVideo){

        document.querySelector("#modal").classList.toggle("modalHidden");
        document.querySelector("#videoModal").pause();

        if(nomeDoVideo){

        document.querySelector("#videoModal").src=
        `videos/${nomeDoVideo}.mp4`;

        console.log(document.querySelector("#videoModal").src)
        }
    }

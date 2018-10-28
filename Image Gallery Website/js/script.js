var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //add the JSON data received from the url to a variable
        var data = JSON.parse(this.responseText);
        var photo;
        var t_url;
        var s_url=[];

        //to get images in jpg format
        for (var i=0; i < data.photos.photo.length; i++) {
            photo = data.photos.photo[i];
            t_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
            s_url.push(t_url);
        }

        function buildImages() {
            // the container
            var container = document.getElementById('content');
            for (var i = 0; i < s_url.length; i++) {
                // create the image element
                var imageElement = document.createElement('img');
                imageElement.setAttribute('src', s_url[i]);
                imageElement.setAttribute('class','hover-shadow cursor');
                imageElement.width=120;
                imageElement.height=120;
                imageElement.style="padding: 5px; border: 1px solid #999; border-radius: 5px; margin:10px;";

                // append the element to the container to show images on webpage
                container.appendChild(imageElement);
                
                //to display image in large size 
                imageElement.addEventListener("click", displayImage);
                function displayImage(event) {
                    document.getElementById('myModal').innerHTML = '<span class="close cursor">&times;</span><div class="modal-content"><div class="mySlides"><img id="imgsrc" src="' + event.target.src + '" style="width:100%"></div></div><a class="prev">&#10094;</a><a class="next">&#10095;</a>';
                    document.getElementById('myModal').style.display = "block";
                    var span = document.getElementsByClassName("close")[0];
                    span.onclick = function() {
                        document.getElementById('myModal').style.display = "none";
                    }

                    //creating the next and previous functionalities for images.
                    var prev = document.querySelector('.prev');
                    prev.addEventListener('click', prevImage);
                    
                    var next = document.querySelector('.next');
                    next.addEventListener('click', nextImage);

                    function getCurrentImageIndex() {
                        return s_url.indexOf(document.getElementById('imgsrc').src);
                    }

                    function nextImage() {
                        nextIm = (getCurrentImageIndex() + 1) % s_url.length;
                        document.getElementById("imgsrc").src = s_url[nextIm];
                    }

                    function prevImage() {
                        nextIm = (getCurrentImageIndex() - 1 + s_url.length) % s_url.length;
                        document.getElementById("imgsrc").src = s_url[nextIm];
                    }
                }

            }

        }
        buildImages();
    }
};
//added url provided by flickr by accessing photos from personal Flickr account.
xmlhttp.open("GET", "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=241cf69164b208983ad9a3568882d312&user_id=157205450%40N05&format=json&nojsoncallback=1", true);
xmlhttp.send();

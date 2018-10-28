# Image-Gallery
This is a simple image gallery which I created using only HTML, CSS and JavaScript similar to LightBox. 

# Description of Task 
The task is to create an image gallery with functionality similar to LightBox. The image gallery should be able to retrieve data/images from a public API of my choice. 
-	First show images as a thumbnail on the website 
-	When you click on any image, it should pop up with the original image along with navigation buttons
-	When you click on the next or previous buttons it should show the image next or previous to the one we have clicked for viewing. 
-	The entire website should be built only using plain Javascript without any dependencies. 

# Solution
I created the whole website using only HTML, CSS and plain Javascript without any dependencies. The steps I have taken to create the website are as follows:
1. I created a personal Flickr account (https://www.flickr.com/photos/ambikav/) and uploaded some images into my account. I created a key for the API in order to retrieve the images.
2. I used the API method 'flickr.people.getPublicPhotos', this method helps to get the list of public photos for the given user. I provided my user ID to access the images in my account. Then created the url to get the data in JSON format. "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=241cf69164b208983ad9a3568882d312&user_id=157205450%40N05&format=json&nojsoncallback=1".
3. I have created 3 files for my website. An HTML file(index.html), a CSS file(style.css) and a Javacript file(script.js).
4. In HTML I have section to show the images and a modal to display the images on click.
5. I have done most of my coding in the script.js file for the images to be displayed on website. I used XMLHttpRequest object to request data from the server. Iterated through the JSON data and retrieved the photo array where the data about the image is stored eg. photo id, photo farm etc. 
6. Since you won't get the image in jpg format, I had to create the image url provided by flickr and stored the images in an array.
7. I wrote a function to create an image element in Javascript and append the images onto the website. Then I wrote another function (inside the earlier function) to display the images on click and the enlarged images will be viewed on the modal box.

8. Created the next and previous functionalities by getting the current image index. 

# Deployment
I have deployed my website to Github and Heroku. The links are as follows:
https://ambika-image-gallery.herokuapp.com/
https://ambikavaisag.github.io/Image-Gallery/
I have tested my website in latest versions of Chrome, Firefox, IE and Safari Explorer.

# Technical Choices and tradeoffs:
As mentioned in the instructions to this exercise, I could only use plain JavaScript for the solution. If not restricted by this condition, I would have used AngularJS and libraries which would have enabled me to develop a page in a quicker and easier way, with much shorter code.
Second, I have used basic CSS to complete the task due to time constraints, however I would put in more efforts depending upon the client needs/application, had this been for a particular application.

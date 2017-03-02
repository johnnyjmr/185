/*
Johnny Mendoza & Andi Lila
CS 185
Assignment6

 */


document.querySelector('.container').addEventListener('mouseover', function(e){
    //check if i'm over an image tag
    if(e.target.tagName==='IMG'){
        //create new element to hold the bigger image
        var newDiv=document.createElement('div');
        newDiv.className='image-display';

        e.target.parentNode.appendChild(newDiv);

        var myImg=document.createElement('img');
        myImg.src=e.target.src;

        //position the image
        newDiv.style.left=e.pageX + 15 + 'px';
        newDiv.style.top=e.pageY + 15 + 'px';
        newDiv.appendChild(myImg);

        //add the mouseout event
        e.target.addEventListener('mouseout', function moveOut(m){
            var node=m.target.parentNode.querySelector('div.image-display');
            node.parentNode.removeChild(node);

            e.target.removeEventListener('mouseout', moveOut, false);
        }, false);

        //make the img follow the mouse
        e.target.addEventListener('mousemove', function(f){
            //position the moving image in relation to the cursor
            newDiv.style.left=f.pageX + 15 +'px';
            newDiv.style.top=f.pageY + 15 +'px';
        });
    }
},false);


// document.querySelector('.container').addEventListener("mouseover", function (e) {
//
//     if (e.target.tagName == 'img') {
//         var myOverlay = document.createElement('div');
//         myElement.className = 'image-display';
//         e.target.parentNode.appendChild(myOverlay);
//
//
//         var largeImage = document.createElement('img');
//         largeImage.src = e.target.src;
//
//         largeImage.style.left = e.pageX + 15 + 'px';
//         largeImage.style.top = e.pageY + 15 + 'px';
//
//
//
//         e.target.addEventListener('mousemove', function (f) {
//             myOverlay.style.left = f.pageX + 15 + 'px';
//             myOverlay.style.top = f.pageY + 15 + 'px';
//         });
//     }
//
// }, false)



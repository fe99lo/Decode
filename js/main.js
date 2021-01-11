// Add all your Js
function handleDragStart(e) {
this.style.opacity = '0.4';
dragSrcEl = this;

e.dataTransfer.effectAllowed = 'move';
e.dataTransfer.setData('html', this.innerHTML);
}


function handleDragEnd(e)
 {
this.style.opacity = '1';
}

items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }


let items = document.querySelectorAll('.container .box');
items.forEach(function(item) {
item.addEventListener('dragstart', handleDragStart, false);
item.addEventListener('dragover', handleDragOver, true);
item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('dragend', handleDragEnd, false);
});

function handleDrop(e) {
  e.stopPropagation();
  return false;
  this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
  
}

function handleDrop(e) {
  e.stopPropagation(); // Stopping some browser from redirect.
  e.preventDefault();

  var files = e.dataTransfer.files;
  for (var i = 0, f; f = files[i]; i++) {
    // Read the File objects in this FileList.
  }
}


var audio = document.getElementById('audio');
var playpause = document.getElementById("play");


function togglePlayPause() {
	
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      audio.play();
   } else {
      playpause.title = "Play";
      audio.pause();
     }   
   }






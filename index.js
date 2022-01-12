  // Load the epub
  var book = ePub("./quadratic_equation.epub");
  console.log(book);

  //how to render the epub
  var rendition = book.renderTo("viewer2", {
    width: "100%",
    height: 1000,
    // ignoreClass: 'annotator-hl',
    // manager: "continuous"
  });

  var displayed = rendition.display();

  // Navigation loaded
  book.loaded.navigation.then(function(toc){
    // console.log(toc);
  });

  var next = document.getElementById("next");
  next.addEventListener("click", function(){
    rendition.next();
  }, false);

  var prev = document.getElementById("prev");
  prev.addEventListener("click", function(){
    rendition.prev();
  }, false);

  var keyListener = function(e){

    // Left Key
    if ((e.keyCode || e.which) == 37) {
      rendition.prev();
    }

    // Right Key
    if ((e.keyCode || e.which) == 39) {
      rendition.next();
    }

  };

  // rendition.on("keyup", keyListener);
  // document.addEventListener("keyup", keyListener, false);

  rendition.on("relocated", function(location){
    // console.log(location);
  });


  // Apply a class to selected text
  // rendition.on("selected", function(cfiRange, contents) {
  //   rendition.annotations.highlight(cfiRange, {}, (e) => {
  //     console.log("highlight clicked", e.target);
  //   });
  //   contents.window.getSelection().removeAllRanges();
    // const tip = new TextTip({
    //   scope: '.scope-one',
    //   iconFormat: 'url',
    //   buttons: [
    //     {title: 'Copy and paste', icon: 'img/fontawesome/url/copy.svg', callback: console.log},
    //     {title: 'Share', icon: 'img/fontawesome/url/share-square.svg', callback: console.log},
    //     {title: 'Favourite', icon: 'img/fontawesome/url/heart.svg', callback: console.log},
    //     {title: 'Like', icon: 'img/fontawesome/url/thumbs-up.svg', callback: console.log},
    //     // {title: 'like', icon: 'img/fontawesome/url/thumbs-up.svg', callback: console.log}

    //   ]})
  // });

  // this.rendition.themes.default({
  //   '::selection': {
  //     'background': 'rgba(255,255,0, 0.3)'
  //   },
  //   '.epubjs-hl' : {
  //     'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
  //   }
  // });

  // Illustration of how to get text from a saved cfiRange
  // var highlights = document.getElementById('highlights');

  //function for highlighted text
  // rendition.on("selected", function(cfiRange) {

  //   book.getRange(cfiRange).then(function (range) {
  //     var text;
  //     var li = document.createElement('li');
  //     var a = document.createElement('a');
  //     var remove = document.createElement('a');
  //     var textNode;

  //     if (range) {
  //       text = range.toString();   //parsed to string
  //       textNode = document.createTextNode(text);   //

  //       a.textContent = cfiRange;
  //       a.href = "#" + cfiRange;
  //       a.onclick = function () {
  //         rendition.display(cfiRange);
  //       };

  //       remove.textContent = "remove";
  //       remove.href = "#" + cfiRange;
  //       remove.onclick = function () {
  //         rendition.annotations.remove(cfiRange);
  //         return false;
  //       };

  //       li.appendChild(a);
  //       li.appendChild(textNode);
  //       li.appendChild(remove);
  //       highlights.appendChild(li);
  //     }

  //   })

  // });


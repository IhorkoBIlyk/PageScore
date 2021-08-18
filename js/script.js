   class Node {
     constructor(val) {
       this.val = val;
       this.prev = null;
       this.next = null;
       this.index = 0;
     }
   }
   class DoublyLinkedList {
     constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
     }
     push(val) {
       const newNode = new Node(val);
       if (this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
       } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         newNode.index = this.length;
         this.tail = newNode;
       }
       this.length++;
       return this;
     }
     getByName(name) {
       var current = this.head;
       while (current) {
         if (current.val == name) {
           return current;
         }
         current = current.next;
       }
     }
   }
   window.onload = (event) => {

   var scrollableElement = document.body;
   scrollableElement.addEventListener('wheel', checkScrollDirection);
   
   let fadeAwayTime = 3000;
   let ll = new DoublyLinkedList();
   ll.push("what-is-seo");
   ll.push("why-seo");
   ll.push("factors-impacting");
   ll.push("on-off-seo");
   ll.push("ranking-factors");
   ll.push("top-10-factors");
   ll.push("what-can-you-do");
   ll.push("why-page-speed");
   ll.push("ways-to-improve");
   ll.push("minify-everything");
   ll.push("render-blocking-js");
   ll.push("optimize-images");
   ll.push("optimize-fonts");
   ll.push("preconnect-preload");
   ll.push("cls");
   ll.push("accessibility");
   ll.push("background-and-foreground");
   ll.push("font-sizes");
   ll.push("labels-titles");
   ll.push("aria-attributes");

   var elems = document.getElementsByClassName("side-navigation__link");
   let elem = ll.getByName(window.location.href.split('#')[1]);
   let i = 0;
   if (elem) {     
    i = elem.index;
   }
   elems[i].classList.add("side-navigation__item_active");
   if (!elem) {
     elem = ll.head;
   } else {
     location.href = "#";
     location.href = `#${elem.val}`;
   }

   
   for (let index = 0; index < elems.length; index++) {
    elems[index].classList.remove("side-navigation__item_active");
    }
    elems[i].classList.add("side-navigation__item_active");
    setTimeout(function() { $(elems[i]).children(".side-navigation__title").addClass("fadeAway") }, fadeAwayTime);


   var lastTime = 0;
   function checkScrollDirection(event) {
     if (Math.floor((new Date() - lastTime) / 400) < 2) {} else {
       
       if (checkScrollDirectionIsUp(event)) {
         if (elem.prev) {
           i--;
           location.href = "#";
           location.href = `#${elem.prev.val}`;
           elem = elem.prev;
         }
       } else {
         if (elem.next) {
           i++;
           location.href = "#";
           location.href = `#${elem.next.val}`;
           elem = elem.next;
         }
       }

       for (let index = 0; index < elems.length; index++) {
          elems[index].classList.remove("side-navigation__item_active");
          $(elems[index]).children(".side-navigation__title").removeClass("fadeAway");
       }
       setTimeout(function() { $(elems[i]).children(".side-navigation__title").addClass("fadeAway") }, fadeAwayTime);
       elems[i].classList.add("side-navigation__item_active");
       lastTime = new Date();
     }
   }

   function checkScrollDirectionIsUp(event) {
     if (event.wheelDelta) {
       return event.wheelDelta > 0;
     }
     return event.deltaY < 0;
   }



   for (let index = 0; index < elems.length; index++) {
    elems[index].addEventListener('click', function() {
      for (let j = 0; j < elems.length; j++) {
        elems[j].classList.remove("side-navigation__item_active");
        $(elems[j]).children(".side-navigation__title").removeClass("fadeAway");
      }
      elems[index].classList.add("side-navigation__item_active");
      location.href = "#";
      let currentPlace = $(elems[index]).attr('class').split(' ')[1]
      location.href = `#${currentPlace}`;    
      elem = ll.getByName(currentPlace);  
      i = index
      
      setTimeout(function() { $(elems[index]).children(".side-navigation__title").addClass("fadeAway") }, fadeAwayTime);
    }, false);
  }
};
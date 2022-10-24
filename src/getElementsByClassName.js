// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  console.log('NEW TEST')

  // I - string (target class name)
  // O - array of elements with target class name
  var elements = [];
  var bodyElement = document.body;

  var innerFunc = function(element, className) {
    // console.log('made it: ', element);
    var children = element.childNodes;
    var elementClass = element.classList;

    console.log('children: ', children);
    console.log('elementClass: ', elementClass)
    console.log('children length: ', children.length);

    // check if element has a class (at all)
      // if classList contains className,
      // then push element itself into elements array
    if (elementClass && elementClass.contains(className)) {
      elements.push(element);
    }

    // check how many child the element has
      // if element HAS children
      // iterate through children
      // call innerFunc on each child
    if (children.length > 0) {
      children.forEach(function(child) {
        innerFunc(child, className)
      })
    }
  };

  innerFunc(bodyElement, className);
  return elements;
};
  // You should use document.body, element.childNodes, and element.classList
  // console.log('doc body: ', document.body);
  // console.log('childNOdes: ', document.body.childNodes); // array-like
  // console.log('classList: ', document.body.classList);
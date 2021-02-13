function HTMLElements(str) {
  let openingTags = str.match(/<\w+>/g)
  let closingTags = str.match(/(<\/\w+>)/g).reverse();
  let strObj = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<p>': '</p>',
    '<em>': '</em>',
    '<b>': '</b>',
  };

  for (let i = 0; i < openingTags.length; i++) {
      let current_element = i[0];
      if
      
  }
  
  // There might not be the same number of opening and closing tags
  const max = Math.max(openingTags.length, closingTags.length);
  
  for (let i = 0; i < max; i++) {
    if (strObj[openingTags[i]] !== closingTags[i]) {
      return (openingTags[i] || closingTags[i]).replace(/<|>/g, '');
    }
  }

  return true;
}

function demo(str) {
  const res = HTMLElements(str);
  console.log(str, '\t--> ', res);
}

demo("<div><div><b><b/></div></p>"); // "div" (closing a `div` with a `p`)
demo("<p><div><b><b/></div></p>");   // "b" (because `<b/>` is invalid)
demo("<p><div></p></div>");          // "p" (wrong order)
demo("<p><div><b></b>");             // "p" (not closed at all)
demo("<p><div></b></div></p>");      // "/b" (not opened)
demo("<p><div><b></b></div></p>");
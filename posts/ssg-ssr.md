---
title: "Ebook reader: day 1: initial try outs"
date: "2020-01-02"
---

I want to build an application that I can see myself using. I have lost some of my initial Russian language abilities. My ability is neither begginer nor fluent. I can pronounce words quite well but I lack the vocabularly to engage in smooth conversation.

I was initially trying to find an app to let me read a book in Russian and translate word on tap. Using kindle proved to be slow and I want to be able to use the words I looked up in Anki style flashcard system.

### step 1: messing arround

Initially the task of putting an Epub into a website didn't seem that hard. I wanted to parse an epub, then render the text as normally. But I need it to support all types of epubs, images within them chapter selection and so on to make it usable for others.

Naive attempt was to just use epubjs and render the html using react-html-parser. But this doesnt seem to work together well.

Another problem is I want to be able to tap the text not hold it. The user should be able to look up a dictionary definition with minimal friction. Implementing in React can seem difficult as each word would need an onClick event.

### Conclusion

The only thing I managed to an actual result is by putting an extracted epub xhtml file into an Iframe.

https://github.com/gerhardsletten/react-reader this repo seems to have achieved an epub reader in react. I will try to figure out how it works and fork it to try and implement an event on each word click.
